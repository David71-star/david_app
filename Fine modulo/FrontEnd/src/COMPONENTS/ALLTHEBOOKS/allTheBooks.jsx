import { Col, Container } from "react-bootstrap";
import arrayBooks from "../ASSETS/JSON/scifi.json";
import React, { useContext } from "react";
import "./allTheBooks.module.css";
import SingleBook from "../SINGLEBOOK/singlebook";
import { SearchBooksContext } from "../CONTEXT/searchBooksContext";
import CommentArea from "../COMMENTAREA/commenArea";

const AllTheBooks = () => {
  // const [value, setValue] = useState("");
  const { book } = useContext(SearchBooksContext);
  return (
    <>
      {/* <Container>
        <h1>{book}</h1>
        <input
          value={book}
          onChange={(e) => {
            setBook(e.target.value);
          }}
          type="text"
          placeholder="Cerca titolo"
        ></input>
      </Container> */}

      <Container className="d-flex justify-content-center">
        <div className="d-flex justify-content-center flex-wrap w-50">
          {arrayBooks
            .filter((book1) =>
              book1.title.toLocaleLowerCase().includes(book.toLocaleLowerCase())
            )
            .map((book1) => {
              return (
                <Col md={3} key={book1.asin}>
                  <SingleBook book={book1} />
                </Col>
              );
            })}
        </div>
        <CommentArea />
      </Container>
    </>
  );
};

export default AllTheBooks;
