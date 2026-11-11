import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Info,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { profileData } from '../data/profile';
import {
  type ContactFormErrors,
  type ContactFormValues,
  validateContactForm,
} from '../utils/validation';
import { cn } from '../utils/cn';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';

interface ContactSectionProps {
  onUnconfiguredSocial: (platform: string) => void;
  onNotify: (message: string) => void;
}

type SubmitState = 'idle' | 'submitting' | 'sent' | 'endpoint-missing' | 'error';

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export function ContactSection({ onUnconfiguredSocial, onNotify }: ContactSectionProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isEndpointConfigured = Boolean(siteConfig.contactFormEndpoint);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (submitState === 'sent' || submitState === 'error') {
      setSubmitState('idle');
      setSubmitErrorMsg('');
    }

    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormValues];
        return next;
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopiedEmail(true);
      onNotify(
        profileData.contact.isEmailPlaceholder
          ? 'Placeholder email copied. Update VITE_CONTACT_EMAIL in .env.local with your actual email.'
          : 'Email address copied to clipboard.',
      );
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      onNotify('Unable to copy automatically — please copy the address manually.');
    }
  };

  const handleCopyDraft = async () => {
    const formatted = [
      `Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Subject: ${values.subject.trim()}`,
      '',
      values.message.trim(),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(formatted);
      onNotify('Your formatted message has been copied to the clipboard.');
    } catch {
      onNotify('Unable to copy automatically — please copy your message manually.');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot check: ignore automated bot submissions quietly
    if (values.website && values.website.trim().length > 0) {
      return;
    }

    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!isEndpointConfigured) {
      setSubmitState('endpoint-missing');
      return;
    }

    setSubmitState('submitting');
    setSubmitErrorMsg('');

    try {
      const payload: Record<string, string> = {
        name: values.fullName.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      };

      if (siteConfig.contactFormEndpoint.includes('formsubmit.co')) {
        payload._subject = `Portfolio Inquiry: ${values.subject.trim()}`;
        payload._replyto = values.email.trim();
      }

      if (siteConfig.web3FormsAccessKey) {
        payload.access_key = siteConfig.web3FormsAccessKey;
      }

      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = (await response.json().catch(() => null)) as {
        success?: boolean | string;
        ok?: boolean;
        message?: string;
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          responseData?.message ||
            responseData?.error ||
            `Submission failed with status ${response.status}.`,
        );
      }

      if (
        responseData &&
        (responseData.success === false ||
          responseData.success === 'false' ||
          responseData.ok === false)
      ) {
        throw new Error(
          responseData.message ||
            responseData.error ||
            'The form service could not complete delivery right now.',
        );
      }

      setSubmitState('sent');
      setValues(INITIAL_VALUES);
      setErrors({});
      onNotify('Your message has been sent successfully.');
    } catch (error) {
      setSubmitState('error');
      setSubmitErrorMsg(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while sending your message.',
      );
    }
  };

  const mailtoHref = !profileData.contact.isEmailPlaceholder
    ? `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
        values.subject.trim() || 'Portfolio Inquiry',
      )}&body=${encodeURIComponent(
        `From: ${values.fullName.trim()} (${values.email.trim()})\n\n${values.message.trim()}`,
      )}`
    : null;

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Get in Touch"
          description="Open to discussing software engineering, AI/ML research collaborations, academic projects, or technical roles."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.4 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs dark:border-slate-800/90 dark:bg-[#0D1425]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Direct Channels
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Connect directly via email or inspect my public engineering profiles.
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-[#080E1D]">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        Email
                      </p>
                      {profileData.contact.isEmailPlaceholder ? (
                        <p className="truncate text-xs font-medium text-slate-700 dark:text-slate-200">
                          {profileData.contact.email}
                        </p>
                      ) : (
                        <a
                          href={`mailto:${profileData.contact.email}`}
                          className="block truncate text-xs font-medium text-slate-800 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                        >
                          {profileData.contact.email}
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-sky-300 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {profileData.contact.location && (
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-[#080E1D]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/25 bg-sky-500/10 text-sky-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-400">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        Location
                      </p>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {profileData.contact.location}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-3">
                  {profileData.contact.githubUrl ? (
                    <a
                      href={profileData.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-800 dark:bg-[#080E1D] dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
                    >
                      <Github className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                      GitHub
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onUnconfiguredSocial('GitHub')}
                      className="flex items-center gap-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-3 text-xs font-medium text-slate-600 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-[#080E1D] dark:text-slate-300 dark:hover:border-sky-400/40 cursor-pointer"
                    >
                      <Github className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                      GitHub (Setup)
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-500/25 bg-sky-500/5 p-5 dark:border-sky-400/20 dark:bg-sky-400/5">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
                <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {isEndpointConfigured
                      ? 'Direct Form Delivery Active'
                      : 'Contact Form Integration Ready'}
                  </p>
                  <p className="mt-1">
                    {isEndpointConfigured ? (
                      siteConfig.isCustomContactEndpoint ? (
                        'Submissions are sent directly to the configured contact form endpoint.'
                      ) : (
                        <>
                          Validated messages are sent directly to{' '}
                          <span className="font-medium text-slate-800 dark:text-slate-200">
                            {profileData.contact.email}
                          </span>
                          .
                        </>
                      )
                    ) : (
                      <>
                        Set <code className="font-mono text-sky-600 dark:text-sky-400">VITE_CONTACT_FORM_ENDPOINT</code> (e.g., Formspree or Web3Forms) in <code className="font-mono">.env.local</code> or Vercel Environment Variables to enable direct delivery.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs sm:p-7 dark:border-slate-800/90 dark:bg-[#0D1425]"
            >
              {/* Hidden honeypot field for basic spam mitigation */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                  >
                    Full Name <span className="text-sky-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={values.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={cn(
                      'mt-1.5 w-full rounded-xl border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:bg-[#080E1D] dark:text-white dark:placeholder:text-slate-500',
                      errors.fullName
                        ? 'border-rose-500 dark:border-rose-500/80'
                        : 'border-slate-200 dark:border-slate-800',
                    )}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      role="alert"
                      className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                  >
                    Email Address <span className="text-sky-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@organization.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cn(
                      'mt-1.5 w-full rounded-xl border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:bg-[#080E1D] dark:text-white dark:placeholder:text-slate-500',
                      errors.email
                        ? 'border-rose-500 dark:border-rose-500/80'
                        : 'border-slate-200 dark:border-slate-800',
                    )}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                >
                  Subject <span className="text-sky-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project collaboration, role inquiry, or research discussion"
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={cn(
                    'mt-1.5 w-full rounded-xl border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:bg-[#080E1D] dark:text-white dark:placeholder:text-slate-500',
                    errors.subject
                      ? 'border-rose-500 dark:border-rose-500/80'
                      : 'border-slate-200 dark:border-slate-800',
                  )}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                >
                  Message <span className="text-sky-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share context about your inquiry, team, or project..."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(
                    'mt-1.5 w-full resize-y rounded-xl border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:bg-[#080E1D] dark:text-white dark:placeholder:text-slate-500',
                    errors.message
                      ? 'border-rose-500 dark:border-rose-500/80'
                      : 'border-slate-200 dark:border-slate-800',
                  )}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-1.5 text-xs text-rose-600 dark:text-rose-400"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {submitState === 'sent' && (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-800 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>
                    Thank you! Your message has been submitted successfully. I will respond as
                    soon as possible.
                  </p>
                </div>
              )}

              {submitState === 'endpoint-missing' && (
                <div
                  role="status"
                  className="mt-5 space-y-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-100"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <div>
                      <p className="font-semibold">
                        Form endpoint is not configured yet — message was not sent automatically.
                      </p>
                      <p className="mt-1 leading-relaxed opacity-90">
                        Your input passed validation. To enable automated form delivery, set{' '}
                        <code className="font-mono">VITE_CONTACT_FORM_ENDPOINT</code> (e.g.,
                        Formspree or Web3Forms) in <code className="font-mono">.env.local</code>.
                        In the meantime, you can copy your formatted draft or launch your email
                        client directly:
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    <Button type="button" variant="outline" size="sm" onClick={handleCopyDraft}>
                      <Copy className="h-3.5 w-3.5" />
                      Copy Message
                    </Button>
                    {mailtoHref && (
                      <Button href={mailtoHref} variant="primary" size="sm">
                        <Mail className="h-3.5 w-3.5" />
                        Open Email App
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {submitState === 'error' && (
                <div
                  role="alert"
                  className="mt-5 space-y-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-800 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-200"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p className="leading-relaxed">
                      {submitErrorMsg || 'Could not deliver message. Please try again or email directly.'}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    <Button type="button" variant="outline" size="sm" onClick={handleCopyDraft}>
                      <Copy className="h-3.5 w-3.5" />
                      Copy Message
                    </Button>
                    {mailtoHref && (
                      <Button href={mailtoHref} variant="primary" size="sm">
                        <Mail className="h-3.5 w-3.5" />
                        Open Email App
                      </Button>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Fields marked <span className="text-sky-500">*</span> are required.
                </p>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={submitState === 'submitting'}
                >
                  <Send className="h-4 w-4" />
                  {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

