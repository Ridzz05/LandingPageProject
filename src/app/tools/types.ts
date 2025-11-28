import type { ReactNode } from 'react';

export interface Tool {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  status: "Available" | "Coming Soon";
}
