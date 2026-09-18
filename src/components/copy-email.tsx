import { useState } from "react";

const EMAIL = "bookings@vantageartists.xyz";

type CopyEmailProps = {
  className?: string;
  children?: string;
};

export function CopyEmail({ className, children }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* ignore */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button type="button" onClick={copy} className={className}>
      {copied ? "Copied" : (children ?? EMAIL)}
    </button>
  );
}
