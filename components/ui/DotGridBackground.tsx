export default function DotGridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle, #06060636 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundColor: "#f3f3f3", // dari #fafafa -> lebih gelap
      }}
    />
  );
}