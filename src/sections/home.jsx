import Nav from "../components/generic/nav";

export default function Home() {
    return (
        // Header Section (Home Section)
        <header 
            className="sticky-div row pb-3 pb-lg-0 mb-6 align-items-center bg-full-dark" 
            id="home"
        >
            {/* Title Section (Left Side) */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start mb-3">
                <div className="ms-lg-5 fs-2">
                    <h1 className="animatedTitle">Portfolio</h1>
                </div>
            </div>

            {/* Navigation Component (Right Side) */}
            <Nav />
        </header>
    );
}