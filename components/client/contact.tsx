'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { useState } from "react"

const apiEndpoint = "https://nextjsfom.io/api/submit"

export default function ContactPage() {
    type FormState = {
        firstName: string
        lastName: string
        email: string
        phone: string
        subject: string
        message: string
    }

    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitting(true)
        setError(null)
        setSuccess(false)
        try {
            const res = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error("Submission failed")
            setSuccess(true)
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            })
        } catch (err: any) {
            setError(err.message || "Something went wrong")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            We're here to help answer your questions and provide information about Greenwood Academy. Get in touch
                            with us today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">123 Education Lane</p>
                                        <p className="text-gray-600">Learning City, LC 12345</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">Main Office: (555) 123-4567</p>
                                        <p className="text-gray-600">Admissions: (555) 123-4567 ext. 101</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@greenwoodacademy.edu</p>
                                        <p className="text-gray-600">admissions@greenwoodacademy.edu</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                                        <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM (by appointment)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                                            <select
                                                name="subject"
                                                required
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="admissions">Admissions Inquiry</option>
                                                <option value="tour">Campus Tour Request</option>
                                                <option value="academics">Academic Programs</option>
                                                <option value="financial-aid">Financial Aid</option>
                                                <option value="general">General Information</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                            <textarea
                                                rows={4}
                                                name="message"
                                                required
                                                value={form.message}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Please provide details about your inquiry..."
                                            ></textarea>
                                        </div>
                                        {error && (
                                            <div className="text-red-600 text-sm">{error}</div>
                                        )}
                                        {success && (
                                            <div className="text-green-600 text-sm">Thank you! Your message has been sent.</div>
                                        )}
                                        <Button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                            disabled={submitting}
                                        >
                                            {submitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Contacts */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
                        <p className="text-xl text-gray-600">
                            Connect directly with specific departments for specialized assistance.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Admissions Office</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For application questions and campus tours</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 101</p>
                                    <p className="font-medium">Email: admissions@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 8:00 AM - 4:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Financial Aid</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For tuition and financial assistance</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 102</p>
                                    <p className="font-medium">Email: financialaid@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 8:00 AM - 4:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Academic Affairs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For curriculum and academic questions</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 103</p>
                                    <p className="font-medium">Email: academics@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 8:00 AM - 4:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Student Life</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For activities and student services</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 104</p>
                                    <p className="font-medium">Email: studentlife@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 8:00 AM - 4:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Athletics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For sports programs and activities</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 105</p>
                                    <p className="font-medium">Email: athletics@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 8:00 AM - 6:00 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Technology Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">For IT and technical assistance</p>
                                    <p className="font-medium">Phone: (555) 123-4567 ext. 106</p>
                                    <p className="font-medium">Email: tech@greenwoodacademy.edu</p>
                                    <p className="text-gray-600">Hours: Mon-Fri 7:30 AM - 4:30 PM</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
                        <p className="text-xl text-gray-600">
                            We're conveniently located in the heart of Learning City with easy access to major highways.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Directions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900">From Downtown</h4>
                                    <p className="text-gray-600">
                                        Take Highway 101 North for 5 miles, exit at Education Boulevard, turn right and continue for 2
                                        miles. The school will be on your left.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">From the Airport</h4>
                                    <p className="text-gray-600">
                                        Take Airport Road to Highway 101 South, exit at Education Boulevard, turn left and continue for 2
                                        miles. The school will be on your left.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Public Transportation</h4>
                                    <p className="text-gray-600">
                                        Bus routes 15 and 22 stop directly in front of the school. The Metro Green Line Education Station
                                        is a 5-minute walk from campus.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button variant="outline" className="mr-4">
                                    Get Directions
                                </Button>
                                <Button variant="outline">Download Campus Map</Button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600">Interactive Map</p>
                                    <p className="text-sm text-gray-500">123 Education Lane, Learning City, LC 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Quick answers to common questions about contacting us.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2">What's the best way to schedule a campus tour?</h3>
                                <p className="text-gray-600">
                                    You can schedule a campus tour by calling our Admissions Office at (555) 123-4567 ext. 101 or by
                                    filling out our online contact form. We offer both group tours and private family tours.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    How quickly can I expect a response to my inquiry?
                                </h3>
                                <p className="text-gray-600">
                                    We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                                    please call our main office directly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2">Can I visit the school outside of regular hours?</h3>
                                <p className="text-gray-600">
                                    Yes, we can arrange special appointments for families who cannot visit during regular hours. Please
                                    contact our Admissions Office to schedule a convenient time.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Do you offer virtual tours or information sessions?
                                </h3>
                                <p className="text-gray-600">
                                    Yes, we offer virtual tours and online information sessions for families who cannot visit in person.
                                    Contact us to schedule a virtual meeting with our admissions team.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
