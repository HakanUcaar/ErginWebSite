import "./App.scss";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/themes/md-light-indigo/theme.css";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Layout from "./layout/layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import BreastPage from "./pages/procedures/breast";

const App = () => {
  return (
    <PrimeReactProvider>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="home" element={<HomePage />} />
            <Route exact path="contact" element={<ContactPage />} />
            <Route exact path="about" element={<AboutPage />} />
            <Route exact path="procedure/breast" element={<BreastPage />} />
            
          </Routes>
        </Layout>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;
