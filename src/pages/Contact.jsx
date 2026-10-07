function Contact() {
  return (
    <section className="page">

      <div className="page-heading">
        <h1>Get In Touch</h1>
        <p>
          Feel free to reach out for opportunities,
          collaborations or just a friendly hello!
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>
                avinashthakur8308@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <div>
              <h3>Phone</h3>
              <p>
                +91 9821638615
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>
                Noida, Uttar Pradesh
              </p>
            </div>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="form-row">

            <input
              type="text"
              placeholder="Your name"
            />

            <input
              type="email"
              placeholder="Your email"
            />

          </div>

          <textarea
            placeholder="Your message..."
            rows="7"
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;