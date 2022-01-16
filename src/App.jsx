import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext, ThemeProvider } from "./context";
const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (<div style={{backgroundColor: darkMode ? "#222" : "white", 
    color: darkMode ? "white" : "rgb(95, 94, 94)"}}>
      
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      <Toggle/>
    
  </div>)
};

export default App;


