import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import MaskedCaptions from "./components/MaskedCaptions";
import NavContextProvider from "./contexts/NavContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import AntiBumperCar from "./components/AntiBumperCar";
import YelpCamp from "./components/YelpCamp";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <NavContextProvider>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/masked-captions" component={MaskedCaptions} />
            <Route path="/anti-bumper-car" component={AntiBumperCar} />
            <Route path="/yelpcamp" component={YelpCamp} />
            <Route path="/" component={Main} />
          </Switch>
        </AnimatePresence>
      </NavContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
