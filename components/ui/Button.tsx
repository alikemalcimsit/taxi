import Link from "next/link";
import { ComponentProps } from "react";

// basit class birleştirici
const cn = (...cls: (string | false | undefined)[]) => cls.filter(Boolean).join(" ");

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
} & ComponentProps<"button">;

export function Button({ href, variant = "primary", className, children, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-extrabold px-5 py-3 transition";
  const styles =
    variant === "primary"
      ? "bg-brand text-black shadow-[0_10px_30px_rgba(255,192,0,.28)] hover:bg-[#c99700]"
      : "bg-white/10 border border-white/20 text-white hover:bg-white/15";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(base, styles, className)} {...rest}>
      {children}
    </button>
  );
}
