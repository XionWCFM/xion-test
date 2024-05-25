import { Link, type LinkType } from '~/src/shared/adapters/link';

export default function Home() {
  return <HomePage Link={Link} />;
}

const HomePage = ({ Link }: { Link: LinkType }) => {
  return (
    <div>
      <Link href={'/gonext'}>go next</Link>
    </div>
  );
};
