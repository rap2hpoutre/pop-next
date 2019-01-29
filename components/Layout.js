import Meta from "./Meta";
import Footer from "./Footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default ({ children }) => (
  <div>
    <Meta />
    <Header />
    {children}
    <Footer />
  </div>
);
