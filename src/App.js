import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import NavContextProvider from "./contexts/NavContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <NavContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Main} />
          </Switch>
        </AnimatePresence>
      </NavContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
