import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 text-foreground ${className}`}
      aria-label="Crebox Labs — home"
    >
      <span
        aria-hidden
        className="block h-5 w-5 rounded-md bg-accent transition-transform duration-300 group-hover:rotate-12"
      />
      {showWordmark ? (
        <span className="text-[1.0625rem] font-semibold leading-none tracking-tight">
          Crebox Labs
        </span>
      ) : null}
    </Link>
  );
}
