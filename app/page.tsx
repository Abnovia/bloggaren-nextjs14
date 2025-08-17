import Posts from './components/Posts';
import Footer from './components/Footer';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <Posts />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
