export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden bg-background"
    >
      <div className="map-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(239_68_68_/_0.08),transparent_22rem),radial-gradient(circle_at_80%_30%,rgb(234_179_8_/_0.12),transparent_24rem)]" />
      <div className="absolute -bottom-32 -left-32 size-80 rounded-full border-[3px] border-foreground/5" />
      <div className="absolute -right-20 top-24 size-56 rounded-full border-[3px] border-accent-warm/10" />
    </div>
  );
}
