import React from 'react';
import product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const firstName = "This Is Meyssa For Bags"; 

const App = () => {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <div className="title-with-images">
          <h2>{product.name}</h2>
          <div className="image-container">
            {product.imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Card.Body>
          <Card.Text as={Price} price={product.price} />
          <Card.Text as={Description} description={product.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <Image imageUrls={product.imageUrls} />}
    </Container>
  );
};

export default App;