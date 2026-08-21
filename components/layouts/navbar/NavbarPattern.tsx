const nodes = [
  { top: "20%", left: "8%" },
  { top: "65%", left: "14%" },
  { top: "30%", left: "25%" },
  { top: "70%", left: "38%" },
  { top: "22%", left: "50%" },
  { top: "62%", left: "60%" },
  { top: "35%", left: "72%" },
  { top: "68%", left: "84%" },
  { top: "24%", left: "92%" },
];

export default function NavbarPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
    >
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Network Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="navbar-line"
          d="M80 20 L250 30 L460 22 L650 35 L860 24 L1100 28"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        <path
          className="navbar-line"
          d="M120 60 L380 48 L620 58 L900 46 L1080 55"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      </svg>

      {/* Data Nodes */}
      {nodes.map((node, index) => (
        <span
          key={index}
          className="absolute rounded-full navbar-node"
          style={{
            top: node.top,
            left: node.left,
            width: "6px",
            height: "6px",
            background: "rgba(255,255,255,0.25)",
            boxShadow: "0 0 12px rgba(255,255,255,0.12)",
          }}
        />
      ))}

      {/* Accent Nodes */}
      <span
        className="absolute rounded-full navbar-node"
        style={{
          top: "30%",
          left: "50%",
          width: "8px",
          height: "8px",
          background: "rgba(251,191,36,0.35)",
          boxShadow: "0 0 20px rgba(251,191,36,0.25)",
        }}
      />

      <span
        className="absolute rounded-full navbar-node"
        style={{
          top: "68%",
          left: "84%",
          width: "8px",
          height: "8px",
          background: "rgba(251,191,36,0.35)",
          boxShadow: "0 0 20px rgba(251,191,36,0.25)",
          animationDelay: "1.6s",
        }}
      />

      {/* Soft Glow */}
      <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-slate-300/5 blur-3xl" />

      <div
        className="
        navbar-aurora
        absolute inset-0
        bg-linear-to-r
        from-transparent
        via-white/5
        to-transparent
    "
      />
    </div>
  );
}
