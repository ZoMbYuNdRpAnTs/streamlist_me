import Image from 'next/image';

export default function MoviesPage() {
    return <div className="app">
        <h1>Movies Page - Coming Soon</h1>
        <Image
            src="/under_construction.png"
            alt="Under Construction"
            width={800}
            height={534}
            style={{ borderRadius: '10px', marginTop: '1rem' }}
        />
    </div>;
}