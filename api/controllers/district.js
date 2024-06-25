import { connection } from '../database/db.js';

export const getDistricts = (_, res) => {
  const q = 'SELECT * FROM districts';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const addDistrict = (req, res) => {
  const q = 'INSERT INTO districts (`name`) VALUES (?)';

  connection.query(q, [req.body.name], (err) => {
    if (err) return res.status(400).json('Não foi possivel adicionar o bairro');

    return res.status(200).json('Bairro cadastrado com sucesso');
  });
};

export const editDistrict = (req, res) => {
  const q = 'UPDATE districts SET `name` = ? WHERE id = ?';

  connection.query(q, [req.body.name, req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel editar esse bairro');

    return res.status(200).json('Bairro editado com sucesso');
  });
};

export const deleteDistrict = (req, res) => {
  const q = 'DELETE FROM districts WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel deletar esse bairro');

    return res.status(200).json('Bairro deletado com sucesso');
  });
};
