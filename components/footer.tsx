import { Heart } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

/**
 * Optional standalone footer — not used in the default single-page layout
 * (page.tsx renders its own x-feed footer). Exported for reuse if you
 * split into multi-page routes.
 */
export function Footer() {
  return (
    <footer className="px-3 py-6">
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p className="flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> &amp; Next.js
        </p>
      </div>
    </footer>
  );
}
