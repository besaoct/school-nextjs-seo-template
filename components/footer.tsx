import Link from "next/link"
import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Greenwood Academy</h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Preparing students for success in college, career, and life through innovative education and character
              development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-400 hover:text-white">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-400 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-400 hover:text-white">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Student Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Library
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Parent Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">123 Education Lane</p>
              <p className="text-gray-400">Learning City, LC 12345</p>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-gray-400">info@greenwoodacademy.edu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Greenwood Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
