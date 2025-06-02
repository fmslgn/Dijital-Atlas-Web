import Link from 'next/link';
import Image from 'next/image';

export interface MapCardProps {
  href?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

export function MapCard({ href, imageSrc, imageAlt, title }: MapCardProps) {
  const CardContent = () => (
    <div className="group bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-lg w-60 text-center transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-[4/3] mx-auto mb-3 overflow-hidden rounded-lg bg-gray-50 dark:bg-zinc-700">
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105 dark:brightness-110"
        />
      </div>
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h2>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}