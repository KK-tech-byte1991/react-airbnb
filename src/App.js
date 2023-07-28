import React from 'react';

import EcmaScript from './EcmaScript/EcmaScript';
import HomePage from './HomePage/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <HomePage />
      <EcmaScript />
      <p></p>
    </div>
  );
}
