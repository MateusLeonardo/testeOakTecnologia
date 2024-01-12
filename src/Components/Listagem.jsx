// Listagem.js
import React from "react";
import { useProductContext } from "../Context/ProductContext";
import styles from "./Listagem.module.css";
import { Link } from "react-router-dom";

const Listagem = () => {
  const { sortedProducts, products } = useProductContext();
  
  const sortedProductList = sortedProducts();

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <Link to="/" className="link">
          Cadastrar novo produto
        </Link>
        {products.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Valor</th>
              </tr>
            </thead>
            <tbody>
              {sortedProductList.map((product) => (
                <tr key={product.name}>
                  <td className={styles.td}>{product.name}</td>
                  <td className={styles.td}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>Nenhum produto cadastrado ainda</h1>
        )}
      </div>
    </div>
  );
};

export default Listagem;
