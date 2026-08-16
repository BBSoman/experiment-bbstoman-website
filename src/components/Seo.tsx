// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type Props = { title: string; description: string; image?: string };

export default function Seo({ title, description, image = '/BBSMAIN.png' }: Props) {
  const url = `https://bbst.ai${useLocation().pathname.toLowerCase()}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bright Business Services" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`https://bbst.ai${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
