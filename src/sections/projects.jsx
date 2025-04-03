import ProjectCard from "../components/template/projectCard";

export default function ProjectSection() {
    // List of project descriptions
    const descriptions = [
        "Password Project",
        "Feed-Me Project",
        "Weather Project",
        "Admin-Panel Project"
    ];

    return (
        // Project Section Wrapper
        <section className="row block mb-7" id="projects">

            {/* Section Title */}
            <div className="col-12 d-flex flex-column align-items-center h-auto mb-6">
                <h1 className="bigFs-6">Projects:</h1>
            </div>

            {/* Mapping through projects and rendering ProjectCard components */}
            {descriptions.map((description, index) => (
                <ProjectCard key={index} description={description} />
            ))}

        </section>
    );
}
