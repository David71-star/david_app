import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBooksContext } from "../CONTEXT/searchBooksContext";
import { ThemeContext } from "../CONTEXT/ThemeContext";
import "./navbar.module.css";

const MyNav = () => {
  const { book, setBook } = useContext(SearchBooksContext);
  const { isDarkModeActive, toggleDarkMode } = useContext(ThemeContext);

  const generateSwitchLabel = () => {
    return isDarkModeActive ? "LIght mode" : "Dark Mode";
  };

  return (
    <>
      <Navbar
        bg={isDarkModeActive ? "dark" : "light"}
        data-bs-theme={isDarkModeActive ? "dark" : "light"}
      >
        <Container className="d-flex justify-content-around">
          <>
            <Navbar.Brand href="#">EPICBOOK</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/PIPPONE">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </>

          <input
            value={book}
            onChange={(e) => {
              setBook(e.target.value);
            }}
            type="text"
            placeholder="Cerca titolo"
          ></input>
          <button className="ms-3" onClick={() => toggleDarkMode()}>
            {generateSwitchLabel()}
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
