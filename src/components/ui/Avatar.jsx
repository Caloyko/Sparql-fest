import React from 'react'
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram,  FaLinkedin, FaGithub  } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';


const OrcidIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#A6CE39" />
      <path
        fill="#fff"
        d="M17.8 7.663a6.06 6.06 0 0 0-5.272-3.227c-3.354 0-6.095 2.738-6.095 6.1 0 3.36 2.74 6.1 6.095 6.1a6.072 6.072 0 0 0 5.272-3.253l-1.502-.87a4.604 4.604 0 0 1-3.77 2.034c-2.496 0-4.522-2.02-4.522-4.514 0-2.493 2.026-4.514 4.522-4.514a4.605 4.605 0 0 1 3.77 2.026l1.5-.863z"
      />
    </svg>
  );

  const icons = {
    Twitter: FaTwitter,
    Facebook: FaFacebook ,
    YouTube: FaYoutube ,
    Instagram: FaInstagram ,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    ORCID: OrcidIcon,
  };
  

const Avatar = ({ name, photo, role, description, mail, socials = {} }) => {
    const { isDarkMode, setIsDarkMode } = useTheme();
  
    const orcidUrl = socials.ORCID || null;
    
    const handleNamePhotoClick = () => {
        if (orcidUrl) {
          window.open(orcidUrl, "_blank", "noopener,noreferrer");
        }
      };
    return (
        <div className="p-5 border rounded text-gray-500 dark:bg-stone-900 bg-white">
          <div className="flex items-center cursor-pointer" onClick={handleNamePhotoClick}>
            <img
              className="inline-flex object-cover border-2 border-orange-600 rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] shadow-orange-600/100 bg-indigo-50 text-orange-500 h-20 w-20 mr-3"
              src={photo}
              alt={name}
            />
            <div>
            <div className="flex items-center font-medium">
              <a
                href={orcidUrl || '#'}
                onClick={(e) => e.preventDefault()}
                className="font-medium leading-none text-stone-900 dark:text-white hover:text-orange-600 transition duration-500 ease-in-out mb-1"
              >
                {name}
              </a>
              {orcidUrl && (
              <span className="ml-1 relative top-[-0.3em]" title="ORCID">
                <OrcidIcon />
              </span>
            )}
            </div>
              <p>{role}</p>
              <p className="text-sm">{mail}</p>
            </div>
          </div>
    
          <p className="mx-2 mt-3 text-sm dark:text-white text-stone-900">
            {description}
          </p>

    
          <div className="flex mt-2 space-x-3">
        {Object.entries(socials).map(([platform, url]) => {
            if (!url || !icons[platform] || platform === "ORCID") return null;
            const Icon = icons[platform];
            return (
                <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-orange-500"
                aria-label={platform}
                >
                <Icon />
                </a>
          );
        })}
      </div>
        </div>
      );
}

export default Avatar