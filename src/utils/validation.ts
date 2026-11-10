export interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot anti-spam field — should remain empty */
  website?: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = values.fullName.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters long.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please provide a subject for your message.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.';
  }

  if (!message) {
    errors.message = 'Please write your message before sending.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return errors;
}

