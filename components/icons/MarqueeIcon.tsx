export default function MarqueeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="16.3292" y="1.21716" width="8.02596" height="34.9278" rx="2" transform="rotate(5.30952 16.3292 1.21716)" fill="currentColor" />
      <rect x="2.10061" y="12.1746" width="8.02596" height="34.9278" rx="2" transform="rotate(-54.6905 2.10061 12.1746)" fill="currentColor" />
      <rect x="4.48037" y="29.9348" width="8.02596" height="34.9278" rx="2" transform="rotate(-114.69 4.48037 29.9348)" fill="currentColor" />
    </svg>
  );
}