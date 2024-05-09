import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center", padding: "20px" }}>
          
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://lydiasPianoStudio.com"}
            >
              <span style={{ textDecoration: "underline" }}></span>
            </Link>
          </span>
          💻🤖 MERN CHATBOT 💻🤖
        </p>
      </div>
    </footer>
  );
};

export default Footer;