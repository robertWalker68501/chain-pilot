'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

interface SiteLogoProps {
  href: string;
  linkClasses?: string;
  text?: string;
  textClasses?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgClasses?: string;
}

const SiteLogo = ({
  href,
  linkClasses,
  text = '',
  textClasses,
  imgSrc,
  imgAlt = 'ChainPilot Logo',
  imgWidth = 200,
  imgHeight = 66,
  imgClasses,
}: SiteLogoProps) => {
  const { theme } = useTheme();

  if (theme === 'light') {
    imgSrc = '/assets/images/logo-light.png';
  } else {
    imgSrc = '/assets/images/logo-dark.png';
  }

  return (
    <Link
      href={href}
      className={cn('flex items-center gap-2', linkClasses)}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className={imgClasses}
      />
      <span className={cn('text-2xl', textClasses)}>{text}</span>
    </Link>
  );
};

export default SiteLogo;
