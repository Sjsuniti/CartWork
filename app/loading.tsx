export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-neutral-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}