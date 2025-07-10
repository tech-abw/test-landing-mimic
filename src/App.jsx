import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Portfolio from "./pages/Portfolio";
import AISolutions from "./pages/AISolutions";
import NotFound from "./pages/NotFound";
import UXUIDesigns from "./pages/UXUIDesigns";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogArticle />} />
                        <Route path="/disclaimer" element={<Disclaimer />} />
                        <Route path="/ai-solutions" element={<AISolutions />} />
                        <Route path="/ux-ui-designs" element={<UXUIDesigns />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/cookie-policy"
                            element={<CookiePolicy />}
                        />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
