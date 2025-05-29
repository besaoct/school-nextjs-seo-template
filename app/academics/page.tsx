import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Microscope, Calculator, Globe, Palette, Music } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Academic Programs - Greenwood Academy | K-12 Excellence",
  description:
    "Explore Greenwood Academy's comprehensive K-12 academic programs. From elementary STEAM education to high school AP courses, discover our rigorous curriculum designed for college success.",
  keywords:
    "academic programs, K-12 curriculum, AP courses, STEAM education, college prep, elementary school, middle school, high school",
  openGraph: {
    title: "Academic Programs at Greenwood Academy",
    description: "Comprehensive K-12 programs with 20+ AP courses and 95% college acceptance rate.",
    url: "https://greenwoodacademy.edu/academics",
  },
}

export default function AcademicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    provider: {
      "@type": "EducationalOrganization",
      name: "Greenwood Academy",
    },
    educationalLevel: "K-12",
    courseMode: "In-person",
    description: "Comprehensive K-12 academic programs with advanced placement courses",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ label: "Academics", href: "/academics" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our comprehensive K-12 curriculum is designed to challenge students, foster critical thinking, and
                prepare them for success in college and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Rigorous Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our challenging academic program exceeds state standards and prepares students for the most
                    competitive colleges and universities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Small Class Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    With an average class size of 15 students, our teachers can provide personalized attention and
                    support to each student's unique learning needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>College Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    95% of our graduates are accepted to four-year colleges, with many attending top-tier institutions
                    and receiving merit scholarships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
              <p className="text-xl text-gray-600">
                Comprehensive programs designed to challenge and inspire students at every level.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Elementary School */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Elementary School</CardTitle>
                  <CardDescription className="text-lg">Grades K-5 • Ages 5-11</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Elementary students engaged in hands-on learning"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full"
                  />
                  <p className="text-gray-600 mb-4">
                    Building strong foundations in literacy, numeracy, and social skills through engaging, hands-on
                    learning experiences that spark curiosity and creativity.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Small class sizes (15:1 student-teacher ratio)</li>
                    <li>• Integrated STEAM curriculum</li>
                    <li>• Bilingual education programs</li>
                    <li>• Character education and social-emotional learning</li>
                    <li>• Differentiated instruction for all learning styles</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Language Arts</Badge>
                    <Badge variant="secondary">Mathematics</Badge>
                    <Badge variant="secondary">Science</Badge>
                    <Badge variant="secondary">Social Studies</Badge>
                    <Badge variant="secondary">Art</Badge>
                    <Badge variant="secondary">Music</Badge>
                    <Badge variant="secondary">PE</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Middle School */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Middle School</CardTitle>
                  <CardDescription className="text-lg">Grades 6-8 • Ages 11-14</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Middle school students in science laboratory"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full"
                  />
                  <p className="text-gray-600 mb-4">
                    Preparing students for high school success with advanced coursework, leadership opportunities, and
                    comprehensive support during this critical developmental period.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Advanced placement preparation courses</li>
                    <li>• Student government and leadership programs</li>
                    <li>• Peer mentoring and tutoring</li>
                    <li>• Comprehensive guidance counseling</li>
                    <li>• Honors courses in core subjects</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Specialized Programs:</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Honors English</Badge>
                    <Badge variant="secondary">Algebra I</Badge>
                    <Badge variant="secondary">Advanced Science</Badge>
                    <Badge variant="secondary">World Languages</Badge>
                    <Badge variant="secondary">Robotics</Badge>
                    <Badge variant="secondary">Drama</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* High School */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">High School</CardTitle>
                  <CardDescription className="text-lg">Grades 9-12 • Ages 14-18</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="High school students in advanced chemistry class"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full"
                  />
                  <p className="text-gray-600 mb-4">
                    College preparatory curriculum with extensive AP course offerings, dual enrollment opportunities,
                    and comprehensive college counseling to ensure student success.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 20+ Advanced Placement (AP) courses</li>
                    <li>• Dual enrollment with local colleges</li>
                    <li>• Comprehensive college counseling</li>
                    <li>• Independent study and research opportunities</li>
                    <li>• Internship and service learning programs</li>
                  </ul>
                  <h4 className="font-semibold mb-2">AP Courses Available:</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">AP Calculus</Badge>
                    <Badge variant="secondary">AP Biology</Badge>
                    <Badge variant="secondary">AP Chemistry</Badge>
                    <Badge variant="secondary">AP Physics</Badge>
                    <Badge variant="secondary">AP Literature</Badge>
                    <Badge variant="secondary">AP History</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Departments</h2>
              <p className="text-xl text-gray-600">
                Our expert faculty deliver exceptional instruction across all academic disciplines.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    From basic arithmetic to advanced calculus, our math program builds strong analytical skills.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Algebra & Geometry</div>
                    <div>• Pre-Calculus & Calculus</div>
                    <div>• Statistics & Probability</div>
                    <div>• AP Mathematics courses</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Hands-on laboratory experiences and cutting-edge research opportunities in all sciences.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Biology & Chemistry</div>
                    <div>• Physics & Earth Science</div>
                    <div>• Environmental Science</div>
                    <div>• Research & Innovation</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>English</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Developing strong communication skills through literature, writing, and critical analysis.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Literature & Composition</div>
                    <div>• Creative Writing</div>
                    <div>• Public Speaking</div>
                    <div>• AP English courses</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Social Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Understanding our world through history, geography, civics, and cultural studies.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• World & US History</div>
                    <div>• Government & Economics</div>
                    <div>• Geography & Culture</div>
                    <div>• AP Social Studies</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Visual Arts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Fostering creativity and artistic expression through various mediums and techniques.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Drawing & Painting</div>
                    <div>• Sculpture & Ceramics</div>
                    <div>• Digital Art & Design</div>
                    <div>• Art History & Criticism</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Music className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Performing Arts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Building confidence and creativity through music, theater, and performance opportunities.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Band & Orchestra</div>
                    <div>• Choir & Voice</div>
                    <div>• Theater & Drama</div>
                    <div>• Music Theory</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>World Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Developing global citizenship through language learning and cultural understanding.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Spanish & French</div>
                    <div>• Mandarin Chinese</div>
                    <div>• Latin</div>
                    <div>• Cultural Immersion</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Physical Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Promoting physical fitness, teamwork, and healthy lifestyle choices for life.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Fitness & Wellness</div>
                    <div>• Team Sports</div>
                    <div>• Individual Activities</div>
                    <div>• Health Education</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Support Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive support systems to ensure every student reaches their full potential.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Individualized support for students with diverse learning needs, including tutoring, study skills,
                    and accommodations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• One-on-one tutoring</li>
                    <li>• Study skills workshops</li>
                    <li>• Learning accommodations</li>
                    <li>• Progress monitoring</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>College Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Expert guidance through the college application process, from course selection to scholarship
                    applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• College planning sessions</li>
                    <li>• Application assistance</li>
                    <li>• Scholarship guidance</li>
                    <li>• SAT/ACT preparation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enrichment Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advanced opportunities for high-achieving students to explore their interests and challenge
                    themselves academically.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Independent research</li>
                    <li>• Academic competitions</li>
                    <li>• Summer programs</li>
                    <li>• Mentorship opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
