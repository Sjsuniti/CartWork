'use client';

import { useCallback, useTransition } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import toast from 'react-hot-toast';

export default function SignIn() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    startTransition(async () => {
      // const result = await signIn('credentials', {
      //   email,
      //   password,
      //   redirect: false,
      // });

      // if (result?.error) {
      //   toast.error('Invalid credentials');
      // } else if (result?.ok) {
      //   toast.success('Signed in successfully');
      //   window.location.href = '/';
      // }
      const result = await signIn("credentials", {
  email,
  password,
  redirect: true,
  callbackUrl: "/",   // ✅ important, otherwise result.url is undefined
});

if (result?.error) {
  toast.error("Invalid credentials");
} else if (result?.ok && result?.url) {
  toast.success("Signed in successfully");
  router.push('/');  // ✅ use router.push instead of window.location.href
}
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <p className="text-center mt-4 text-sm">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


