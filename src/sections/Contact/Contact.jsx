import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__container container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact__content">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="contact__form"
          >
            <p className="contact__formIntro">Send a message and I’ll reply as soon as possible.</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-button"
            >
              Send Message
            </motion.button>
          </motion.form>

          <div className="contact__info">
            <h3>Contact</h3>
            <p>Prefer email or social? Reach out anytime.</p>

            <ul className="contact__list">
              <li><FiMail /> <span>devanshbansal262@gmail.com</span></li>
              <li><FiPhone /> <span>+91 8791721249</span></li>
              <li><FiMapPin /> <span>Agra, India</span></li>
            </ul>

            <div className="social-links" aria-label="Social links">
              <a href="https://github.com/coder-devansh/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/devansh-bansal-77478a27b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};