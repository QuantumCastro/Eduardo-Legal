import { AboutPreview } from "./AboutPreview";
import { Contact } from "./Contact";
import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { LanguageInitializer } from "./LanguageInitializer";
import { Navbar } from "./Navbar";
import { Services } from "./Services";
import { Stats } from "./Stats";

const LegalLanding = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-950 font-body text-slate-200 selection:bg-amber-700 selection:text-white">
        <LanguageInitializer />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <Stats />
          <AboutPreview />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default LegalLanding;
