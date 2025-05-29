import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "News & Events - Greenwood Academy | Latest Updates",
  description:
    "Stay updated with the latest news, events, and achievements at Greenwood Academy. Read about student accomplishments, upcoming events, and school announcements.",
  keywords: "school news, events, announcements, student achievements, school calendar, updates",
  openGraph: {
    title: "News & Events at Greenwood Academy",
    description: "Latest news, events, and student achievements from our school community.",
    url: "https://greenwoodacademy.edu/news",
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "News & Events", href: "/news" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay connected with the latest happenings, achievements, and upcoming events in our vibrant school
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
            <p className="text-xl text-gray-600">The latest highlights from Greenwood Academy.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Students celebrating science fair victory"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    January 10, 2025
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Dr. Sarah Johnson
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Greenwood Students Win Regional Science Fair Championship
                </h3>
                <p className="text-gray-600 mb-4">
                  Our talented students took home first place in three categories at the Regional Science Fair,
                  showcasing innovative projects in environmental science, robotics, and biotechnology. The winning
                  projects will advance to the state competition in March.
                </p>
                <Button variant="outline" className="group">
                  Read Full Story
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Winter concert performance"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Event</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    December 15, 2024
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Ms. Rachel Kim
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Annual Winter Concert Showcases Musical Talent
                </h3>
                <p className="text-gray-600 mb-4">
                  Our winter concert was a tremendous success, featuring performances by our orchestra, choir, and jazz
                  band. Over 500 family members and community members attended this magical evening of music.
                </p>
                <Button variant="outline" className="group">
                  View Photos
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent News</h2>
            <p className="text-xl text-gray-600">Stay up to date with all our latest announcements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>January 20, 2025</span>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Open House Event</h3>
                <p className="text-gray-600 mb-4">
                  Prospective families are invited to tour our campus and meet with faculty and current students.
                </p>
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>January 8, 2025</span>
                  <Badge variant="outline">Achievement</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basketball Team Wins Championship</h3>
                <p className="text-gray-600 mb-4">
                  Our varsity basketball team secured the regional championship with a thrilling 78-72 victory.
                </p>
                <Button variant="link" className="p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>January 5, 2025</span>
                  <Badge variant="outline">Academic</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">New STEM Lab Opens</h3>
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art STEM laboratory is now open, featuring cutting-edge equipment and technology.
                </p>
                <Button variant="link" className="p-0">
                  Explore →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>December 20, 2024</span>
                  <Badge variant="outline">Community</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Holiday Food Drive Success</h3>
                <p className="text-gray-600 mb-4">
                  Students and families donated over 2,000 items to local food banks during our annual holiday drive.
                </p>
                <Button variant="link" className="p-0">
                  View Impact →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>December 18, 2024</span>
                  <Badge variant="outline">Recognition</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Teacher Receives State Award</h3>
                <p className="text-gray-600 mb-4">
                  Ms. Emily Rodriguez was honored with the State Excellence in Teaching Award for her innovative
                  methods.
                </p>
                <Button variant="link" className="p-0">
                  Congratulations →
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                  <Badge variant="outline">Arts</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Art Students Win National Contest</h3>
                <p className="text-gray-600 mb-4">
                  Three of our visual arts students placed in the top 10 of the National High School Art Competition.
                </p>
                <Button variant="link" className="p-0">
                  See Artwork →
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All News Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these important dates.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-blue-600">January 20</Badge>
                      <h3 className="text-xl font-bold text-gray-900">Open House Event</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Join us for a comprehensive tour of our campus and meet with faculty, students, and staff.
                    </p>
                    <p className="text-sm text-gray-500">10:00 AM - 12:00 PM | Main Campus</p>
                  </div>
                  <Button className="mt-4 md:mt-0 md:ml-4">Register</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-green-600">February 5</Badge>
                      <h3 className="text-xl font-bold text-gray-900">Science Fair</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Students will present their research projects and compete for awards in various categories.
                    </p>
                    <p className="text-sm text-gray-500">9:00 AM - 3:00 PM | Gymnasium</p>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0 md:ml-4">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-purple-600">February 14</Badge>
                      <h3 className="text-xl font-bold text-gray-900">Spring Musical Auditions</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Auditions for our spring musical production. All students are welcome to participate.
                    </p>
                    <p className="text-sm text-gray-500">3:30 PM - 5:30 PM | Theater</p>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0 md:ml-4">
                    Audition Info
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-orange-600">March 1</Badge>
                      <h3 className="text-xl font-bold text-gray-900">Application Deadline</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Final deadline for submitting applications for the 2025-2026 school year.
                    </p>
                    <p className="text-sm text-gray-500">11:59 PM | Online Application Portal</p>
                  </div>
                  <Button className="mt-4 md:mt-0 md:ml-4">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
