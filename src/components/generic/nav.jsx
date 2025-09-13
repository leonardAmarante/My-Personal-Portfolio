import Link from "./link";

export default function Nav() {
    // Navigation links data
    const linkProperties = [
        { id: 1,  link: "#aboutMe", sectionName: "About Me" },
        { id: 2,  link: "#projects", sectionName: "Projects" },
        { id: 3,  link: "#contact", sectionName: "Contact" },
    ];

    return (
        // Navigation wrapper
        <nav className="animatedNav d-flex col-12 col-lg-6 align-items-center justify-content-center justify-content-lg-end">

            {/* Container for navigation links */}
            <div className="nav-links d-flex gap-4 me-lg-4">
                {linkProperties.map(({ id, link, sectionName }) => (
                    <Link key={id} class={"linkBlue"} link={link} sectionName={sectionName} />
                ))}
            </div>

        </nav>
    );
}