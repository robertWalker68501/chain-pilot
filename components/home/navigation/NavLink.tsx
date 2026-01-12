'use client';

import Link from 'next/link';

import { useActiveLink } from '@/hooks/use-active-link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  linkClasses?: string;
  text?: string;
  isMobile?: boolean;
}

const NavLink = ({ href, text, linkClasses, isMobile }: NavLinkProps) => {
  const isActive = useActiveLink(href);

  return (
    <Link
      href={href}
      className={cn(
        'text-sm transition-all duration-300 hover:text-blue-500',
        isActive && 'text-blue-500',
        isMobile && 'text-2xl',
        linkClasses
      )}
    >
      {text}
    </Link>
  );
};

export default NavLink;
