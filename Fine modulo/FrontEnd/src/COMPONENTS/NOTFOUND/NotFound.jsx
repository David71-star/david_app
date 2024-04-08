import React from "react";
import { Col, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <div className="text-center">
          <h1>ERRORE 404</h1>
          <p>Questa pagina non è stata trovata poiche non esiste</p>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;

// NOTA ! HO ASSEGNATO UN LINK NON FUNZIONANTE ALLA PAROLA ABOUT ( PRESENTE NELLA NAVBAR )
//IN MODO DA FAR SCATTARE ANCHE LA FUNZIONE QUI SOPRA
