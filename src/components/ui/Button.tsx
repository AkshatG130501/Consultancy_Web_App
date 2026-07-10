import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  children: React.ReactNode;
};

const variants: Record<string, string> = {
  primary:
    "bg-gold-600 text-white hover:bg-gold-700 focus-visible:outline-gold-600",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900",
  ghost:
    "bg-transparent text-navy-900 border border-navy-900/20 hover:border-navy-900/40 hover:bg-navy-900/5 focus-visible:outline-navy-900",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  showArrow,
  children,
  href,
  ...rest
}: ButtonBaseProps &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  )) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as Omit<React.ComponentProps<typeof Link>, "href" | "className">)}>
        {children}
        {showArrow && <ArrowRight className="size-4" />}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)}>
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </button>
  );
}
