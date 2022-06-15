import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Error.css';

export function Error() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/home">Retourner sur la page d'acceuil</Link>
    </main>
  );
}
