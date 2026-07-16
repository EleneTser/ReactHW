import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data.json";
import "./Planetspage.css";
import Shape from "../assets/Shape.png";

type ImageType = "planet" | "internal" | "geology";

function Planet() {
    const [activeImage, setActiveImage] = useState<ImageType>("planet");
    const { planetName } = useParams();

    const planet = data.find((el) => el.name.toLowerCase() === planetName);

    if (!planet) {
        return <h2>Planet not found</h2>;
    }

    return (
        <div className="planet-container">
            <div className="main-content">
                <div className="image-section">
                    {activeImage === "geology" ? (
                        <div className="planet-image-wrapper">
                            <img
                                className="planet-image"
                                src={planet.images.planet}
                                alt={planet.name}
                            />
                            <img
                                className="geology-image"
                                src={planet.images.geology}
                                alt="geology"
                            />
                        </div>
                    ) : (
                        <img
                            className="planet-image"
                            src={planet.images[activeImage]}
                            alt={planet.name}
                        />
                    )}
                </div>

                <h1>{planet.name}</h1>

                <p className="Info">{planet.overview.content}</p>

                <div className="source">
                    <span>Source:</span>
                    <a href={planet.overview.source} target="_blank" rel="noreferrer">
                        Wikipedia
                    </a>
                    <img src={Shape} alt="External link" className="link-Icon" />
                </div>

                <div className="Image-Buttons">
                    <button
                        className={`Imagebtn ${planet.name.toLowerCase()} ${activeImage === "planet" ? "active" : ""}`}
                        onClick={() => setActiveImage("planet")}
                    >
                        <span>01</span> OVERVIEW
                    </button>

                    <button
                        className={`Imagebtn ${planet.name.toLowerCase()} ${activeImage === "internal" ? "active" : ""}`}
                        onClick={() => setActiveImage("internal")}
                    >
                        <span>02</span> INTERNAL STRUCTURE
                    </button>

                    <button
                        className={`Imagebtn ${planet.name.toLowerCase()} ${activeImage === "geology" ? "active" : ""}`}
                        onClick={() => setActiveImage("geology")}
                    >
                        <span>03</span> SURFACE GEOLOGY
                    </button>
                </div>
            </div>

            <div className="planet-stats">
                <div className="stat-card">
                    <p className="stat-label">ROTATION TIME</p>
                    <h2 className="stat-value">{planet.rotation}</h2>
                </div>

                <div className="stat-card">
                    <p className="stat-label">REVOLUTION TIME</p>
                    <h2 className="stat-value">{planet.revolution}</h2>
                </div>

                <div className="stat-card">
                    <p className="stat-label">RADIUS</p>
                    <h2 className="stat-value">{planet.radius}</h2>
                </div>

                <div className="stat-card">
                    <p className="stat-label">AVERAGE TEMP.</p>
                    <h2 className="stat-value">{planet.temperature}</h2>
                </div>
            </div>
        </div>
    );
}

export default Planet;