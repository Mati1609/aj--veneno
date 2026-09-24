import React from 'react';

// Handcrafted Chilean Stamp
export const ChileanStamp: React.FC<{
  text?: string;
  subtext?: string;
  size?: number;
  className?: string;
}> = ({
  text = "HECHO EN CHILE • 100% PICANTE •",
  subtext = "HECHO PA' PICAR",
  size = 140,
  className = ""
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full animate-spin-slow origin-center"
        style={{ animationDuration: '28s' }}
      >
        {/* Outer jagged stamp edge */}
        <circle cx="100" cy="100" r="94" fill="none" stroke="#111111" strokeWidth="4" strokeDasharray="6 4" />
        <circle cx="100" cy="100" r="86" fill="#F4C430" stroke="#111111" strokeWidth="4" />
        <circle cx="100" cy="100" r="62" fill="#D92323" stroke="#111111" strokeWidth="3" />

        {/* Circular text path */}
        <defs>
          <path
            id="stampPath"
            d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          />
        </defs>
        <text className="font-barlow font-black text-[15px] fill-[#111111] uppercase tracking-[3px]">
          <textPath href="#stampPath" startOffset="0%">
            {text}
          </textPath>
        </text>

        {/* Center icon / star */}
        <polygon 
          points="100,75 106,90 122,90 109,100 114,115 100,105 86,115 91,100 78,90 94,90"
          fill="#FFF9EE" 
          stroke="#111111" 
          strokeWidth="2"
        />
        <text 
          x="100" 
          y="128" 
          textAnchor="middle" 
          className="font-anton text-[13px] fill-[#FFF9EE] tracking-wider"
        >
          {subtext}
        </text>
      </svg>
    </div>
  );
};

// Real jar photos mapping matching uploaded sauce names
export const JAR_IMAGES: Record<string, string[]> = {
  pebre: ['/pebre.png'],
  cacho: ['/cacho.png'],
  chileno: ['/chileno.png'],
  fuego: ['/fuego.png'],
  'chileno-fuego': ['/fuego.png'],
  pime: ['/pime.png'],
  chilote: ['/chilote.png', '/chi lote.png'],
  'chi lote': ['/chi lote.png', '/chilote.png'],
  berenja: ['/berenja.png'],
  seta: ['/seta.png'],
  piola: ['/pebre.png'],
  mestizo: ['/chileno.png'],
  brigido: ['/cacho.png'],
  'que-necesidad': ['/cacho.png'],
  'pebre-dulcon': ['/pime.png'],
  'chimi-criollo': ['/chilote.png', '/chi lote.png'],
  'mayo-ajo-chilote': ['/berenja.png'],
  'mostaza-miel-ulmo': ['/seta.png'],
};

