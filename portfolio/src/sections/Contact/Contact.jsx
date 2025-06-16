import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact__content">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="contact__form"
          >
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
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through these channels:</p>
            <ul>
              <li>Email: devanshbansal262@gmail.com</li>
              <li>8791721249</li>
              <li>Location:Agra</li>
            </ul>
            <div className="social-links">
              <a href="https://github.com/coder-devansh/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/devansh-bansal-77478a27b/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.jpg" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};