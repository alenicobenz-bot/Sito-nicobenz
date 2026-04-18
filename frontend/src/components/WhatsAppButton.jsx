import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "393923141757"; // Numero senza il +
  
  // Funzione per aprire WhatsApp in modo cross-platform
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    
    // Rileva se è mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let url;
    if (isMobile) {
      // Mobile: apre l'app WhatsApp
      url = `https://wa.me/${phoneNumber}`;
    } else {
      // Desktop: apre WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      onClick={handleWhatsAppClick}
      className="fixed bottom-[85px] right-6 z-[9998] group cursor-pointer"
      aria-label="Chatta con me su WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation background */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-105">
          <MessageCircle className="w-6 h-6" strokeWidth={2} />
          <span className="font-semibold text-[14px] tracking-wide whitespace-nowrap">
            Chatta con me
          </span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
