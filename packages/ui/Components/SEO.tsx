import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  siteURL: string;
};

export const SEO = ({ title, description, siteURL }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="og:description" content={description} />

      <meta name="twitter:creator" content="@CHANGE_ME" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />

      <meta property="og:image" content={`${siteURL}/images/logo.png`} />
      <meta name="twitter:image" content={`${siteURL}/images/logo.png`} />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/images//apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images//apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images//apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images//apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images//apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images//apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images//apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images//apple-touch-icon-180x180.png"
      />
    </Head>
  );
};
