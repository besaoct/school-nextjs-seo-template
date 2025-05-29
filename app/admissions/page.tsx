import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Users, CheckCircle, DollarSign, Clock } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Admissions - Greenwood Academy | Apply Today",
  description:
    "Apply to Greenwood Academy today. Learn about our admissions process, requirements, tuition, and financial aid. Schedule a campus tour and discover why families choose our school.",
  keywords: "school admissions, private school application, tuition, financial aid, campus tour, enrollment",
  openGraph: {
    title: "Admissions at Greenwood Academy",
    description: "Join our community of learners. Apply today and discover your potential.",
    url: "https://greenwoodacademy.edu/admissions",
  },
}

export default function AdmissionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdmissionProcess",
    provider: {
      "@type": "EducationalOrganization",
      name: "Greenwood Academy",
    },
    applicationDeadline: "2025-03-01",
    tuitionRange: "$15,000 - $25,000",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ label: "Admissions", href: "/admissions" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Join Our Community</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Discover how Greenwood Academy can help your child reach their full potential. We welcome families who
                share our commitment to academic excellence and character development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Start Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-900 hover:bg-white hover:text-blue-900"
                >
                  Schedule Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">March 1</div>
                <div className="text-gray-600">Application Deadline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">15:1</div>
                <div className="text-gray-600">Student-Teacher Ratio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">$18K</div>
                <div className="text-gray-600">Average Tuition</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">40%</div>
                <div className="text-gray-600">Receive Financial Aid</div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-xl text-gray-600">
                Our straightforward admissions process is designed to help us get to know your family and your child's
                unique strengths.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                      <p className="text-gray-600 mb-2">
                        Complete our online application form with required documents including transcripts, teacher
                        recommendations, and personal statement.
                      </p>
                      <Badge variant="secondary">Online Application</Badge>
                      <Badge variant="secondary" className="ml-1">
                        $50 Fee
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Visit</h3>
                      <p className="text-gray-600 mb-2">
                        Schedule a personalized campus tour to experience our facilities, meet our faculty, and observe
                        classes in session.
                      </p>
                      <Badge variant="secondary">Campus Tour</Badge>
                      <Badge variant="secondary" className="ml-1">
                        Shadow Day
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Student Interview</h3>
                      <p className="text-gray-600 mb-2">
                        Meet with our admissions team and faculty to discuss your child's interests, goals, and how
                        Greenwood Academy can support their growth.
                      </p>
                      <Badge variant="secondary">Student Interview</Badge>
                      <Badge variant="secondary" className="ml-1">
                        Parent Meeting
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Admission Decision</h3>
                      <p className="text-gray-600 mb-2">
                        Receive your admission decision and welcome packet with enrollment information, course
                        registration, and orientation details.
                      </p>
                      <Badge variant="secondary">Decision Letter</Badge>
                      <Badge variant="secondary" className="ml-1">
                        Enrollment Packet
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                    Start Application
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Checklist
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Prospective students and families touring Greenwood Academy campus"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Requirements</h2>
              <p className="text-xl text-gray-600">
                Please ensure all required documents are submitted by the application deadline.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Completed application form
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Official transcripts (last 2 years)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Teacher recommendations (2)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Personal statement/essay
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Standardized test scores (if applicable)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Application fee ($50)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">December 1, 2024</div>
                      <div className="text-sm text-gray-600">Application opens</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">January 15, 2025</div>
                      <div className="text-sm text-gray-600">Open House events</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">February 1, 2025</div>
                      <div className="text-sm text-gray-600">Priority deadline</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">March 1, 2025</div>
                      <div className="text-sm text-gray-600">Final application deadline</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">March 15, 2025</div>
                      <div className="text-sm text-gray-600">Admission decisions released</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">April 1, 2025</div>
                      <div className="text-sm text-gray-600">Enrollment deposit due</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Grade-Specific Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">Kindergarten</div>
                      <div className="text-sm text-gray-600">Age 5 by September 1st</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Elementary (1-5)</div>
                      <div className="text-sm text-gray-600">Academic readiness assessment</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Middle School (6-8)</div>
                      <div className="text-sm text-gray-600">Placement testing required</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">High School (9-12)</div>
                      <div className="text-sm text-gray-600">Course planning interview</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Transfer Students</div>
                      <div className="text-sm text-gray-600">Rolling admissions available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tuition & Financial Aid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tuition & Financial Aid</h2>
              <p className="text-xl text-gray-600">
                We believe exceptional education should be accessible to qualified students from all backgrounds.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">Tuition Rates 2024-2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Kindergarten</span>
                      <span className="text-lg font-bold">$15,500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Elementary (Grades 1-5)</span>
                      <span className="text-lg font-bold">$17,800</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Middle School (Grades 6-8)</span>
                      <span className="text-lg font-bold">$19,200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">High School (Grades 9-12)</span>
                      <span className="text-lg font-bold">$22,500</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Tuition includes textbooks, technology fees, and most field trips.
                      Additional fees may apply for some extracurricular activities.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">Financial Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We are committed to making our education accessible to qualified students regardless of their
                    family's financial circumstances. Over 40% of our students receive some form of financial
                    assistance.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Need-based financial aid</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Merit scholarships</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Payment plans available</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Sibling discounts</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">How to Apply for Aid:</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Submit FACTS financial aid application</li>
                      <li>2. Provide required financial documentation</li>
                      <li>3. Complete family interview (if requested)</li>
                      <li>4. Receive aid decision with admission letter</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visit Campus */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
              <p className="text-xl text-gray-600">
                Experience Greenwood Academy firsthand and see why families choose our school.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Open House Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Join us for our monthly open house events where you can tour the campus, meet faculty, and learn
                    about our programs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Next Events:</strong>
                    </div>
                    <div>January 15, 2025 - 10:00 AM</div>
                    <div>February 12, 2025 - 10:00 AM</div>
                    <div>March 12, 2025 - 10:00 AM</div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Register for Open House
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Private Tours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Schedule a personalized campus tour at your convenience. Our admissions team will tailor the visit
                    to your family's interests and questions.
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div>• Personalized attention</div>
                    <div>• Meet with faculty</div>
                    <div>• Observe classes</div>
                    <div>• Q&A session</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Schedule Private Tour
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Shadow Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Prospective students can spend a full day experiencing life as a Greenwood Academy student,
                    attending classes and activities.
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div>• Full day experience</div>
                    <div>• Attend actual classes</div>
                    <div>• Lunch with students</div>
                    <div>• Activity participation</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Request Shadow Day
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Admissions */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our admissions team is here to help guide you through the process and answer any questions you may have.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Admissions Office</h3>
                <p className="text-blue-100">(555) 123-4567 ext. 101</p>
                <p className="text-blue-100">admissions@greenwoodacademy.edu</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <p className="text-blue-100">Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p className="text-blue-100">Saturday: 9:00 AM - 12:00 PM (by appointment)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Financial Aid</h3>
                <p className="text-blue-100">(555) 123-4567 ext. 102</p>
                <p className="text-blue-100">financialaid@greenwoodacademy.edu</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Start Your Application
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
