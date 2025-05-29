import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Music, Palette, Users, Heart, Star } from "lucide-react"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Student Life - Greenwood Academy | Activities & Community",
  description:
    "Discover vibrant student life at Greenwood Academy. Explore our athletics, arts, clubs, and community service opportunities that create well-rounded, engaged students.",
  keywords: "student life, extracurricular activities, sports, arts, clubs, community service, school activities",
  openGraph: {
    title: "Student Life at Greenwood Academy",
    description: "Vibrant community with 30+ clubs, championship athletics, and award-winning arts programs.",
    url: "https://greenwoodacademy.edu/student-life",
  },
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "Student Life", href: "/student-life" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              At Greenwood Academy, learning extends far beyond the classroom. Our vibrant community offers countless
              opportunities for students to explore their passions, develop new skills, and build lifelong friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">30+</div>
              <div className="text-gray-600">Student Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15</div>
              <div className="text-gray-600">Varsity Sports</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">5</div>
              <div className="text-gray-600">State Championships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Student Participation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Athletics</h2>
            <p className="text-xl text-gray-600">
              Our comprehensive athletics program builds character, teamwork, and physical fitness while competing at
              the highest levels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Championship Excellence</h3>
              <p className="text-gray-600 mb-6">
                Our athletic programs have earned 5 state championships in the past three years, with teams consistently
                ranking among the top in the region. We emphasize both competitive excellence and character development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="text-center pt-4">
                    <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">5</div>
                    <div className="text-sm text-gray-600">State Titles</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center pt-4">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">300+</div>
                    <div className="text-sm text-gray-600">Student Athletes</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Greenwood Academy student athletes celebrating championship victory"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Fall Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Football</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Soccer (Boys & Girls)</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Volleyball</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cross Country</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Tennis</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Winter Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Basketball (Boys & Girls)</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Swimming</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Wrestling</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Indoor Track</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spring Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Baseball</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Softball</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Track & Field</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Lacrosse</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Golf</span>
                    <Badge variant="secondary">Varsity</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Arts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Arts & Performance</h2>
            <p className="text-xl text-gray-600">
              Our award-winning arts programs provide students with opportunities to express creativity and develop
              artistic talents across multiple disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Students performing in Greenwood Academy theater production"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Creative Excellence</h3>
              <p className="text-gray-600 mb-6">
                Our arts programs have received regional and national recognition, with students regularly earning
                scholarships to prestigious arts colleges and conservatories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Music className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Award-winning Orchestra & Choir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">State-recognized Visual Arts Program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Professional Theater Productions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Music className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Music</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Concert Band</li>
                  <li>• Jazz Ensemble</li>
                  <li>• Chamber Orchestra</li>
                  <li>• Concert Choir</li>
                  <li>• A Cappella Groups</li>
                  <li>• Music Theory</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Visual Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Drawing & Painting</li>
                  <li>• Sculpture</li>
                  <li>• Ceramics</li>
                  <li>• Digital Art</li>
                  <li>• Photography</li>
                  <li>• Art History</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Theater</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fall Drama Production</li>
                  <li>• Spring Musical</li>
                  <li>• One-Act Plays</li>
                  <li>• Improv Club</li>
                  <li>• Technical Theater</li>
                  <li>• Drama Club</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Dance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ballet</li>
                  <li>• Modern Dance</li>
                  <li>• Jazz Dance</li>
                  <li>• Hip Hop</li>
                  <li>• Dance Team</li>
                  <li>• Choreography</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clubs & Organizations</h2>
            <p className="text-xl text-gray-600">
              With over 30 student organizations, there's something for every interest and passion at Greenwood Academy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>National Honor Society</span>
                    <Badge variant="outline">Honor</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Debate Team</span>
                    <Badge variant="outline">Competition</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Model United Nations</span>
                    <Badge variant="outline">Leadership</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Math Olympiad</span>
                    <Badge variant="outline">STEM</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Science Bowl</span>
                    <Badge variant="outline">STEM</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Academic Decathlon</span>
                    <Badge variant="outline">Competition</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">STEM & Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Robotics Team</span>
                    <Badge variant="outline">Engineering</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Computer Science Club</span>
                    <Badge variant="outline">Technology</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Engineering Club</span>
                    <Badge variant="outline">STEM</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Environmental Club</span>
                    <Badge variant="outline">Science</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Astronomy Club</span>
                    <Badge variant="outline">Science</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Maker Space</span>
                    <Badge variant="outline">Innovation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service & Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Student Government</span>
                    <Badge variant="outline">Leadership</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Key Club</span>
                    <Badge variant="outline">Service</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Peer Tutoring</span>
                    <Badge variant="outline">Academic</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Community Service</span>
                    <Badge variant="outline">Service</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Peer Mediation</span>
                    <Badge variant="outline">Leadership</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Green Team</span>
                    <Badge variant="outline">Environment</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cultural & Language</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Spanish Honor Society</span>
                    <Badge variant="outline">Language</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>French Club</span>
                    <Badge variant="outline">Culture</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>International Club</span>
                    <Badge variant="outline">Global</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cultural Awareness</span>
                    <Badge variant="outline">Diversity</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>World Languages</span>
                    <Badge variant="outline">Language</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Special Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Chess Club</span>
                    <Badge variant="outline">Strategy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Photography Club</span>
                    <Badge variant="outline">Arts</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Book Club</span>
                    <Badge variant="outline">Literature</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Gaming Club</span>
                    <Badge variant="outline">Recreation</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cooking Club</span>
                    <Badge variant="outline">Life Skills</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Publications & Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>School Newspaper</span>
                    <Badge variant="outline">Journalism</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Yearbook Committee</span>
                    <Badge variant="outline">Media</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Literary Magazine</span>
                    <Badge variant="outline">Writing</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Broadcasting Club</span>
                    <Badge variant="outline">Media</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Creative Writing</span>
                    <Badge variant="outline">Literature</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Service</h2>
            <p className="text-xl text-gray-600">
              Service learning is an integral part of the Greenwood Academy experience, fostering civic responsibility
              and compassion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Making a Difference</h3>
              <p className="text-gray-600 mb-6">
                Our students contribute over 5,000 hours of community service annually, working with local organizations
                to address real community needs while developing empathy and leadership skills.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="text-center pt-4">
                    <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">5,000+</div>
                    <div className="text-sm text-gray-600">Service Hours</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center pt-4">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Partner Organizations</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Local Food Bank</h4>
                  <p className="text-sm text-gray-600">Weekly volunteer shifts sorting and distributing food</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Senior Center Visits</h4>
                  <p className="text-sm text-gray-600">Reading programs and technology assistance for seniors</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Environmental Projects</h4>
                  <p className="text-sm text-gray-600">Park cleanups and tree planting initiatives</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Greenwood Academy students volunteering at community service project"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Leadership</h2>
            <p className="text-xl text-gray-600">
              We empower students to take leadership roles and make meaningful contributions to our school community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Student Government</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Elected representatives work with administration to improve school policies and organize campus
                  events.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Student Body President</li>
                  <li>• Class Representatives</li>
                  <li>• Committee Chairs</li>
                  <li>• Event Planning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Peer Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Upperclassmen mentor younger students and lead various support programs throughout the school.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Peer Tutoring</li>
                  <li>• New Student Mentors</li>
                  <li>• Conflict Resolution</li>
                  <li>• Study Groups</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Service Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Students organize and lead community service projects, developing project management and leadership
                  skills.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Service Project Coordinators</li>
                  <li>• Fundraising Leaders</li>
                  <li>• Community Liaisons</li>
                  <li>• Volunteer Coordinators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
