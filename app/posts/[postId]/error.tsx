'use client';

import Link from 'next/link';

export default function Error() {
    return (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
            <h2 className="my-4 text-2xl font-bold">Något gick åt pipsvängen!</h2>
            <p className="text-xl">
                <Link href="/" className="underline">← Tillbaks till startsidan</Link>
            </p>
        </main>
    );
}
