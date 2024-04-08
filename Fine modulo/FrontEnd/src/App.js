import AllTheBooks from "./COMPONENTS/ALLTHEBOOKS/allTheBooks.jsx";
import MyFooter from "./COMPONENTS/FOOTER/footer.jsx";
import MyNav from "./COMPONENTS/NAVBAR/navbar.jsx";
import Welcome from "./COMPONENTS/WELCOME/welcome.jsx";
import { SearchBookProvider } from "./COMPONENTS/CONTEXT/searchBooksContext";
import { useContext } from "react";
import { ThemeContext } from "./COMPONENTS/CONTEXT/ThemeContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./COMPONENTS/BOOKDETAILS/BookDetails.jsx";
import NotFound from "./COMPONENTS/NOTFOUND/NotFound.jsx";
import Login from "./COMPONENTS/LOGIN/login.jsx";

function App() {
  const { isDarkModeActive } = useContext(ThemeContext);

  return (
    <div className={`App bg-${isDarkModeActive ? "dark" : "light"}`}>
      <>
        <BrowserRouter>
          <SearchBookProvider>
            <>
              <MyNav />
              <Welcome />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/allTheBooks" element={<AllTheBooks />} />
                <Route path="/details/:asin" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <MyFooter />
            </>
          </SearchBookProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
