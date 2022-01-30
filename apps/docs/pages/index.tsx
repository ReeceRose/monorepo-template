import { SEO } from 'ui/components/SEO';

export default function Home(): JSX.Element {
  return (
    <div>
      <SEO
        title="CHANGE_ME"
        description="CHANGE_ME"
        siteURL={process.env.SITE_URL || 'https://localhost:3000'}
      />
    </div>
  );
}
