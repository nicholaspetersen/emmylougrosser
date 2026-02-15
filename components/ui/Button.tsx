import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover font-[family-name:var(--font-crimson-text)]",
    secondary:
      "bg-white border border-border text-gray-700 hover:bg-background-secondary font-[family-name:var(--font-crimson-text)]",
    outline:
      "bg-white border border-border text-gray-700 hover:bg-background-secondary font-[family-name:var(--font-crimson-text)]",
    link:
      "text-foreground-secondary hover:text-foreground underline-offset-2 font-semibold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-[18px] py-[12px] text-base leading-6",
    lg: "px-6 py-3 text-base leading-6",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
