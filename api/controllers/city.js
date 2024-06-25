import { connection } from '../database/db.js';

export const getCities = (_, res) => {
  const q = 'SELECT * FROM cities';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const addCity = (req, res) => {
  const q = 'INSERT INTO cities (`name`, `uf`) VALUES (?)';
  const values = [req.body.name, req.body.uf];

  connection.query(q, [values], (err) => {
    if (err) return res.status(400).json('Não foi possivel adicionar essa cidade');

    return res.status(200).json('Cidade cadastrada com sucesso');
  });
};

export const editCity = (req, res) => {
  const q = 'UPDATE cities SET `name` = ?, `uf` = ? WHERE id = ?';
  const values = [req.body.name, req.body.uf];

  connection.query(q, [...values, req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel editar essa cidade');

    return res.status(200).json('Cidade editada com sucesso');
  });
};

export const deleteCity = (req, res) => {
  const q = 'DELETE FROM cities WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possive deletar essa cidade');

    return res.status(200).json('Cidade deletada com sucesso');
  });
};
