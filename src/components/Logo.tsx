"use client";

import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="headerLogoTab"
      aria-label="ديانا أنتيك - الصفحة الرئيسية"
      title="ديانا أنتيك – Diana Antique"
    >
      {/* Classical Golden Roman Temple Icon */}
      <div className="dianaTempleCrest" aria-hidden="true">
        <svg
          viewBox="0 0 100 100"
          width={compact ? 34 : 40}
          height={compact ? 34 : 40}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triangular Pediment with sculpted arch */}
          <path
            d="M 15 36 L 50 12 L 85 36 Z"
            stroke="url(#templeGoldGrad)"
            strokeWidth="3.2"
            fill="rgba(218, 165, 32, 0.16)"
          />
          {/* Inner Pediment Arch */}
          <path
            d="M 32 36 Q 50 20 68 36"
            stroke="url(#templeGoldGrad)"
            strokeWidth="2.2"
            fill="none"
          />
          <circle cx="50" cy="28" r="3.2" fill="url(#templeGoldGrad)" />

          {/* Entablature Beam */}
          <rect
            x="12"
            y="36"
            width="76"
            height="6.5"
            rx="1.5"
            fill="url(#templeGoldGrad)"
          />

          {/* 4 Classical Fluted Columns */}
          <rect x="18" y="44" width="7" height="34" rx="1.5" fill="url(#templeGoldGrad)" />
          <line x1="21.5" y1="46" x2="21.5" y2="76" stroke="#120e0a" strokeWidth="1" />

          <rect x="36" y="44" width="7" height="34" rx="1.5" fill="url(#templeGoldGrad)" />
          <line x1="39.5" y1="46" x2="39.5" y2="76" stroke="#120e0a" strokeWidth="1" />

          <rect x="57" y="44" width="7" height="34" rx="1.5" fill="url(#templeGoldGrad)" />
          <line x1="60.5" y1="46" x2="60.5" y2="76" stroke="#120e0a" strokeWidth="1" />

          <rect x="75" y="44" width="7" height="34" rx="1.5" fill="url(#templeGoldGrad)" />
          <line x1="78.5" y1="46" x2="78.5" y2="76" stroke="#120e0a" strokeWidth="1" />

          {/* Stepped Plinth Base */}
          <rect x="14" y="80" width="72" height="5" rx="1" fill="url(#templeGoldGrad)" />
          <rect x="10" y="86" width="80" height="5.5" rx="1.2" fill="url(#templeGoldGrad)" />

          <defs>
            <linearGradient id="templeGoldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff3cf" />
              <stop offset="35%" stopColor="#dfbe76" />
              <stop offset="70%" stopColor="#c59844" />
              <stop offset="100%" stopColor="#8c6520" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Names & Tagline (Exact matching mockup, no extra words) */}
      <div className="dianaBrandText">
        <span className="dianaArabicName">ديانا أنتيك</span>
        <span className="dianaEnglishName">Diana Antique</span>
        {!compact && (
          <span className="dianaTagline">أكثر من مجرد سوق .. رحلة عبر الزمن</span>
        )}
      </div>
    </Link>
  );
}
