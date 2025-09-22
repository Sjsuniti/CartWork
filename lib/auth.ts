import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db';
import { User } from './schema';


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
       
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('Missing credentials');
            return null;
          }

          const user = await db.collection<User>('users').findOne({ email: credentials.email as string });
          
          if (!user) {
            console.log('User not found:', credentials.email);
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password as string, user.password);
          
          if (!isValid) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }

          console.log('User authenticated successfully:', user.email);
          return {
            id: user._id?.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
   
  },



  callbacks: {
  async jwt({ token, user }) {
    // When user first signs in, attach user data to the token
    if (user) {
      token.id = user.id;
      token.name = user.name;
      token.email = user.email;
    }
    return token;
  },
  async session({ session, token }) {
    // Make the token values available in the client session
    if (token) {
      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
    }
    return session;
  },
  async redirect({ url, baseUrl }) {
    if (url.startsWith('/')) return `${baseUrl}${url}`;
    if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  }
},

// callbacks: {
//   async jwt({ token, user }) {
//     if (user) {
//       token.id = user.id;
//       token.name = user.name;
//       token.email = user.email;
//     }
//     return token;
//   },
//   async session({ session, token }) {
//     if (token) {
//       session.user.id = token.id as string;
//       session.user.name = token.name as string;
//       session.user.email = token.email as string;
//     }
//     return session;
//   },
//   async redirect({ url, baseUrl }) {
//     // ✅ Always go to dashboard after sign in
//     if (url.includes("/auth/signin")) {
//       return `${baseUrl}/dashboard`;
//     }
//     if (url.startsWith("/")) return `${baseUrl}${url}`;
//     if (new URL(url).origin === baseUrl) return url;
//     return baseUrl;
//   },
// },


  session: { strategy: 'jwt' },
  debug: true,
});



