const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=''>
      <div className='container'>
        <p>© {currentYear} ChainPilot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
