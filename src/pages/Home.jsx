import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

function Home() {
  return (
    <section className="page home-page">
      <div className="home-text">
        <p className="small-title">Hello, I'm</p>

        <h1>
          Avinash <span>Thakur</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="description">
          I'm a B.Tech CSE student at MIET Greater Noida (2027 batch). I love
          building web applications, solving problems and turning ideas into
          real-world solutions.
        </p>

        <div className="home-buttons">
          <a href="/projects" className="primary-btn">
            View Projects
          </a>
          <a href="/contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
            {/* <span>GitHub</span> */}
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
            {/* <span>LinkedIn</span> */}
          </a>

          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
            {/* <span>Instagram</span> */}
          </a>

          <a href="mailto:youremail@gmail.com">
            <Mail size={20} />
            {/* <span>Email</span> */}
          </a>
        </div>
      </div>

      <div className="home-image">
        <div className="profile-circle">
          <img src="/Profile.jpeg" alt="Avinash Thakur" />
        </div>
      </div>
    </section>
  );
}

export default Home;