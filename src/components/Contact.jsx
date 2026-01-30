import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bmtixv8",
      "template_lnxbeyo",  
      form.current,
      "Qqz4xkTqNIYj6-j7W"  
    ).then(
      (result) => {
      console.log("SUCCESS:", result.text);
      alert("Message sent successfully!");
    },
      (error) => {
        alert("Failed to send message.");
        console.log(error);
      }
    );

    e.target.reset();
  };
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-card">
        <p className="contact-text">
          I’m currently looking for opportunities as a Web / Frontend Developer.
          Feel free to reach out if you’d like to connect or discuss opportunities.
        </p>

        {/* ===== CONTACT FORM ===== */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">          
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@gmail.com" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        {/* ===== CONTACT LINKS ===== */}
        <div className="contact-info">
        <h4> or reach out directly:</h4>

          {/* Email */}
          <div className="links-row">
            <a href="mailto:tharanigarikapati@gmail.com">📧 Email</a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/tharani-garikapati"
              target="_blank"
              rel="noopener noreferrer"
            >
               🔗 LinkedIn
            </a>
            <span>|</span>
            <a
             href="https://github.com/Garikapatitharani"
             target="_blank"
             rel="noopener noreferrer"
            >
             💻 GitHub
            </a>
         </div>
       </div>

      </div>
    </section>
  );
}

export default Contact;
