import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
