import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [available, setAvailable] = useState("");
  const navigate = useNavigate();
  const { addProduct } = useProductContext();

  const handleAddNewProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      name,
      description,
      value: parseFloat(value),
      available,
    };

    addProduct(newProduct);

    setName("");
    setDescription("");
    setValue("");
    setAvailable("");

    navigate("/listagem");
  };

  return (
    <div className={styles.container}>
      <div>
        <Link to="/listagem" className='link'>Ver produtos cadastrados</Link>
        <form className={styles.form} onSubmit={handleAddNewProduct}>
          <label htmlFor="name">Nome do produto</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />

          <label htmlFor="description">Descrição do produto</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            required
          />

          <label htmlFor="value">Valor do produto</label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            required
          />

          <label htmlFor="available">Disponivel para venda ?</label>
          <select
            value={available}
            onChange={({ target }) => setAvailable(target.value)}
            required
          >
            <option value="" disabled></option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
