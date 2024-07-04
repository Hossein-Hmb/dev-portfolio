import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styling/Header.css";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Hossein-Hmb", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hossein-hajmirbaba/",
    icon: FaLinkedin,
  },
  {
    name: "YouTube",
    url: "http://www.youtube.com/@HosseinTechVideos",
    icon: FaYoutube,
  },
  { name: "X", url: "https://x.com/hosseinhmb", icon: FaXTwitter },
];

function Header() {
  return (
    <nav>
      <h1>Hossein Hajmirbaba</h1>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
