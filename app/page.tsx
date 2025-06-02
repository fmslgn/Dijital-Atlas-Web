import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { MapCard } from '@/components/MapCard';
import { CardGrid } from '@/components/CardGrid';
import { Feedback } from '@/components/Feedback';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <PageHeader 
          title="Türkiye'nin Haritaları" 
          subtitle="Türkiye'nin farklı harita türlerine göz atın."
        />
        
        <section className="flex justify-center my-4">
          <div className="relative w-11/12 md:w-1/2 lg:w-1/4 aspect-[4/3] transition-transform hover:scale-105 duration-300">
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl overflow-hidden">
              <Image 
                src="/assets/media/turkiye-harita.webp"
                alt="Türkiye Haritası"
                fill
                className="object-contain p-4 dark:brightness-110"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-4 mb-4">
          <h2 className="text-2xl font-bold text-center mb-4 text-zinc-800 dark:text-zinc-100">
            Harita Türleri
          </h2>
          <CardGrid>
            <MapCard 
              href="/siyasi-harita"
              imageSrc="/assets/media/siyasi-harita.webp"
              imageAlt="Siyasi Harita"
              title="Siyasi Harita"
            />
            <MapCard 
              href="/fiziki-harita"
              imageSrc="/assets/media/fiziki-harita.webp"
              imageAlt="Fiziki Harita"
              title="Fiziki Harita"
            />
            <MapCard 
              href="/beseri-harita"
              imageSrc="/assets/media/beseri-harita.webp"
              imageAlt="Beşeri Harita"
              title="Beşeri Harita"
            />
          </CardGrid>
        </section>
      </div>
      <Feedback />
    </main>
  );
}