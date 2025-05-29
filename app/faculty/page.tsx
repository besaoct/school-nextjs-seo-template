import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Award, BookOpen, Users } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Faculty & Staff - Greenwood Academy | Expert Educators",
  description:
    "Meet Greenwood Academy's exceptional faculty and staff. Our dedicated educators bring expertise, passion, and commitment to nurturing student success and academic excellence.",
  keywords: "school faculty, teachers, staff, educators, academic excellence, experienced teachers",
  openGraph: {
    title: "Faculty & Staff at Greenwood Academy",
    description: "Meet our exceptional educators dedicated to student success.",
    url: "https://greenwoodacademy.edu/faculty",
  },
}

export default function FacultyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Greenwood Academy",
    },
    jobTitle: "Faculty Member",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ label: "Faculty & Staff", href: "/faculty" }]} />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Faculty & Staff</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Meet the exceptional educators who make Greenwood Academy a place where students thrive academically,
                socially, and personally.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Expert Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    85% of our faculty hold advanced degrees, with many bringing real-world experience from their
                    respective fields to the classroom.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Low Student-Teacher Ratio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    With a 15:1 student-teacher ratio, our faculty can provide personalized attention and support to
                    each student's unique learning needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our teachers participate in ongoing professional development to stay current with best practices and
                    innovative teaching methods.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Our experienced leadership team guides the school's vision and ensures educational excellence.
              </p>
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
                  <div className="flex justify-center mb-3">
                    <Badge variant="secondary">Ed.D. Harvard</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Dr. Johnson brings over 20 years of educational leadership experience, with a passion for innovative
                    teaching methods and student-centered learning.
                  </p>
                  <div className="flex justify-center">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-600 ml-1">s.johnson@greenwoodacademy.edu</span>
                  </div>
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
                  <div className="flex justify-center mb-3">
                    <Badge variant="secondary">M.Ed. Administration</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Mr. Williams oversees student affairs and curriculum development, ensuring our programs meet the
                    highest academic standards.
                  </p>
                  <div className="flex justify-center">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-600 ml-1">r.williams@greenwoodacademy.edu</span>
                  </div>
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
                  <div className="flex justify-center mb-3">
                    <Badge variant="secondary">Ph.D. Curriculum</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Dr. Davis specializes in STEAM education and leads our efforts in educational innovation and
                    technology integration.
                  </p>
                  <div className="flex justify-center">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-600 ml-1">j.davis@greenwoodacademy.edu</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Heads</h2>
              <p className="text-xl text-gray-600">
                Our department heads lead their respective academic areas with expertise and dedication.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Mr. David Chen, Mathematics Department Head"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. David Chen</h3>
                  <p className="text-blue-600 text-sm mb-2">Mathematics</p>
                  <div className="flex justify-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      M.S. Mathematics
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Former NASA researcher with expertise in advanced mathematics</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Ms. Emily Rodriguez, English Department Head"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Emily Rodriguez</h3>
                  <p className="text-blue-600 text-sm mb-2">English</p>
                  <div className="flex justify-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      M.A. Literature
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Published author specializing in creative writing and literature
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Dr. Michael Thompson, Science Department Head"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dr. Michael Thompson</h3>
                  <p className="text-blue-600 text-sm mb-2">Science</p>
                  <div className="flex justify-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      Ph.D. Biology
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Research scientist with expertise in molecular biology</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Ms. Lisa Park, Social Studies Department Head"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Lisa Park</h3>
                  <p className="text-blue-600 text-sm mb-2">Social Studies</p>
                  <div className="flex justify-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      M.A. History
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Historian with focus on global cultures and civilizations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Faculty */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Faculty</h2>
              <p className="text-xl text-gray-600">
                Meet some of our outstanding teachers who make a difference in students' lives every day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Ms. Amanda Foster, Elementary Teacher"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Amanda Foster</h3>
                      <p className="text-blue-600 text-sm mb-2">3rd Grade Teacher</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.Ed. Elementary
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Specializes in differentiated instruction and has been recognized for innovative teaching
                        methods in elementary education.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Mr. James Wilson, High School Physics Teacher"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. James Wilson</h3>
                      <p className="text-blue-600 text-sm mb-2">AP Physics Teacher</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.S. Physics
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Former aerospace engineer who brings real-world applications to physics education and mentors
                        the robotics team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Ms. Maria Gonzalez, Spanish Teacher"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Maria Gonzalez</h3>
                      <p className="text-blue-600 text-sm mb-2">Spanish Teacher</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.A. Spanish
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Native speaker who creates immersive language experiences and leads student exchange programs
                        with partner schools.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Mr. Kevin Brown, Art Teacher"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Kevin Brown</h3>
                      <p className="text-blue-600 text-sm mb-2">Visual Arts Teacher</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.F.A. Studio Art
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Professional artist whose students regularly win regional and national art competitions and
                        exhibitions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Ms. Rachel Kim, Music Teacher"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Rachel Kim</h3>
                      <p className="text-blue-600 text-sm mb-2">Music Director</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.M. Music Ed.
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Professional musician who directs our award-winning orchestra and choir programs with
                        state-level recognition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Coach Tom Anderson, Athletic Director"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Coach Tom Anderson</h3>
                      <p className="text-blue-600 text-sm mb-2">Athletic Director</p>
                      <div className="flex mb-2">
                        <Badge variant="outline" className="text-xs">
                          M.S. Kinesiology
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Former college athlete who has led our teams to multiple state championships and emphasizes
                        character development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Staff */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Staff</h2>
              <p className="text-xl text-gray-600">
                Our dedicated support staff ensures a safe, nurturing, and efficient learning environment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Guidance Counselors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Providing academic, social, and emotional support to help students succeed.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• College counseling</li>
                    <li>• Career guidance</li>
                    <li>• Social-emotional support</li>
                    <li>• Crisis intervention</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Learning Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Supporting students with diverse learning needs and providing specialized instruction.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Learning assessments</li>
                    <li>• Individualized support</li>
                    <li>• Study skills training</li>
                    <li>• Accommodation planning</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Technology Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Maintaining our technology infrastructure and supporting digital learning initiatives.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Network management</li>
                    <li>• Device support</li>
                    <li>• Digital literacy training</li>
                    <li>• Educational technology</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Administrative Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Ensuring smooth daily operations and excellent communication with families.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Student records</li>
                    <li>• Family communication</li>
                    <li>• Event coordination</li>
                    <li>• Financial services</li>
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
