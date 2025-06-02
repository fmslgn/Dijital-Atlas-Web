export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="w-full text-center">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}