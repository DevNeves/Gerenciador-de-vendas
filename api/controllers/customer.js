import { connection } from '../database/db.js';

export const getCustomers = (_, res) => {
  const q = 'SELECT * FROM customers INNER JOIN customer_address ON customer_id = customers.id;';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const addCustomer = (req, res) => {
  const q = 'SELECT * FROM customers WHERE name = ? OR email = ?';

  connection.query(q, [req.body.name, req.body.email], (err, data) => {
    if (err) return res.status(400).json('Erro ao adicionar cliente');
    if (data.length) return res.status(409).json('Cliente já cadastrado.');

    const qCustomer = 'INSERT INTO customers (`name`, `email`, `fone`, `birth_date`) VALUES (?)';
    const qAddress =
      'INSERT INTO customer_address (`city`, `district`, `address`, `postal_code`, `house_number`, `complement`, `customer_id`) VALUES (?)';

    const values = [req.body.name, req.body.email, req.body.fone, req.body.birth_date];
    const addressValues = [
      req.body.city,
      req.body.district,
      req.body.address,
      req.body.postal_code,
      req.body.house_number,
      req.body.complement,
    ];

    connection.query(qCustomer, [values], (err, data) => {
      if (err) return res.status(400).json('Não foi possivel adicionar esse cliente');

      const customerId = data.insertId;
      addressValues.push(customerId);

      connection.query(qAddress, [addressValues], (err) => {
        if (err) return res.status(400).json('Não foi possivel adicionar esse endereço');

        return res.status(200).json('Cliente cadastrado com sucesso');
      });
    });
  });
};

export const editCustomer = (req, res) => {
  const q =
    'UPDATE customers INNER JOIN customer_address ON customer_id = customers.id SET `name` = ?, `email` = ?, `fone` = ?, `birth_date` = ?, `city` = ?, `district` = ?, `address` = ?, `postal_code`= ?, `house_number` = ?, `complement` = ? WHERE customer_id = ?';

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.birth_date,
    req.body.city,
    req.body.district,
    req.body.address,
    req.body.postal_code,
    req.body.house_number,
    req.body.complement,
  ];

  connection.query(q, [...values, req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel editar esse endereço');

    return res.status(200).json('Cliente editado com sucesso');
  });
};

export const deleteCustomer = (req, res) => {
  const q = 'DELETE FROM customers WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel deletar esse cliente');

    return res.status(200).json('Cliente deletado com sucesso');
  });
};
