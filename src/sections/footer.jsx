import Link from "../components/generic/link";

export default function Footer() {

    return (
        <footer className="row text-center bg-black d-flex justify-content-center align-items-center">
            <div className="col-12 fs-4 fw-bold mb-3">
                <h3>
                    Social Networks:
                </h3>
            </div>
            <div className="icon-holder col-4">
                <Link link="https://github.com/leonardAmarante" isIcon="github" />
            </div>
            <div className="icon-holder col-4">
                <Link link="https://www.linkedin.com/in/leonard-amarante-46a06b359/" isIcon="linkedin" />
            </div>
            <div className="icon-holder col-4">
                <Link link="mailto:leonardamarante32@gmail.com" isIcon="email" />
            </div>
            <div className="col-12 mt-4">
                <p>Created with <span className="text-info">React</span> using <span className="text-purple">vite!</span></p>
            </div>

        </footer>

    )
}