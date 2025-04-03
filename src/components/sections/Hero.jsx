import { Link } from 'react-router-dom';

const Hero = ({ 
  title = 'Innovation begins\nwith imitation', 
  description = 'At Mimic, we specialize in crafting bespoke digital solutions tailored to elevate your brand\'s online presence and engage your audience effectively. Let\'s connect.',
  backgroundImage = '/images/Hero.png',
  buttonText = 'Start here',
  buttonLink = '/contact'
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-gray pt-24 pb-12">
      {/* Imagen de fondo - versión desktop y móvil */}
      <div className="relative w-full px-4">
        {/* Versión desktop */}
        <div className="hidden md:block relative overflow-hidden" style={{ 
          maxWidth: '1790px', 
          height: '935px', 
          margin: '0 auto',
          borderRadius: '40px' 
        }}>
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          
          {/* Contenido superpuesto - desktop */}
          <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '128.4px' }}>
            <h1 className="text-white mb-6 leading-tight" style={{ fontSize: '96px', fontWeight: 400 }}>
              {title.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
            
            <p className="text-white mb-8 max-w-md" style={{ fontSize: '25px', fontWeight: 500, lineHeight: '1.5' }}>
              {description}
            </p>
            
            <Link 
              to={buttonLink} 
              className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
              style={{ 
                width: '256px', 
                height: '58px', 
                fontSize: '25px', 
                fontWeight: 500,
                borderRadius: '12px'
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
        
        {/* Versión móvil */}
        <div className="block md:hidden w-full relative overflow-hidden" style={{ 
          maxWidth: '359px', 
          height: '773px', 
          margin: '0 auto',
          borderRadius: '16px'
        }}>
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          
          {/* Contenido superpuesto - móvil */}
          <div className="absolute inset-0 flex flex-col justify-center p-8">
            <h1 className="text-white mb-4 leading-tight" style={{ fontSize: '48px', fontWeight: 400 }}>
              {title.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h1>
            
            <p className="text-white mb-6 max-w-xs" style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.5' }}>
              {description}
            </p>
            
            <Link 
              to={buttonLink} 
              className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
              style={{ 
                width: '116px', 
                height: '27px', 
                fontSize: '15px', 
                fontWeight: 500,
                borderRadius: '5px'
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 