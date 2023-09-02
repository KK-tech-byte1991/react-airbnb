import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ImageCard = ({ locDetails }) => {
  const [data, setData] = useState(null);
  return (
    <Card
      className="border-0"
      style={{ width: '18rem', height: '25rem !important' }}
    >
      <Card.Img src={locDetails.images[0]} className="img-fluid" />
      <Card.Body className="p-0">
        <Card.Title>{locDetails.address}</Card.Title>
        <Card.Text>
          172 kms away
          <br />
          10-15 september
          <br />
          <span className="fw-bold">₹5600</span> night
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
