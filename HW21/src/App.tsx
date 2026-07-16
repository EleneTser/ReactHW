import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Planet from "./Components/Planetspage";
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="site-header">
                <nav className="navbar">
                    <h1 className="logo">THE PLANETS</h1>

                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>

                    <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                        <li>
                            <Link
                                className="nav-link mercury"
                                to="/mercury"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">MERCURY</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link venus"
                                to="/venus"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">VENUS</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link earth"
                                to="/earth"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">EARTH</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link mars"
                                to="/mars"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">MARS</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link jupiter"
                                to="/jupiter"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">JUPITER</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link saturn"
                                to="/saturn"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">SATURN</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link uranus"
                                to="/uranus"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">URANUS</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="nav-link neptune"
                                to="/neptune"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="planet-dot"></span>
                                <span className="planet-label">NEPTUNE</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Navigate to="/mercury" replace />} />
                <Route path="/:planetName" element={<Planet />} />
            </Routes>
        </>
    );
}

export default App;