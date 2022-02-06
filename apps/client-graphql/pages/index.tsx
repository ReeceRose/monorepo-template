import { SEO, Button } from 'ui/components/';

export default function Home(): JSX.Element {
  // const data = useLazyLoadQuery<pagesQuery>(
  //   graphql`
  //     query pagesQuery {
  //       todos {
  //         id
  //         description
  //         completed
  //       }
  //     }
  //   `,
  //   {}
  // );
  // console.log(data);
  return (
    <div>
      <SEO
        title="CHANGE_ME"
        description="CHANGE_ME"
        siteURL={process.env.SITE_URL || 'https://localhost:3001'}
      />
      <Button />
    </div>
  );
}