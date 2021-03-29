import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import MaskedCaptions from "./components/MaskedCaptions";
import NavContextProvider from "./contexts/NavContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import AntiBumperCar from "./components/AntiBumperCar";
import YelpCamp from "./components/YelpCamp";
import NotFound from "./components/NotFound";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <NavContextProvider>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/portfolio-project" component={Portfolio} />
            <Route exact path="/masked-captions" component={MaskedCaptions} />
            <Route exact path="/anti-bumper-car" component={AntiBumperCar} />
            <Route exact path="/yelpcamp" component={YelpCamp} />
            <Route exact path="/portfolio" component={Main} />
            <Route exact path="/">
              <Redirect to="/portfolio" />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </AnimatePresence>
      </NavContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
