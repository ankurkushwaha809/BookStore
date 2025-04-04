import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#1a202c",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            margin: 0,
            position: "relative",
        }}>
            <style>
                {`
                    @keyframes flicker {
                        0% { opacity: 0.2; }
                        50% { opacity: 1; }
                        100% { opacity: 0.2; }
                    }
                    .lamp-glow {
                        animation: flicker 1.5s infinite ease-in-out;
                    }
                `}
            </style>
            <div style={{
                position: "relative",
                width: "40px",
                height: "80px",
                backgroundColor: "#4a5568",
                borderRadius: "20px 20px 0 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
            }}>
                <div className="lamp-glow" style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#f6e05e",
                    borderRadius: "50%",
                }}></div>
            </div>
            <h1 style={{ fontSize: "50px", fontWeight: "bold", marginTop: "20px" }}>404</h1>
            <p style={{ fontSize: "18px", color: "#cbd5e0", marginTop: "10px" }}>
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/" style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#3182ce",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#2b6cb0"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#3182ce"}
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;