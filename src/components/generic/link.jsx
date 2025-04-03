export default function Link({ link, class: className, sectionName }) {
    return (
        // Anchor element for navigation
        <a 
            href={link} 
            className={className} 
            target={link.startsWith("http") ? "_blank" : "_self"} 
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {sectionName}
        </a>
    );
}