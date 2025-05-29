"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 flex-1 ">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Greenwood Academy</h1>
              <p className="text-sm text-blue-200">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex gap-4 mr-4 ">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About Us
            </Link>
            <Link href="/academics" className="hover:text-blue-200 transition-colors">
              Academics
            </Link>
            <Link href="/admissions" className="hover:text-blue-200 transition-colors">
              Admissions
            </Link>
            <Link href="/faculty" className="hover:text-blue-200 transition-colors">
              Faculty
            </Link>
            <Link href="/student-life" className="hover:text-blue-200 transition-colors">
              Student Life
            </Link>
            <Link href="/news" className="hover:text-blue-200 transition-colors">
              News & Events
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/admissions" className="hidden xl:block">
              <Button variant="outline" className="bg-white text-blue-900 hover:bg-blue-50">
                Apply Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden p-2 rounded-md hover:bg-blue-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-blue-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/academics"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </Link>
              <Link
                href="/faculty"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Faculty
              </Link>
              <Link
                href="/student-life"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Student Life
              </Link>
              <Link href="/news" className="hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                News & Events
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/admissions" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="bg-white text-blue-900 hover:bg-blue-50 w-full">
                  Apply Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
