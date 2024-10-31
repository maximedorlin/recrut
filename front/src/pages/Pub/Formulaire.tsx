import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { Context } from './Context';

const FormPage: React.FC = () => {
  const { formData, setFormData } = useContext(Context);
  const navigate = useNavigate(); // Utiliser useNavigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/result'); // Utiliser navigate pour la navigation
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
