"use client";

import { IconType } from "react-icons";

type SkillBadgeProps = {
  icon: IconType;
  label: string;
  iconColor: string;
  iconBg: string;
};

export default function SkillBadge({ icon: Icon, label, iconColor, iconBg }: SkillBadgeProps) {
  return (
    <div
      className="glass group relative flex items-center gap-2 overflow-hidden rounded-full
                 px-3 py-2 transition-transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-105"
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={13} color={iconColor} />
      </span>

      <span className="text-sm font-semibold text-black">{label}</span>

      {/* shine sweep saat hover */}
      <span
        className="pointer-events-none absolute inset-0 z-10 -translate-x-full
                   bg-gradient-to-r from-transparent via-white/70 to-transparent
                   transition-transform duration-700 ease-out
                   group-hover:translate-x-full"
      />
    </div>
  );
}