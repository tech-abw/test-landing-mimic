import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Importaciones de páginas y componentes
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Portfolio from './pages/Portfolio';
import AISolutions from './pages/AISolutions';
import UXUIDesigns from './pages/UXUIDesigns';
import WESolutions from './pages/WESolutions';
import TSolutions from './pages/TailoredSolutions';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Consulting from './pages/Consulting';


// Layout de la página
const Layout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
);

// Objeto que mapea claves de ruta a componentes
const pages = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    blog: <Blog />,
    'blog/:id': <BlogArticle />,
    disclaimer: <Disclaimer />,
    'ai-solutions': <AISolutions />,
    'ux-ui-designs': <UXUIDesigns />,
    'website-ecommerce-solutions': <WESolutions />,
    'tailored-solutions': <TSolutions />,
    'privacy-policy': <PrivacyPolicy />,
    'cookie-policy': <CookiePolicy />,
    portfolio: <Portfolio />,
    consulting: <Consulting />,
    
};

// Componente que maneja la sincronización de idioma y renderiza las rutas localizadas
function LocalizedRoutes() {
    const { i18n, t } = useTranslation();
    const { lng } = useParams();

    // Sincroniza el idioma de i18next con el parámetro de la URL
    useEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng, i18n]);

    // **CORRECCIÓN CRÍTICA**: No renderizar las rutas hasta que el idioma esté sincronizado.
    // Esto le da tiempo a i18next para cargar las traducciones después del cambio de URL.
    if (i18n.language !== lng) {
        return null; // Muestra una página en blanco momentáneamente en lugar de un 404
    }

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={pages.home} />
                {Object.keys(pages).map((key) => {
                    if (key === 'home') return null;
                    
                    const pathKey = key.replace('/:id', '');
                    const translatedPath = t(`routes.${pathKey}`);
                    
                    if (!translatedPath || translatedPath.startsWith('routes.')) return null;

                    const finalPath = key.includes('/:id') ? `${translatedPath}/:id` : translatedPath;

                    return <Route key={key} path={finalPath} element={pages[key]} />;
                })}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

// Componente raíz que configura el enrutador principal
export default function AppContainer() {
    const { i18n } = useTranslation();

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to={`/${i18n.language.split('-')[0]}`} replace />} />
                <Route path="/:lng/*" element={<LocalizedRoutes />} />
            </Routes>
        </BrowserRouter>
    );
}
