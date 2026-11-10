import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { NAV_ITEMS } from './config/site';
import { profileData } from './data/profile';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Toast } from './components/ui/Toast';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { EducationSection } from './sections/EducationSection';
import { HeroSection } from './sections/HeroSection';
import { InterestsSection } from './sections/InterestsSection';
import { NotFoundPage } from './sections/NotFoundPage';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS, 'home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 5500);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  const handleUnconfiguredSocial = useCallback(
    (platform: string) => {
      showToast(
        `${platform} profile URL is not configured yet. Set VITE_${platform.toUpperCase()}_URL in .env.local or Vercel Environment Variables.`,
      );
    },
    [showToast],
  );

  const handlePendingProjectLink = useCallback(
    (label: string, projectTitle: string) => {
      showToast(
        `${label} for "${projectTitle}" is currently a placeholder. Add the verified repository URL in src/data/projects.ts.`,
      );
    },
    [showToast],
  );

  const handleCvDownload = useCallback(() => {
    showToast(`Downloading ${profileData.contact.cvDownloadName}...`);
  }, [showToast]);

  const isRootPath = pathname === '/' || pathname === '/index.html';

  const handleNavigateHome = useCallback(() => {
    if (!isRootPath) {
      window.history.pushState({}, '', '/');
      setPathname('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isRootPath]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070B14] dark:text-slate-100">
        <div
          aria-hidden="true"
          className="bg-tech-grid pointer-events-none fixed inset-0 z-0 opacity-60 dark:opacity-100"
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar
            activeSection={activeSection}
            theme={theme}
            onToggleTheme={toggleTheme}
            onNavigateHome={!isRootPath ? handleNavigateHome : undefined}
            onCvDownload={handleCvDownload}
          />

          {isRootPath ? (
            <main id="main-content" className="flex-1">
              <HeroSection
                onUnconfiguredSocial={handleUnconfiguredSocial}
                onCvDownload={handleCvDownload}
              />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection onPendingLinkClick={handlePendingProjectLink} />
              <EducationSection />
              <InterestsSection />
              <ContactSection
                onUnconfiguredSocial={handleUnconfiguredSocial}
                onNotify={showToast}
              />
            </main>
          ) : (
            <NotFoundPage path={pathname} onGoHome={handleNavigateHome} />
          )}

          <Footer onUnconfiguredSocial={handleUnconfiguredSocial} />
        </div>

        <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
      </div>
    </MotionConfig>
  );
}

export default App;

