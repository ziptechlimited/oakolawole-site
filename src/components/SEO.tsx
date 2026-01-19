import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  structuredData?: Record<string, any>;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  keywords,
  structuredData,
}: SEOProps) => {
  const siteName = 'O.A. Kolawole & Co.';
  const baseUrl = window.location.origin;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : window.location.href;
  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`) : `${baseUrl}/og-image.png`; // Fallback image needs to be created or provided

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={ogUrl || fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
