import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { SelectedContext } from "../CONTEXT/selectedContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import CommentArea from "../COMMENTAREA/commenArea";

function SingleBook({ book }) {
  const { setSelected, selected } = useContext(SelectedContext);
  console.log(selected);
  const navigate = useNavigate();
  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
        </Card.Body>
        <Button onClick={() => navigate(`/details/${book.asin}`)}>
          DETTAGLI DI QUESTO LIBRO
        </Button>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </>
  );
}

export default SingleBook;
