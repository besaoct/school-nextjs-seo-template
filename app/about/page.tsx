import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, BookOpen, Target, Heart, Star } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "About Us - Greenwood Academy | Our Mission & Values",
  description:
    "Learn about Greenwood Academy's 25-year history of educational excellence. Discover our mission, values, and commitment to nurturing tomorrow's leaders through innovative education.",
  keywords: "about Greenwood Academy, school mission, educational values, school history, private school philosophy",
  openGraph: {
    title: "About Greenwood Academy - Our Mission & Values",
    description: "25 years of educational excellence. Learn about our mission to nurture tomorrow's leaders.",
    url: "https://greenwoodacademy.edu/about",
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Greenwood Academy",
      foundingDate: "1998",
      mission:
        "To provide world-class education that nurtures creativity, critical thinking, and character development",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About Greenwood Academy</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                For 25 years, we've been dedicated to providing exceptional education that prepares students for success
                in college, career, and life.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex gap-12 items-center justify-between w-full flex-wrap lg:flex-nowrap">
              <div className="w-full">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To provide world-class education that nurtures creativity, critical thinking, and character
                  development in a supportive learning environment where every student can discover and achieve their
                  full potential.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To be the leading educational institution that shapes confident, compassionate, and capable leaders
                  who will make a positive impact on the world.
                </p>
              </div>
              <div className="sm:min-w-[500px]">
                <Image
                  src="/hero.png"
                  alt="Students collaborating in classroom at Greenwood Academy"
                  width={1000}
                  height={1000}
                  className="rounded-lg shadow-lg w-full "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do at Greenwood Academy.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We strive for the highest standards in academics, character, and personal growth, encouraging every
                    student to reach their full potential.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We foster empathy, kindness, and understanding, teaching students to care for others and contribute
                    positively to their communities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We uphold honesty, responsibility, and ethical behavior in all aspects of school life, building
                    character that lasts a lifetime.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We embrace creativity and forward-thinking approaches to education, preparing students for an
                    ever-changing world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We build strong relationships among students, families, and faculty, creating a supportive
                    environment where everyone belongs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in continuous learning and improvement, encouraging students and faculty to embrace
                    challenges and learn from experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
              <p className="text-xl text-gray-600">A legacy of educational excellence spanning over two decades.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="min-w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1998
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      Greenwood Academy was founded with a vision to provide innovative, student-centered education that
                      prepares young minds for the challenges of the 21st century.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="min-w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2005
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                    <p className="text-gray-600">
                      Added our state-of-the-art science laboratories and expanded our STEAM program to include advanced
                      robotics and computer science courses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="min-w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2012
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Recognition</h3>
                    <p className="text-gray-600">
                      Received national recognition for academic excellence and was awarded the Blue Ribbon School
                      designation for outstanding educational programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="min-w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      Successfully transitioned to hybrid learning during the pandemic and implemented cutting-edge
                      educational technology to enhance student learning experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="min-w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Present Day</h3>
                    <p className="text-gray-600">
                      Today, we continue to lead in educational innovation with over 1,200 students, a 95% college
                      acceptance rate, and a commitment to shaping tomorrow's leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">Meet the dedicated leaders who guide our educational mission.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Sarah Johnson, Principal of Greenwood Academy"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600 mb-2">Principal</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Ed.D. in Educational Leadership from Harvard University. 20+ years in education with a passion for
                    innovative teaching methods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mr. Robert Williams, Vice Principal of Greenwood Academy"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Robert Williams</h3>
                  <p className="text-blue-600 mb-2">Vice Principal</p>
                  <p className="text-gray-600 text-sm mb-4">
                    M.Ed. in Educational Administration. Former teacher and department head with expertise in curriculum
                    development and student affairs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ms. Jennifer Davis, Academic Director of Greenwood Academy"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ms. Jennifer Davis</h3>
                  <p className="text-blue-600 mb-2">Academic Director</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Ph.D. in Curriculum and Instruction. Specializes in STEAM education and has led numerous educational
                    reform initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
