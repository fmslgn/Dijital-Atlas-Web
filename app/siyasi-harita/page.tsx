import { MapCard } from '@/components/MapCard';
import { CardGrid } from '@/components/CardGrid';
import { BackToHome } from '@/components/BackToHome';
import { Feedback } from '@/components/Feedback';

export default function SiyasiHarita() {
  return (
    <main className="h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900 flex flex-col justify-center">
      <BackToHome />
      <div className="container mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">Türkiye Siyasi Haritası</h1>
          <p className="text-muted-foreground text-center mt-2">
            Bölge, İl ve Komşular haritalarını keşfedin.
          </p>
        </div>
        
        <div className="flex justify-center">
          <CardGrid>
            <MapCard 
              imageSrc="/assets/media/bölge-haritası.webp"
              imageAlt="Bölge Haritası"
              title="Bölge"
            />
            <MapCard 
              imageSrc="/assets/media/siyasi-harita.webp"
              imageAlt="İl Haritası"
              title="İl"
            />
            <MapCard 
              imageSrc="/assets/media/komsular-harita.webp"
              imageAlt="Komşular Haritası"
              title="Komşular"
            />
          </CardGrid>
        </div>
      </div>
      <Feedback />
    </main>
  );
}