import React from "react";
import { useParams } from "react-router-dom";
import arrayBook from "../ASSETS/JSON/scifi.json";
import CommentArea from "../COMMENTAREA/commenArea";
import { Card, Col, Row } from "react-bootstrap";

const BookDetails = () => {
  const params = useParams();
  const bookFound = arrayBook.find((book) => book.asin === params.asin);
  return (
    <Row className="justify-content-center">
      <Col md={7}>
        <Card>
          <Card.Img variant="top" src={bookFound.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {bookFound.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  );
};

export default BookDetails;
