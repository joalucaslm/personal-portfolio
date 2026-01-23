import { IconButtonProps } from "@/interfaces/button/Iconbutton/IconButton";

export default function IconButton({
  Icon,
  color,
  href,
  "aria-label": ariaLabel,
  mail = false,
}: IconButtonProps) {
  const scrollContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const className =
    "cursor-pointer p-4 border border-(--border-color) hover:bg-white/5 rounded-sm hover:border-primary/50 hover:bg-card transition-all duration-300 inline-flex items-center justify-center";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        <Icon className={`w-5 h-5 text-(--${color}) text-muted-foreground`} />
      </a>
    );
  }

  return (
    <div
      className={className}
      aria-label={ariaLabel}
      onClick={mail ? scrollContact : undefined}
    >
      <Icon className={`w-5 h-5 text-(--${color}) text-muted-foreground`} />
    </div>
  );
}
