import { connection } from '../database/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

  connection.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json('Este usuario já existe');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = 'INSERT INTO users (`username`, `email`, `password`) VALUES (?)';
    const values = [req.body.username, req.body.email, hash];

    connection.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json('Usuario criado com sucesso.');
    });
  });
};

export const login = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = ?';

  connection.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json('Usuario não existe!');

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPasswordCorrect) return res.status(400).json('Senha ou nome inválidos');

    const token = jwt.sign({ id: data[0].id }, 'jwtkey');
    const { password, ...other } = data[0];

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie('access_token', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json('O usuario foi desconectado.');
};
