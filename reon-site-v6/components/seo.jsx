import Head from "next/head";

const SEO = ({
  title = "Lin Myat Phyo - Web Developer Portfolio",
  description = "Web Developer from Myanmar, currently studying at Assumption University of Thailand. Passionate about creating user-centric web experiences.",
  keywords = "web developer, portfolio, next.js, react, javascript, typescript, myanmar developer, full stack developer",
  ogImage = "/og-image.jpg",
  url = "https://linmyatphyo.dev",
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Lin Myat Phyo" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Lin Myat Phyo Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@linmyatphyo" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lin Myat Phyo",
            "jobTitle": "Web Developer",
            "url": url,
            "sameAs": [
              "https://github.com/linmyatphyo",
              "https://linkedin.com/in/linmyatphyo",
              "https://instagram.com/linmyatphyo",
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangkok",
              "addressCountry": "Thailand"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "Assumption University of Thailand"
            },
            "knowsAbout": [
              "Web Development",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "TypeScript"
            ]
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
