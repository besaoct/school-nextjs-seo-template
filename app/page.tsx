import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Award, Users, BookOpen } from "lucide-react"
import type { Metadata } from "next"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Greenwood Academy - Excellence in Education | Private School",
  description:
    "Greenwood Academy provides world-class K-12 education with 95% college acceptance rate. Join our community of 1,200+ students and discover your potential in our nurturing environment.",
  keywords: "private school, K-12 education, college prep, academic excellence, character development, STEAM education",
  openGraph: {
    title: "Greenwood Academy - Excellence in Education",
    description: "World-class K-12 education with 95% college acceptance rate. 25 years of educational excellence.",
    url: "https://greenwoodacademy.edu",
    images: [{ url: "/placeholder.svg?height=630&width=1200", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Greenwood Academy",
    description: "Private K-12 school providing excellence in education",
    url: "https://greenwoodacademy.edu",
    logo: "https://greenwoodacademy.edu/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Education Lane",
      addressLocality: "Learning City",
      addressRegion: "LC",
      postalCode: "12345",
    },
    telephone: "(555) 123-4567",
    email: "info@greenwoodacademy.edu",
    foundingDate: "1998",
    numberOfStudents: "1200",
  }

  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600  to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Shaping Tomorrow's Leaders Today</h1>
              <p className="text-xl mb-8 text-blue-100">
                At Greenwood Academy, we provide world-class education that nurtures creativity, critical thinking, and
                character development in a supportive learning environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    Schedule a Tour
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-blue-900 hover:bg-white hover:text-blue-900"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero.png"
                alt="Students learning in a modern classroom at Greenwood Academy"
                width={1000}
                height={1000}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">1,200+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">College Acceptance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">25</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Greenwood Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 1998, we've been committed to providing exceptional education that prepares students for
              success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our rigorous curriculum and innovative teaching methods ensure students achieve their highest
                  potential.
                </p>
                <Link href="/academics" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn about our programs →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We focus on building strong moral character and leadership skills alongside academic achievement.
                </p>
                <Link href="/student-life" className="text-blue-600 hover:text-blue-800 font-medium">
                  Explore student life →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Holistic Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our comprehensive approach includes arts, sports, and extracurricular activities for well-rounded
                  development.
                </p>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read our mission →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest happenings at Greenwood Academy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                </div>
                <CardTitle>Winter Concert Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us for our annual winter concert featuring performances by our orchestra, choir, and jazz band.
                </p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2025</span>
                </div>
                <CardTitle>Science Fair Winners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Congratulations to our students who won top honors at the regional science fair competition.
                </p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 20, 2025</span>
                </div>
                <CardTitle>Open House Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Prospective families are invited to tour our campus and meet with faculty and current students.
                </p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/news">
              <Button variant="outline" size="lg">
                View All News & Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how Greenwood Academy can help your child reach their full potential. Schedule a campus tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Start Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-900 hover:bg-white hover:text-blue-900"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
