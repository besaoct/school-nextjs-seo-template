// * Change according to your need

export const APP_NAME = "Greenwood Academy";
export const APP_TITLE = `${APP_NAME} - Excellence in Education | Private School`;
export const SITE_NAME = `${APP_NAME} - Best Private International School`;
export const SOCIAL_HANDLE = "@greenwood_shafin";

export const BASE_URL = "http://localhost:3000";

export const SEO = {

  // this are the routes for generating sitemap
  routes: [
    "/",
    "/about",
    "/academics",
    "/admissions",
    "/contact",
    "/faculty",
    "/news",
    "/student-life",
  ],

  // initial seo metadata
  metadata: {
    title: APP_TITLE,
    description: `${APP_NAME} is a premier private international school committed to academic excellence, holistic development, and nurturing future global leaders.`,
    keywords: [
      "private school",
      "international school",
      "best private school",
      "Greenwood Academy",
      "academic excellence",
      "top international school",
      "education in English",
      "K-12 school",
      "boarding school",
      "day school",
      "best school in India",
      "Greenwood education",
    ],
    authors: [{ name: APP_NAME }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: SITE_NAME,
      title: APP_TITLE,
      description: `${APP_NAME} offers world-class education with a focus on academic achievement, character building, and innovation.`,
      images: [
        {
          url: `${BASE_URL}/cover.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SOCIAL_HANDLE,
      creator: SOCIAL_HANDLE,
      title: APP_TITLE,
      siteName: SITE_NAME,
      description: `Explore academic excellence at ${APP_NAME}. A nurturing environment for young minds to grow and lead.`,
      images: [
        {
          url: `${BASE_URL}/cover.png`,
          alt: SITE_NAME,
        },
      ],
    },

    alternates: {
      canonical: BASE_URL,
    },

   robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as "large" | "none" | "standard" | undefined,
      "max-snippet": -1,
    },
  },
    generator: 'Greenwood Academy'
  } ,

};
