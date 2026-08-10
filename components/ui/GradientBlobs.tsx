export default function GradientBlobs() {
  return (
    <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-orange-400/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-400/40 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
    </div>
  );
}