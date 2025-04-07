import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/images/Logo.svg" 
        alt="Mimic Logo" 
        className="w-[120.87px] h-[27.06px] lg:w-[162.44px] lg:h-[37px]"
      />
    </Link>
  );
};

export default Logo; 