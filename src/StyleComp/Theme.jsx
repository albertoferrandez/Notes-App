import { useContext } from "react";
import { ThemeProvider} from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const themes = {
    dark: {
      background: "#272823",
      text: "#fff",
      border: "#fff",
      hover: "#E5E5E5",
    },

    light: {
      background: "#fff",
      text: "#000",
      border: "#000",
      hover: "#E5E5E5",
    },
  };


  const Layout = ({children}) => {

    const { theme } = useContext(ThemeContext); 

    return (
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    );
  };
  
  export default Layout;