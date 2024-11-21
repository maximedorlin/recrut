import { useState } from 'react';
import styled from 'styled-components';

// Définir un Styled Wrapper pour ton bouton
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    
    &:disabled {
      background-color: #d3d3d3;
      cursor: not-allowed;
    }
  }
`;

const LoadingButton = () => {
  const [loading, setLoading] = useState(false);

  // Simuler un processus de chargement (par exemple, une requête réseau)
  const handleClick = () => {
    setLoading(true);
    
    // Simule un délai (par exemple, une requête API) de 2 secondes
    setTimeout(() => {
      setLoading(false);
      // Ajouter ici la logique pour après l'opération (par exemple, rediriger, afficher un message, etc.)
    }, 2000);
  };

  return (
    <StyledWrapper>
      <button onClick={handleClick} disabled={loading}>
        {loading ? (
          <span>Loading...</span> // Remplacer par un spinner si tu veux
        ) : (
          'Valider'
        )}
      </button>
    </StyledWrapper>
  );
};

export default LoadingButton;
