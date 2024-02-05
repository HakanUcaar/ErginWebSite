import "./App.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import FacePage from "./pages/services/face";
import BodyPage from "./pages/services/body";
import BreastProducedures from "./pages/services/breast/BreastProducedures";

import { PrimeReactProvider } from "primereact/api";
const App = () => {
  return (
    <PrimeReactProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>} />
            <Route exact path="home" element={<HomePage></HomePage>} />
            <Route path="contact" element={<ContactPage></ContactPage>} />
            <Route path="about" element={<AboutPage></AboutPage>} />
            <Route path="services">
              <Route path="body" element={<BodyPage></BodyPage>} />
              <Route path="face" element={<FacePage></FacePage>} />
              <Route path="breast" element={<BreastProducedures></BreastProducedures>} />
            </Route>
          </Routes>
        </MainLayout>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;
