export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-neutral-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}