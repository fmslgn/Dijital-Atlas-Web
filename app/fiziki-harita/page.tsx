import { PageHeader } from '@/components/PageHeader';
import { MapCard } from '@/components/MapCard';
import { CardGrid } from '@/components/CardGrid';
import { BackToHome } from '@/components/BackToHome';
import { Feedback } from '@/components/Feedback';

export default function FizikiHarita() {
  return (
    <main className="h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900 flex flex-col justify-center">
      <BackToHome />
      <div className="container mx-auto px-4 flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">Türkiye Fiziki Haritası</h1>
          <p className="text-muted-foreground text-center mt-2">
            Dağ, Göl, Akarsu, Deniz ve Tarım haritalarını keşfedin.
          </p>
        </div>
        
        <div className="flex justify-center">
          <CardGrid>
            <MapCard 
              imageSrc="/assets/media/dag-harita.webp"
              imageAlt="Dağ Haritası"
              title="Dağ"
            />
            <MapCard 
              imageSrc="/assets/media/göl-harita.webp"
              imageAlt="Göl Haritası"
              title="Göl"
            />
            <MapCard 
              imageSrc="/assets/media/akarsu-harita.webp"
              imageAlt="Akarsu Haritası"
              title="Akarsu"
            />
            <MapCard 
              imageSrc="/assets/media/deniz-harita.webp"
              imageAlt="Deniz Haritası"
              title="Deniz"
            />
            <MapCard 
              imageSrc="/assets/media/tarim-harita.webp"
              imageAlt="Tarım Haritası"
              title="Tarım"
            />
          </CardGrid>
        </div>
      </div>
      <Feedback />
    </main>
  );
}