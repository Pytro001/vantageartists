type LogoProps = {
  className?: string;
  title?: string;
};

/** Two-blade V mark. White on dark. */
export function Logo({ className, title }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={title ?? ""}
      className={["mix-blend-screen", className].filter(Boolean).join(" ")}
    />
  );
}
