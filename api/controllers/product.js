import { connection } from '../database/db.js';

export const getProducts = (_, res) => {
  const q = 'SELECT * FROM products';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const addProduct = (req, res) => {
  const q = 'INSERT INTO products (`name`, `price`) VALUES (?)';
  const values = [req.body.name, req.body.price];

  connection.query(q, [values], (err) => {
    if (err) return res.status(400).json('Não foi possivel adicionar o produto');

    return res.status(200).json('Produto cadastrada com sucesso');
  });
};

export const editProduct = (req, res) => {
  const q = 'UPDATE products SET `name` = ?, `price` = ? WHERE id = ?';
  const values = [req.body.name, req.body.price];

  connection.query(q, [...values, req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel editar esse produto');

    return res.status(200).json('Produto editada com sucesso');
  });
};

export const deleteProduct = (req, res) => {
  const q = 'DELETE FROM products WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel deletar esse produto');

    return res.status(200).json('Produto deletada com sucesso');
  });
};
