export default function DoodleSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 170"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78 18
           C 92 18, 96 30, 84 34
           C 68 39, 55 55, 65 75
           C 78 98, 100 100, 95 125
           C 90 150, 62 155, 55 175
           C 50 190, 60 200, 72 195"
        stroke="var(--color-primary)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}