// Hand-drawn vector chili bottle with authentic label, neck wax/cap, and street aesthetic
// Automatically displays real jar photo when available in public/ folder
export const ChiliBottleGraphic: React.FC<{
  variant?: 'pebre' | 'chileno' | 'fuego' | 'cacho' | 'chileno-fuego' | 'piola' | 'mestizo' | 'brigido' | 'que-necesidad' | 'pime' | 'chilote' | 'berenja' | 'seta' | 'pebre-dulcon' | 'chimi-criollo' | 'mayo-ajo-chilote' | 'mostaza-miel-ulmo';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  interactive?: boolean;
}> = ({ variant = 'cacho', size = 'lg', className = '', interactive = true }) => {
  const candidateImages = JAR_IMAGES[variant] || [];
  const [candidateIdx, setCandidateIdx] = React.useState(0);
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    setCandidateIdx(0);
    setImageError(false);
    setImageLoaded(false);
  }, [variant]);

  const currentImageSrc = candidateImages[candidateIdx];

  const handleImageError = () => {
    if (candidateIdx < candidateImages.length - 1) {
      setCandidateIdx(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const config = {
    pebre: {
      sauceColor: '#397A3C',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'PEBRE',
      sub: 'AJÍ VERDE & TOMATE DESHID.',
      capColor: '#254E28',
      badge: '2/5',
      spiceName: 'PICOR 2/5',
    },
    cacho: {
      sauceColor: '#A64B10',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'CACHO',
      sub: 'CACHO DE CABRA AHUMADO',
      capColor: '#6E2F05',
      badge: '3/5',
      spiceName: 'PICOR 3/5',
    },
    chileno: {
      sauceColor: '#245E32',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'CHILENO',
      sub: 'AJÍ VERDE CHILENO',
      capColor: '#13381B',
      badge: '4/5',
      spiceName: 'PICOR 4/5',
    },
    fuego: {
      sauceColor: '#7C0E0E',
      accentColor: '#F4C430',
      labelBg: '#111111',
      title: 'FUEGO',
      sub: 'PICHÚN, PÁJARO & HABANERO',
      capColor: '#111111',
      badge: '5/5',
      spiceName: 'EXTREMO 5/5',
    },
    'chileno-fuego': {
      sauceColor: '#7C0E0E',
      accentColor: '#F4C430',
      labelBg: '#111111',
      title: 'FUEGO',
      sub: 'PICHÚN, PÁJARO & HABANERO',
      capColor: '#111111',
      badge: '5/5',
      spiceName: 'EXTREMO 5/5',
    },
    piola: {
      sauceColor: '#397A3C',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'PEBRE',
      sub: 'AJÍ VERDE CRIOLLO',
      capColor: '#F4C430',
      badge: '2/5',
      spiceName: 'PICOR CRIOLLO',
    },
    mestizo: {
      sauceColor: '#D92323',
      accentColor: '#F4C430',
      labelBg: '#F4EBD8',
      title: 'CHILENO FUEGO',
      sub: 'AJÍ ROJO & MERKÉN',
      capColor: '#A81414',
      badge: '4/5',
      spiceName: 'FUEGO PATRIO',
    },
    brigido: {
      sauceColor: '#7C0E0E',
      accentColor: '#F4C430',
      labelBg: '#111111',
      title: 'CACHO',
      sub: '100% CACHO DE CABRA',
      capColor: '#111111',
      badge: '5/5',
      spiceName: 'CACHO DE CABRA',
    },
    'que-necesidad': {
      sauceColor: '#7C0E0E',
      accentColor: '#D92323',
      labelBg: '#111111',
      title: 'CACHO',
      sub: '100% CACHO DE CABRA',
      capColor: '#111111',
      badge: '5/5',
      spiceName: 'CACHO DE CABRA',
    },
    pime: {
      sauceColor: '#C84B31',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'PIME',
      sub: 'PIMENTÓN AL HUMO',
      capColor: '#A5341E',
      badge: '0/5',
      spiceName: 'PIMENTÓN AL HUMO',
    },
    chilote: {
      sauceColor: '#DDA032',
      accentColor: '#111111',
      labelBg: '#FFF9EE',
      title: 'CHILOTE',
      sub: 'SALSA DE AJO CHILOTE',
      capColor: '#B57C17',
      badge: '0/5',
      spiceName: 'SALSA AJO CHILOTE',
    },
    berenja: {
      sauceColor: '#4A2B4B',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'BERENJA',
      sub: 'BERENJENA AL HUMO',
      capColor: '#361A37',
      badge: '0/5',
      spiceName: 'BERENJENA AL HUMO',
    },
    seta: {
      sauceColor: '#594031',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'SETA',
      sub: 'PORTOBELLO AL HUMO',
      capColor: '#3D2B20',
      badge: '0/5',
      spiceName: 'PORTOBELLO AL HUMO',
    },
    'pebre-dulcon': {
      sauceColor: '#C84B31',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'PIME',
      sub: 'PIMENTÓN ASADO',
      capColor: '#C84B31',
      badge: '0/5',
      spiceName: '0% PICANTE',
    },
    'chimi-criollo': {
      sauceColor: '#DDA032',
      accentColor: '#111111',
      labelBg: '#FFF9EE',
      title: 'CHILOTE',
      sub: 'AJO ASADO AL RESCOLDO',
      capColor: '#B57C17',
      badge: '0/5',
      spiceName: 'EMULSIÓN NOBLE',
    },
    'mayo-ajo-chilote': {
      sauceColor: '#4A2B4B',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'BERENJA',
      sub: 'AHUMADA AL CARBÓN',
      capColor: '#361A37',
      badge: '0/5',
      spiceName: 'HUMO DIRECTO',
    },
    'mostaza-miel-ulmo': {
      sauceColor: '#594031',
      accentColor: '#F4C430',
      labelBg: '#FFF9EE',
      title: 'SETA',
      sub: 'HONGOS SILVESTRES',
      capColor: '#3D2B20',
      badge: '0/5',
      spiceName: 'UMAMI AUSTRAL',
    },
  }[variant];

  const heights = {
    sm: 'h-24 w-20',
    md: 'h-64 w-52 sm:h-72 sm:w-60',
    lg: 'h-80 w-64 sm:h-96 sm:w-72',
    xl: 'h-80 w-72 sm:h-[420px] sm:w-[340px] md:h-[480px] md:w-[380px]',
  }[size];

  if (currentImageSrc && !imageError) {
    return (
      <div className={`relative flex items-center justify-center select-none ${heights} ${className}`}>
        {/* Drop shadow on floor */}
        <div className="absolute -bottom-3 w-4/5 h-6 bg-[#111111] rounded-full blur-md opacity-45 transform scale-y-50" />

        <img
          key={currentImageSrc}
          src={currentImageSrc}
          alt={`Envase Ají Veneno ${config?.title || variant}`}
          className={`max-h-full max-w-full w-auto h-auto object-contain filter drop-shadow-[0_14px_24px_rgba(0,0,0,0.4)] transition-all duration-300 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />

        {/* Loading placeholder skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="w-3/4 h-5/6 rounded-2xl bg-[#111111]/10 border-2 border-dashed border-[#111111]/30 animate-pulse flex flex-col items-center justify-center p-2 text-center">
              <span className="font-anton text-xs text-[#111111]/60 uppercase">{config?.title || variant}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  const svgHeights = {
    sm: 'h-48 w-24',
    md: 'h-64 w-32',
    lg: 'h-96 w-44 md:h-[430px] md:w-56',
    xl: 'h-[440px] w-60 md:h-[540px] md:w-72',
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${svgHeights} ${className}`}>
      {/* Drop shadow on floor */}
      <div className="absolute -bottom-3 w-4/5 h-6 bg-[#111111] rounded-full blur-md opacity-40 transform scale-y-50" />

      <svg 
        viewBox="0 0 240 520" 
        className="w-full h-full drop-shadow-2xl overflow-visible transition-transform duration-300"
      >
        <defs>
          <linearGradient id={`glassGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="18%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="80%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`sauceGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={config.sauceColor} />
            <stop offset="45%" stopColor={config.sauceColor} />
            <stop offset="100%" stopColor="#400505" />
          </linearGradient>
        </defs>

        {/* BOTTLE CAP */}
        <g id="cap">
          <rect x="94" y="20" width="52" height="24" rx="3" fill={config.capColor} stroke="#111111" strokeWidth="5" />
          {/* Cap ridges */}
          <line x1="104" y1="23" x2="104" y2="40" stroke="#FFF9EE" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="114" y1="23" x2="114" y2="40" stroke="#FFF9EE" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="124" y1="23" x2="124" y2="40" stroke="#FFF9EE" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="134" y1="23" x2="134" y2="40" stroke="#FFF9EE" strokeWidth="2" strokeOpacity="0.4" />
          {/* Safety ring */}
          <rect x="92" y="44" width="56" height="8" rx="2" fill="#111111" stroke="#111111" strokeWidth="2" />
        </g>

        {/* BOTTLE NECK */}
        <path
          d="M 96,52 L 144,52 L 144,120 Q 144,155 195,175 L 195,475 Q 195,495 175,495 L 65,495 Q 45,495 45,475 L 45,175 Q 96,155 96,120 Z"
          fill={`url(#sauceGrad-${variant})`}
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Glass reflection highlight on left */}
        <path
          d="M 100,60 L 105,60 L 105,120 Q 105,150 58,180 L 58,470 Q 58,485 70,488 L 64,490 Q 48,485 48,470 L 48,175 Q 98,153 100,120 Z"
          fill="#ffffff"
          opacity="0.3"
        />

        {/* Glass overlay shading */}
        <path
          d="M 96,52 L 144,52 L 144,120 Q 144,155 195,175 L 195,475 Q 195,495 175,495 L 65,495 Q 45,495 45,475 L 45,175 Q 96,155 96,120 Z"
          fill={`url(#glassGrad-${variant})`}
          pointerEvents="none"
        />

        {/* Neck collar label */}
        <rect x="95" y="80" width="50" height="34" fill="#F4C430" stroke="#111111" strokeWidth="3" />
        <text x="120" y="102" textAnchor="middle" className="font-bebas text-[14px] fill-[#111111] font-black tracking-widest">CHILE</text>

        {/* MAIN BODY LABEL */}
        <g id="main-label" transform="translate(54, 185)">
          {/* Label background sheet */}
          <rect 
            x="0" 
            y="0" 
            width="132" 
            height="260" 
            rx="4"
            fill={config.labelBg} 
            stroke="#111111" 
            strokeWidth="5" 
          />

          {/* Internal poster border */}
          <rect 
            x="5" 
            y="5" 
            width="122" 
            height="250" 
            rx="2" 
            fill="none" 
            stroke={variant === 'que-necesidad' || variant === 'cacho' ? '#D92323' : '#111111'} 
            strokeWidth="2" 
            strokeDasharray="4 2"
          />

          {/* Top Brand Banner */}
          <rect x="8" y="10" width="116" height="32" fill="#D92323" stroke="#111111" strokeWidth="2" />
          <text 
            x="66" 
            y="32" 
            textAnchor="middle" 
            className="font-anton text-[18px] fill-[#FFF9EE] tracking-wider"
          >
            AJÍ VENENO
          </text>

          {/* Subtagline banner */}
          <rect x="18" y="44" width="96" height="15" fill="#F4C430" stroke="#111111" strokeWidth="1.5" />
          <text 
            x="66" 
            y="55" 
            textAnchor="middle" 
            className="font-barlow font-bold text-[9px] fill-[#111111] tracking-widest uppercase"
          >
            HECHO PA' PICAR • 100% CHILE
          </text>

          {/* Artisanal Seal Badge on bottle label */}
          <g transform="translate(66, 92)">
            <circle cx="0" cy="0" r="22" fill={config.sauceColor} stroke="#111111" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="18" fill="none" stroke="#F4C430" strokeWidth="1.5" strokeDasharray="3 2" />
            <polygon 
              points="0,-10 3,-3 10,-3 5,2 7,9 0,5 -7,9 -5,2 -10,-3 -3,-3"
              fill="#F4C430" 
              stroke="#111111" 
              strokeWidth="1.2"
            />
          </g>

          {/* VARIANT TITLE */}
          <text 
            x="66" 
            y="142" 
            textAnchor="middle" 
            className={`font-anton text-[24px] ${variant === 'que-necesidad' || variant === 'cacho' ? 'fill-[#FFF9EE]' : 'fill-[#111111]'} uppercase tracking-tight`}
          >
            {config.title}
          </text>

          {/* Variant subtitle */}
          <text 
            x="66" 
            y="158" 
            textAnchor="middle" 
            className={`font-barlow font-black text-[9px] ${variant === 'que-necesidad' || variant === 'cacho' ? 'fill-[#F4C430]' : 'fill-[#D92323]'} uppercase tracking-wider`}
          >
            {config.sub}
          </text>

          {/* Divider line */}
          <line 
            x1="16" 
            y1="168" 
            x2="116" 
            y2="168" 
            stroke={variant === 'que-necesidad' || variant === 'cacho' ? '#444' : '#111111'} 
            strokeWidth="1.5" 
          />

          {/* Flavor badge */}
          <rect 
            x="14" 
            y="176" 
            width="104" 
            height="22" 
            fill={variant === 'que-necesidad' || variant === 'cacho' ? '#D92323' : '#F4C430'} 
            stroke="#111111" 
            strokeWidth="2" 
          />
          <text 
            x="66" 
            y="191" 
            textAnchor="middle" 
            className={`font-anton text-[11px] ${variant === 'que-necesidad' || variant === 'cacho' ? 'fill-[#FFF9EE]' : 'fill-[#111111]'} uppercase tracking-wider`}
          >
            {config.spiceName}
          </text>

          {/* Bottom stats: picor and volume */}
          <text 
            x="24" 
            y="225" 
            className={`font-barlow font-bold text-[10px] ${variant === 'que-necesidad' || variant === 'cacho' ? 'fill-[#FFF9EE]' : 'fill-[#111111]'}`}
          >
            PICOR: {config.badge}
          </text>
          <text 
            x="108" 
            y="225" 
            textAnchor="end" 
            className={`font-barlow font-black text-[10px] ${variant === 'que-necesidad' || variant === 'cacho' ? 'fill-[#F4C430]' : 'fill-[#111111]'}`}
          >
            200 ML
          </text>

          {/* Bottom barcode style stripes */}
          <g transform="translate(18, 234)">
            {[3, 6, 2, 8, 4, 3, 7, 2, 5, 8, 2, 6, 4, 7, 3, 9, 2, 5].map((w, i) => (
              <rect 
                key={i} 
                x={i * 5.2} 
                y="0" 
                width={w > 5 ? 2.5 : 1.2} 
                height="12" 
                fill={variant === 'que-necesidad' || variant === 'cacho' ? '#FFF9EE' : '#111111'} 
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

// Hand-drawn vector chili pepper icon
export const ChiliPepperVector: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 28, className = '', color = '#D92323' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`inline-block select-none overflow-visible ${className}`}
    >
      {/* Stem */}
      <path 
        d="M 30 10 C 34 6, 38 7, 40 4" 
        stroke="#397A3C" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      {/* Green Calyx Cap */}
      <path 
        d="M 23 12 L 28 8 L 33 13 L 29 17 Z" 
        fill="#397A3C" 
        stroke="#111111" 
        strokeWidth="2" 
      />
      {/* Chili Body */}
      <path 
        d="M 28 12 C 34 18, 36 28, 26 38 C 20 44, 10 44, 8 40 C 6 36, 12 30, 16 24 C 20 18, 22 13, 28 12 Z" 
        fill={color} 
        stroke="#111111" 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />
      {/* Shine highlight */}
      <path 
        d="M 24 18 C 28 23, 28 29, 22 34" 
        stroke="#FFF9EE" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        opacity="0.6" 
      />
    </svg>
  );
};

// Hand-drawn comic lightning bolt
export const LightningVector: React.FC<{
  className?: string;
  size?: number;
  fill?: string;
}> = ({ className = '', size = 32, fill = '#F4C430' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 36 48" 
    className={`inline-block ${className}`}
  >
    <polygon 
      points="20,2 6,24 18,24 12,46 32,18 19,18" 
      fill={fill} 
      stroke="#111111" 
      strokeWidth="3.5" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Comic fire flame doodle
export const FlameVector: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 36 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 40 48" 
    className={`inline-block ${className}`}
  >
    <path 
      d="M 20,4 C 23,12 33,18 34,28 C 36,38 28,44 20,44 C 12,44 4,38 6,28 C 8,18 16,14 18,8 C 19,16 23,18 20,4 Z" 
      fill="#D92323" 
      stroke="#111111" 
      strokeWidth="3" 
    />
    <path 
      d="M 20,20 C 23,24 28,27 28,33 C 28,39 24,41 20,41 C 16,41 12,39 12,33 C 12,27 17,25 18,22 Z" 
      fill="#F4C430" 
      stroke="#111111" 
      strokeWidth="2" 
    />
  </svg>
);

// Hand-drawn arrow doodle for poster annotations
export const DoodleArrow: React.FC<{
  className?: string;
  direction?: 'down-right' | 'down-left' | 'up-right' | 'right';
  color?: string;
}> = ({ className = '', direction = 'down-right', color = '#111111' }) => {
  const flips = {
    'down-right': '',
    'down-left': 'scale-x-[-1]',
    'up-right': 'scale-y-[-1]',
    'right': 'rotate-[-30deg]',
  }[direction];

  return (
    <svg 
      width="64" 
      height="48" 
      viewBox="0 0 80 60" 
      className={`inline-block overflow-visible ${flips} ${className}`}
    >
      <path 
        d="M 10 10 C 25 12, 50 20, 65 45" 
        fill="none" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      <path 
        d="M 45 42 L 67 47 L 62 27" 
        fill="none" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

// Handcrafted sticker badge
export const StickerBadge: React.FC<{
  text: string;
  bgColor?: string;
  textColor?: string;
  rotation?: string;
  className?: string;
}> = ({
  text,
  bgColor = '#F4C430',
  textColor = '#111111',
  rotation = '-rotate-3',
  className = ''
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center px-4 py-1.5 font-anton uppercase text-sm md:text-base border-3 border-[#111111] shadow-brutal-sm transform ${rotation} transition-transform hover:scale-105 select-none ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="tracking-wider">{text}</span>
    </div>
  );
};
