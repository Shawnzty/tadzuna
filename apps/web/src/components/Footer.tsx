import { LogoLockup } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-ink dark:text-gray-100">
          <LogoLockup markClassName="h-6 w-auto" />
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">© {year} Tadzuna</p>
      </div>
    </footer>
  );
}
