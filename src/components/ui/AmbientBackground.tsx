export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden bg-zinc-950"
    >
      <div className="map-grid absolute inset-0 opacity-60" />
      <div className="ambient-orb ambient-orb-cyan absolute -left-48 -top-48 hidden size-[36rem] rounded-full bg-cyan-500 opacity-15 blur-[160px] md:block" />
      <div className="ambient-orb ambient-orb-violet absolute -right-48 top-[20%] hidden size-[40rem] rounded-full bg-violet-500 opacity-[0.13] blur-[160px] md:block" />
      <div className="ambient-orb ambient-orb-blue absolute bottom-[-18rem] left-[30%] hidden size-[32rem] rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 opacity-10 blur-[120px] md:block" />
    </div>
  );
}
