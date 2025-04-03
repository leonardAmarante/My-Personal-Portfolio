import profileImg from "../assets/leonard-amarante.jpg";

export default function AboutMe() {
    return (
        // About Me Section
        <section className="row ms-lg-2 animatedAbout mb-6" id="aboutMe">

            {/* Left Content - About Me Text */}
            <div className="animationAboutMe about-me-content col-lg-7 d-flex flex-column align-items-center align-items-lg-start mb-5">

                {/* Section Title */}
                <h4 className="mb-5 bigFs-6 fw-bold ms-lg-0">About Me:</h4>

                {/* Introduction */}
                <p>
                    <span className="fw-bold me-2 text-light">Hi, I'm Leonard Amarante Guzman!</span>
                    A 20-year-old front-end web developer specializing in building clean, functional interfaces.
                    With 1 year of experience in dashboards and dynamic user interfaces.
                </p>

                {/* Background & Education */}
                <p>
                    <span className="fw-bold me-2 text-light">I gained my skills</span>
                    through the UNC Charlotte Bootcamp, where I mastered modern frameworks and best practices in
                    responsive design. Passionate about turning ideas into seamless digital experiences, I focus on
                    performance, accessibility, and intuitive UX.
                </p>

                {/* Hobbies */}
                <p>
                    <span className="fw-bold me-2 text-light">My hobbies include</span>
                    exploring new tech trends, working on personal projects, going to the gym for personal growth,
                    and playing video games.
                </p>

                {/* Technical Skills */}
                <p>
                    <span className="fw-bold me-2 text-light">Skills:</span>
                    • HTML/CSS • JavaScript • React.js • Bootstrap • jQuery
                </p>

                {/* Currently Learning */}
                <p>
                    <span className="fw-bold me-1 text-light">Currently Learning:</span>
                    • TypeScript • Node.js
                </p>
            </div>

            {/* Right Content - Profile Image */}
            <div className="col-lg-5 d-flex justify-content-center align-items-center personal-img-holder">
                <img className="img-fluid" src={profileImg} alt="Leonard Amarante Picture" />
            </div>

        </section>
    );
}