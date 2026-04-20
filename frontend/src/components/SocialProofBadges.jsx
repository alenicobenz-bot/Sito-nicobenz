import React from "react";
import { Users, Award, TrendingUp, MapPin } from "lucide-react";

const SocialProofBadges = () => {
  const stats = [
    {
      icon: Users,
      number: "2.400+",
      label: "Saloni formati",
      color: "gold"
    },
    {
      icon: Award,
      number: "150+",
      label: "Città italiane",
      color: "ivory"
    },
    {
      icon: TrendingUp,
      number: "1.2M+",
      label: "Views generate",
      color: "gold"
    },
    {
      icon: MapPin,
      number: "7",
      label: "Anni esperienza",
      color: "ivory"
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-[var(--nb-bg)] border-t border-b border-[var(--nb-border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Grid badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div className="bg-[#0a0a0a] border border-[var(--nb-border)] hover:border-[var(--nb-gold)]/50 rounded-xl p-6 md:p-8 text-center transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--nb-gold)]/10 border border-[var(--nb-gold)]/30 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[var(--nb-gold)]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Number */}
                <div className={`font-display text-[42px] md:text-[56px] font-light tracking-editorial ${stat.color === 'gold' ? 'text-[var(--nb-gold)]' : 'text-[var(--nb-ivory)]'} mb-2`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-[13px] tracking-micro uppercase text-[var(--nb-ivory-dim)]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative: Single hero badge */}
        <div className="mt-16 max-w-[600px] mx-auto">
          <div className="relative bg-gradient-to-br from-[var(--nb-gold)]/10 to-transparent border border-[var(--nb-gold)]/30 rounded-2xl p-10 text-center">
            {/* Big number */}
            <div className="font-display text-[72px] md:text-[96px] font-light tracking-editorial text-[var(--nb-gold)] leading-none mb-4">
              2.400<span className="text-[48px] md:text-[64px]">+</span>
            </div>
            
            {/* Label */}
            <div className="text-[18px] md:text-[22px] tracking-editorial text-[var(--nb-ivory)] font-medium mb-2">
              Saloni formati in Italia
            </div>
            
            {/* Subtext */}
            <div className="text-[14px] text-[var(--nb-ivory-dim)] max-w-[400px] mx-auto">
              Dal 2018 aiuto parrucchieri a costruire il loro personal brand attraverso video e social media
            </div>

            {/* Decorative dots */}
            <div className="absolute top-4 right-4 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nb-gold)]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBadges;
