/**
 * Animated 404 illustration — "dokumen hilang".
 * Pure SVG + SMIL animations (bobbing, blinking, spinning gear,
 * scanning magnifier, twinkling sparkles). No JS or global CSS needed.
 */
export default function NotFoundIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      role="img"
      aria-label="Ilustrasi dokumen hilang dengan kaca pembesar"
      className="w-full h-auto select-none"
    >
      {/* Ground shadow */}
      <ellipse cx="210" cy="282" rx="128" ry="14" fill="#e2e8f0">
        <animate
          attributeName="opacity"
          values="0.8;0.55;0.8"
          keyTimes="0;0.5;1"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Cloud / ground */}
      <rect x="84" y="246" width="252" height="62" rx="31" fill="#f1f5f9" />
      <circle cx="126" cy="246" r="22" fill="#f1f5f9" />
      <circle cx="294" cy="246" r="22" fill="#f1f5f9" />

      {/* Floating document + magnifier group */}
      <g transform="translate(122, 64)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 -9;0 0"
            keyTimes="0;0.5;1"
            dur="4s"
            repeatCount="indefinite"
          />

          {/* Document */}
          <g>
            <rect
              x="0"
              y="0"
              width="126"
              height="158"
              rx="14"
              fill="#ffffff"
              stroke="#94a3b8"
              strokeWidth="3"
            />
            {/* Folded corner */}
            <path d="M100 0 L126 26 L100 26 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
            <path d="M100 0 V26 H126" fill="none" stroke="#94a3b8" strokeWidth="3" />

            {/* Text lines */}
            <rect x="20" y="44" width="86" height="8" rx="4" fill="#e2e8f0" />
            <rect x="20" y="62" width="64" height="8" rx="4" fill="#e2e8f0" />
            <rect x="20" y="80" width="76" height="8" rx="4" fill="#e2e8f0" />

            {/* Blinking eyes */}
            <ellipse cx="43" cy="104" rx="6.5" ry="6.5" fill="#334155">
              <animate
                attributeName="ry"
                values="6.5;6.5;0.5;6.5"
                keyTimes="0;0.9;0.94;0.98"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="80" cy="104" rx="6.5" ry="6.5" fill="#334155">
              <animate
                attributeName="ry"
                values="6.5;6.5;0.5;6.5"
                keyTimes="0;0.9;0.94;0.98"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Question badge */}
            <circle cx="61.5" cy="138" r="17" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
            <text
              x="61.5"
              y="146"
              textAnchor="middle"
              fontSize="24"
              fontWeight="bold"
              fill="#78350f"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              ?
            </text>
          </g>

          {/* Magnifier scanning the document */}
          <g transform="translate(150, 148)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6 150 148;-10 150 148;-6 150 148"
              keyTimes="0;0.5;1"
              dur="4s"
              repeatCount="indefinite"
            />
            <g transform="translate(0,-8)">
              {/* Handle */}
              <rect x="-5" y="26" width="10" height="50" rx="5" fill="#64748b" />
              {/* Ring */}
              <circle
                cx="0"
                cy="0"
                r="27"
                fill="rgba(253,230,138,0.35)"
                stroke="#b45309"
                strokeWidth="4"
              />
              {/* Dashed scanning orbit */}
              <circle
                cx="0"
                cy="0"
                r="33"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeDasharray="5 9"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-56"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Glass shine */}
              <path
                d="M-14 -14 A 20 20 0 0 1 -2 -19"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.85"
              />
            </g>
          </g>
        </g>
      </g>

      {/* Spinning gear */}
      <g transform="translate(338, 58)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;360"
            dur="9s"
            repeatCount="indefinite"
          />
          <circle
            r="16"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="8"
            strokeDasharray="6 4"
          />
          <circle r="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
        </g>
      </g>

      {/* Floating 404 tag */}
      <g transform="translate(272, 74)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 -8;0 0"
            keyTimes="0;0.5;1"
            dur="3.2s"
            repeatCount="indefinite"
          />
          <rect x="-44" y="-18" width="88" height="36" rx="18" fill="#0f172a" />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontSize="19"
            fontWeight="bold"
            fill="#fbbf24"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            404
          </text>
        </g>
      </g>

      {/* Sparkles */}
      <g transform="translate(96, 74)">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.4;1;0.4"
          keyTimes="0;0.5;1"
          dur="3s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animate
          attributeName="opacity"
          values="0.25;1;0.25"
          keyTimes="0;0.5;1"
          dur="3s"
          repeatCount="indefinite"
        />
        <path d="M0 -11 C1.5 -3 3 -1.5 11 0 C3 1.5 1.5 3 0 11 C-1.5 3 -3 1.5 -11 0 C-3 -1.5 -1.5 -3 0 -11 Z" fill="#fbbf24" />
      </g>
      <g transform="translate(330, 170)">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;0.4;1"
          keyTimes="0;0.5;1"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.25;1"
          keyTimes="0;0.5;1"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <path d="M0 -9 C1.2 -2.5 2.5 -1.2 9 0 C2.5 1.2 1.2 2.5 0 9 C-1.2 2.5 -2.5 1.2 -9 0 C-2.5 -1.2 -1.2 -2.5 0 -9 Z" fill="#f59e0b" />
      </g>
    </svg>
  );
}
