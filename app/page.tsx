import Posts from './components/Posts';
import Footer from './components/Footer';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      {/* @ts-expect-error Server Component */}
      <Posts />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
