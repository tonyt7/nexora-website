import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const solutions = [
  {
    value: 'networking',
    label: 'Networking & Structured Cabling',
  },
  {
    value: 'fiber',
    label: 'Fiber Optic Solutions',
  },
  {
    value: 'telecom',
    label: 'Telecom & IP Communication',
  },
  {
    value: 'security',
    label: 'CCTV & Security',
  },
  {
    value: 'elv',
    label: 'ELV Systems',
  },
  {
    value: 'maintenance',
    label: 'Maintenance & Support',
  },
  {
    value: 'general',
    label: 'General Enquiry',
  },
];

const initialFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  solution: '',
  message: '',
};

function ContactForm() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => {
    const requestedSolution = searchParams.get('solution');

    const validSolution = solutions.some(
      (solution) => solution.value === requestedSolution,
    );

    return {
      ...initialFormData,
      solution: validSolution ? requestedSolution : '',
    };
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form submission service will be connected here.
    setSubmitted(true);
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__grid">
        {/* Name */}
        <div className="contact-form__field">
          <label htmlFor="contact-name">
            Name
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>

        {/* Company */}
        <div className="contact-form__field">
          <label htmlFor="contact-company">
            Company / Organisation
          </label>

          <input
            id="contact-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Company name"
          />
        </div>

        {/* Email */}
        <div className="contact-form__field">
          <label htmlFor="contact-email">
            Email
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="name@company.com"
            required
          />
        </div>

        {/* Phone */}
        <div className="contact-form__field">
          <label htmlFor="contact-phone">
            Phone
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+965"
          />
        </div>

        {/* Solution */}
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-solution">
            I&apos;m interested in
          </label>

          <div className="contact-form__select">
            <select
              id="contact-solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
            >
              <option value="">
                Select a solution
              </option>

              {solutions.map((solution) => (
                <option
                  key={solution.value}
                  value={solution.value}
                >
                  {solution.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-message">
            Tell us about your project
            <span aria-hidden="true">*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Tell us briefly about your requirements, site, project or the support you need..."
            required
          />
        </div>
      </div>

      {/* Form footer */}
      <div className="contact-form__footer">
        <p>
          <span>*</span>
          Required fields
        </p>

        <button
          className="contact-form__submit"
          type="submit"
        >
          <span>Send Enquiry</span>

          <span
            className="contact-form__submit-arrow"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      {/* Temporary submission state */}
      {submitted && (
        <div
          className="contact-form__notice"
          role="status"
        >
          <span aria-hidden="true">
            ✓
          </span>

          <p>
            <strong>Form ready.</strong>
            Submission handling still needs to be connected.
          </p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;