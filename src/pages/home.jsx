import React from 'react';
import Button from "../components/button";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Bienvenue sur MSCI84</h1>
      <p>Ceci est la page d'accueil.</p>
      <Button onClick={() => alert('Bouton cliqué !')}>
        Cliquez ici
      </Button>
    </div>
  );
};

export default Home;