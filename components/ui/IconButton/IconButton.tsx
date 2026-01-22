import { IconButtonProps } from "@/interfaces/button/Iconbutton/IconButton";

export default function IconButton({ Icon }: IconButtonProps) {
  return (
    <button className="cursor-pointer p-4 border border-(--border-color) hover:bg-white/5 rounded-sm hover:border-primary/50 hover:bg-card transition-all duration-300">
      <Icon className="w-5 h-5 text-muted-foreground" />
    </button>
  );
}
