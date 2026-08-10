export default function DotGridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle, #b8b8b8 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundColor: "#ecebeb", // dari #fafafa -> lebih gelap
      }}
    />
  );
}