import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBootstrap, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

export default function Link({ link, class: className, sectionName, isImg, isIcon }) {
    let icon;

    switch (isIcon) {
        case "github":
            icon = faGithub;
            break;

        case "linkedin":
            icon = faLinkedin;
            break;

        case "email":
            icon = faEnvelope;
            break;

    }


    return (

        // Anchor element for navigation
        <a
            href={link}
            className={className}
            target={link.startsWith("https") ? "_blank" : "_self"}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {isImg && <img src={isImg} alt={sectionName} className="img-fluid" />}
            {icon && <FontAwesomeIcon icon={icon} size="xl" />}
            
            {sectionName}
        </a>
    );
}