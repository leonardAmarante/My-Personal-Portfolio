// Importing required images and components
import passwordProjectImg from "../../assets/password-generator-img.jpg";
import adminPanelImg from "../../assets/admin-panel-project.jpg";
import feedMeImg from "../../assets/feed-me.jpg";
import weatherImg from "../../assets/weather-project.jpg";
import SpanCard from "../generic/spanCard";

// ProjectCard component that displays a project with related technologies and an image
export default function ProjectCard(props) {
    // Declare variables for span names, project image, and project URL
    let spanName;
    let projectImg;
    let projectUrl;

    // Switch case to assign values based on the project description
    switch (props.description) {
        case "Password Generator":
            spanName = ["Html", "Css", "Javascript"]; // Technologies used
            projectImg = passwordProjectImg; // Project image
            projectUrl = "https://leonardamarante.github.io/Password-Generator/"; // Project URL
            break;

        case "Feed-Me":
            spanName = ["Html", "Css", "Javascript"]; // Technologies used
            projectImg = feedMeImg; // Project image
            projectUrl = "https://alexbrandt.net/Project-01--Feed.me";
            break;

        case "Weather Finder":
            spanName = ["Html", "Css", "Javascript", "Boostrap"]; // Technologies used
            projectImg = weatherImg; // Project image
            projectUrl = "https://leonardamarante04.github.io/Weather-Finder/"; // Project URL
            break;

        case "Admin-Panel Inapi":
            spanName = ["Html", "Css", "Javascript", "Boostrap", "ReactJs"]; // Technologies used
            projectImg = adminPanelImg; // Project image
            projectUrl = "#"; // Project URL
            break;

        default:
            spanName = ["Html", "Css", "Javascript"]; // Default technologies
    }

    // Create an array of SpanCard components based on the technologies used
    const allSpanCards = spanName.map((name, index) => {
        return (
            <SpanCard key={index} text={name} /> // Render SpanCard for each technology
        );
    });

    // Return the JSX for the ProjectCard component
    return (
        <div className="col-12 col-md-3 col-lg-3 mb-6 text-center">
            <p className="fs-4 pe-0 pe-lg-5 text-white mb-2">{props.description}:</p> {/* Display project description */}
            <div className="project-background">
                <a href={projectUrl} target="blank_" aria-label={`View ${props.description}`}>
                    <img className="img-fluid" src={projectImg} alt={`${props.description} image`} />
                </a>
                {/* Render the technology span cards */}
                <div className="span-cards">
                    {allSpanCards}
                </div>
            </div>
        </div>
    );
}