import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const ErrorFallback = () => {
  const t = useTranslation();

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16">
      <div className="w-full max-w-xl rounded-sm border border-slate-800 bg-slate-900/60 p-8 text-center shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-600">Eduardo Legal</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{t.errors.title}</h1>
        <p className="mt-4 text-sm text-slate-400 md:text-base">{t.errors.message}</p>

        <div className="mt-8 space-y-3">
          <div className="h-2 w-3/4 rounded bg-slate-800 motion-safe:animate-pulse" />
          <div className="h-2 w-5/6 rounded bg-slate-800 motion-safe:animate-pulse" />
          <div className="h-2 w-2/3 rounded bg-slate-800 motion-safe:animate-pulse" />
        </div>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-amber-700 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-amber-200 transition-colors hover:border-amber-500 hover:text-amber-100"
        >
          {t.errors.action}
        </button>
      </div>
    </section>
  );
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("EstradaLegalErrorBoundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
