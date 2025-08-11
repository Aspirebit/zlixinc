import React from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  alt: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, imageSrc, alt }) => {
  return (
    <section className="relative py-16 md:py-24 min-h-[320px] md:min-h-[420px] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img src={imageSrc} alt={alt} loading="eager" className="h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/70" />
      </div>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
