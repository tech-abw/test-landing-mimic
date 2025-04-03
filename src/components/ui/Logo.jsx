import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/images/Logo.png" 
        alt="Mimic Logo" 
        className="w-[120.87px] h-[27.06px] lg:w-[243.87px] lg:h-[54.55px]"
      />
    </Link>
  );
};

export default Logo; 