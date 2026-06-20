import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/backToTop/BackToTop";

export default function MainLayout() {
    const { pathname } = useLocation()

    return (
        <>
            <div className="app-shell">

                <a href="#main-content" className="skip-link">
                    Skip to content
                </a>

                <ScrollToTop />
                <Header />

                <main id="main-content" key={pathname} className="page-transition">
                    <Outlet />
                </main>

                <Footer />
                <BackToTop />
            </div>
        </>
    )
}
