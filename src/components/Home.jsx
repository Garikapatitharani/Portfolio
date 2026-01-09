import profile from "../assets/profile/profile.jpg"

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-card hero-profile">

        <img
          src={profile}
          alt="Tharani Garikapati"
          className="profile-image"
        />

        <h1>
          Hi, I'm <span>Tharani Garikapati</span>
        </h1>

        <p>
          Frontend-focused Web Developer building modern, responsive
          web applications using React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/resume/Tharani_Garikapati_Resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home
