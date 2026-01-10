function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-card">
        <p className="contact-text">
          I’m currently looking for opportunities as a Web / Frontend Developer.
          Feel free to reach out if you’d like to connect or discuss opportunities.
        </p>

        <div className="contact-info">

          {/* Email */}
          <a href="mailto:tharanigarikapati@gmail.com">
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            tharanigarikapati@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tharani-garikapati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01A2.5 2.5 0 014.98 3.5zM3 8.98h3.96V21H3zM9.5 8.98h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.5z"/>
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Garikapatitharani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 015.79 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.43-2.7 5.41-5.26 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.52 11.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
            </svg>
            GitHub
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
