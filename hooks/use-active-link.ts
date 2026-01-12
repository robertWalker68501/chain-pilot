import { usePathname } from 'next/navigation';

export const useActiveLink = (href: string) => {
  const pathname = usePathname();
  return pathname === href || (href !== '/' && pathname.startsWith(href));
};
