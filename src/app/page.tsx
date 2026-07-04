type Props = object;

export default function Home({}: Props) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#04070D] text-white">
      <h1 className="heading-font text-7xl font-bold">CORTEX</h1>
      <p className="body-font text-xl">The First Cognitive Operating System</p>
      <p className="font-mono text-sm text-zinc-500">MONOSPACE TEST</p>
    </main>
  );
}
