type Props = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
};

export default function Seo({ title, description, keywords, url = 'https://example.com/', image = '/barisua2.png' }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Barisua Nsaanee',
    jobTitle: 'Neuroscientist & Learning Experience Designer',
    url,
    image: url.replace(/\/$/, '') + image,
    sameAs: [
      'https://www.linkedin.com/in/barisua-nsaanee/',
      'https://x.com/Ahsua_N',
      'https://www.instagram.com/nsaaneebarisua/'
    ]
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
