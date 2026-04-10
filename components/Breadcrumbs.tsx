import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-[#1d6fe8] transition-colors">
            Home
          </Link>
        </li>
        {items.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-[#1d6fe8] transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
