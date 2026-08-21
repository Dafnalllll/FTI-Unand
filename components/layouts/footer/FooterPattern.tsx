const nodes = [
  { top: "15%", left: "10%" },
  { top: "40%", left: "22%" },
  { top: "75%", left: "18%" },

  { top: "25%", left: "42%" },
  { top: "65%", left: "50%" },

  { top: "20%", left: "72%" },
  { top: "50%", left: "82%" },
  { top: "80%", left: "90%" },
];

export default function FooterPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Footer Flow Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="footer-line"
          d="M0 120 C250 40, 450 220, 700 130 S1000 70, 1200 150"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />

        <path
          className="footer-line"
          d="M0 220 C280 120, 520 300, 820 180 S1050 140, 1200 220"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <span
          key={index}
          className="footer-node absolute rounded-full"
          style={{
            top: node.top,
            left: node.left,
            width: "5px",
            height: "5px",
            background: "rgba(255,255,255,0.15)",
            boxShadow: "0 0 12px rgba(255,255,255,0.08)",
          }}
        />
      ))}

      {/* Accent Glow */}
      <div className="footer-glow absolute -top-32 left-0 h-72 w-72 rounded-full bg-slate-300/5 blur-3xl" />

      <div className="footer-glow absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gray-400/5 blur-3xl" />

      {/* Aurora */}
      <div
        className="
          footer-aurora
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-white/3
          to-transparent
        "
      />
    </div>
  );
}
