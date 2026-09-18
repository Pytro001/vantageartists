type LogoProps = {
  className?: string;
  title?: string;
};

/** Two-blade V mark. Black on light. */
export function Logo({ className, title }: LogoProps) {
  return (
    <img src="/logo-black.png" alt={title ?? ""} className={className} />
  );
}
