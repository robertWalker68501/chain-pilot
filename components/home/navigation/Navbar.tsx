import NavLink from '@/components/home/navigation/NavLink';
import SiteLogo from '@/components/SiteLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
      <div>
        <SiteLogo href='/' />
      </div>

      <div className='hidden items-center gap-4 sm:flex'>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            text={link.label}
          />
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
