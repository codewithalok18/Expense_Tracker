import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footerUL">
        
        {/* left */}
        <div className="ulLeft">
          <li>
            <a
              className="eachPerson"
              href="https://github.com/codewithalok18"
              target="_blank"
            >
              <img
                className="gitHubLogo"
                src="images/GitHub.png"
                alt="GitHub logo"
              />
              Alok Kumar
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
