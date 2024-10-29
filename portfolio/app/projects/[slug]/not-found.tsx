import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Project Not Found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/projects"
          className="px-4 py-2 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}