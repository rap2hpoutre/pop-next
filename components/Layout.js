import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default ({ children }) => (
  <div>
    <Header />
    <ScrollToTop />
    {children}
    <Footer />
  </div>
);
