
import ContactPage from "@/components/client/contact"
import type { Metadata } from "next"


// * Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Contact Us - Greenwood Academy | Get in Touch",
  description:
    "Contact Greenwood Academy for admissions, general inquiries, or to schedule a campus tour. Find our location, phone numbers, and office hours.",
  keywords: "contact school, school address, phone number, admissions contact, campus tour",
  openGraph: {
    title: "Contact Greenwood Academy",
    description: "Get in touch with us for admissions, tours, and general inquiries.",
    url: "https://greenwoodacademy.edu/contact",
  },
}

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Greenwood Academy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Education Lane",
        addressLocality: "Learning City",
        addressRegion: "LC",
        postalCode: "12345",
      },
      telephone: "(555) 123-4567",
      email: "info@greenwoodacademy.edu",
    },
  }


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactPage/>
    </>
  )
}
