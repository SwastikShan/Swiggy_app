import React from "react";


export const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 Food Villa by Ashutosh.
                All rights reserved.</p>
            <div className="social-icons">
                <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};
