import { zodResolver } from "@hookform/resolvers/zod";
import type { FormEvent } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { contactInfo } from "../../data/estrada-legal";
import { useTranslation } from "../../hooks/useTranslation";
import { contactFormSchema, type ContactFormValues } from "../../lib/contact-form";
import { FadeIn } from "./FadeIn";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

type FormStatus = "idle" | "submitting" | "submitted";

const ContactForm = () => {
  const t = useTranslation();
  const [status, setStatus] = useState<FormStatus>("idle");
  const timerRef = useRef<number | null>(null);
  const nameId = useId();
  const emailId = useId();
  const detailsId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const isSubmitting = status === "submitting";

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onSubmit = useCallback(() => {
    setStatus("submitting");

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setStatus("submitted");
      reset();
    }, 900);
  }, [reset]);

  const onSubmitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      void handleSubmit(onSubmit)(event);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      noValidate
      className="relative border border-slate-800 bg-slate-950 p-8 shadow-2xl"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor={nameId}
            className="mb-2 block text-xs uppercase tracking-wider text-slate-500"
          >
            {t.contact.formName}
          </label>
          <input
            type="text"
            id={nameId}
            placeholder={t.contact.placeholderName}
            autoComplete="name"
            className={`w-full border bg-slate-900 p-4 text-slate-200 transition-colors focus:outline-none ${
              errors.name ? "border-amber-600" : "border-slate-800 focus:border-amber-700"
            }`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id={`${nameId}-error`} className="mt-2 text-xs text-amber-400">
              {t.contact.formErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-2 block text-xs uppercase tracking-wider text-slate-500"
          >
            {t.contact.formEmail}
          </label>
          <input
            type="email"
            id={emailId}
            placeholder={t.contact.placeholderEmail}
            autoComplete="email"
            className={`w-full border bg-slate-900 p-4 text-slate-200 transition-colors focus:outline-none ${
              errors.email ? "border-amber-600" : "border-slate-800 focus:border-amber-700"
            }`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className="mt-2 text-xs text-amber-400">
              {t.contact.formErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor={detailsId}
            className="mb-2 block text-xs uppercase tracking-wider text-slate-500"
          >
            {t.contact.formDetails}
          </label>
          <textarea
            rows={4}
            id={detailsId}
            placeholder={t.contact.placeholderDetails}
            className={`w-full resize-none border bg-slate-900 p-4 text-slate-200 transition-colors focus:outline-none ${
              errors.details ? "border-amber-600" : "border-slate-800 focus:border-amber-700"
            }`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? `${detailsId}-error` : undefined}
            {...register("details")}
          />
          {errors.details ? (
            <p id={`${detailsId}-error`} className="mt-2 text-xs text-amber-400">
              {t.contact.formErrors.details}
            </p>
          ) : null}
        </div>

        {isSubmitting ? (
          <div className="space-y-3">
            <div className="h-2 w-3/4 rounded bg-slate-800 motion-safe:animate-pulse" />
            <div className="h-2 w-2/3 rounded bg-slate-800 motion-safe:animate-pulse" />
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-700 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-600 disabled:cursor-wait disabled:bg-amber-800"
        >
          {isSubmitting ? t.contact.formSubmitting : t.contact.formButton}
        </button>

        {status === "submitted" ? (
          <div
            role="status"
            aria-live="polite"
            className="rounded-sm border border-amber-700/40 bg-amber-900/10 p-4 text-sm text-amber-200"
          >
            <p className="font-semibold uppercase tracking-widest">{t.contact.formSuccessTitle}</p>
            <p className="mt-2 text-xs text-amber-200/80">{t.contact.formSuccessMessage}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export const Contact = () => {
  const t = useTranslation();

  return (
    <section
      id="contact"
      className="relative bg-slate-900 pb-8 pt-24"
      aria-labelledby="contact-title"
    >
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-slate-950/50 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <FadeIn>
              <h2 id="contact-title" className="font-display text-4xl text-slate-100">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-slate-400">{t.contact.subtitle}</p>
            </FadeIn>

            <FadeIn delayMs={200}>
              <address className="space-y-6 not-italic">
                <div className="flex items-start gap-4">
                  <div className="rounded-sm bg-slate-800 p-3 text-amber-600">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{t.contact.office}</h4>
                    <p className="text-sm text-slate-400">{contactInfo.address}</p>
                    <p className="text-sm text-slate-400">{contactInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-sm bg-slate-800 p-3 text-amber-600">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{t.contact.email}</h4>
                    <p className="text-sm text-slate-400">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="transition-colors hover:text-amber-200"
                        aria-label={t.contact.email}
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{t.contact.response}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-sm bg-slate-800 p-3 text-amber-600">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{t.contact.phone}</h4>
                    <p className="text-sm text-slate-400">
                      <a
                        href={`tel:${contactInfo.phone.replace(/[^+\\d]/g, "")}`}
                        className="transition-colors hover:text-amber-200"
                        aria-label={t.contact.phone}
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </address>
            </FadeIn>
          </div>

          <FadeIn delayMs={300} direction="left">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
