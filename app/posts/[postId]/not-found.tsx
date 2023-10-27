import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="mt-10">Ledsen, bloggen existerar inte.</p>
      <Link href="/">Tillbaks till startsidan</Link>
    </div>
  );
}
