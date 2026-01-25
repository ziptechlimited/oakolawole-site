import { Helmet } from "react-helmet-async";

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
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageType?: string;
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
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogImageType = 'image/png',
}: SEOProps) => {
  const siteName = 'O.A. Kolawole & Co.';
  const baseUrl = window.location.origin;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : window.location.href;
  const globalOgImage = 'https://oakolawoleandco.com/og-image.png';
  const fullOgImage = globalOgImage;
  const isSecure = fullCanonicalUrl.startsWith('https://') || baseUrl.startsWith('https://');

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:url" content={fullOgImage} />
      {isSecure && <meta property="og:image:secure_url" content={fullOgImage} />}
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:url" content={ogUrl || fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:src" content={fullOgImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
