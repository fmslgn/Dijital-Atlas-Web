import { PageHeader } from '@/components/PageHeader';
import { MapCard } from '@/components/MapCard';
import { CardGrid } from '@/components/CardGrid';
import { BackToHome } from '@/components/BackToHome';
import { Feedback } from '@/components/Feedback';

export default function BeseriHarita() {
  return (
    <main className="h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 flex flex-col justify-center">
      <BackToHome />
      <div className="container mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">Türkiye Beşeri Haritası</h1>
          <p className="text-muted-foreground text-center mt-2 dark:text-zinc-300">
            Nüfus, Sanayi, Turizm ve Yerleşim haritalarını keşfedin.
          </p>
        </div>
        
        <div className="flex justify-center">
          <CardGrid>
            <MapCard 
              imageSrc="/assets/media/nufus-harita.webp"
              imageAlt="Nüfus Haritası"
              title="Nüfus"
            />
            <MapCard 
              imageSrc="/assets/media/sanayi-harita.webp"
              imageAlt="Sanayi Haritası"
              title="Sanayi"
            />
            <MapCard 
              imageSrc="/assets/media/turizm-harita.webp"
              imageAlt="Turizm Haritası"
              title="Turizm"
            />
            <MapCard 
              imageSrc="/assets/media/yerlesim-harita.webp"
              imageAlt="Yerleşim Haritası"
              title="Yerleşim"
            />
          </CardGrid>
        </div>
      </div>
      <Feedback />
    </main>
  );
}