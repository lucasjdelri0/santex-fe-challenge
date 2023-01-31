import { ReactNode } from 'react';

export interface HeaderProps {
  backgroundColor?: string;
  tabColor?: string;
  repoHref?: string;
  badgeCount?: number;
  badgeIcon?: ReactNode;
}
