import { ReactNode } from "react";

export interface FeaturedProjectProps {
  title: string;
  description: ReactNode;
  tech: string[];
  image: string | null;
  altImage: string;
  github?: string;
  live?: string;
  ariaLabel: string;
}
