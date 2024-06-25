import { connection } from '../database/db.js';

export const getSales = (_, res) => {
  const q =
    'SELECT s.id, s.buyer, s.sale_date, SUM(i.total_value) AS total_value FROM itens_saled AS i INNER JOIN sales AS s ON i.sale_id = s.id GROUP BY s.id';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const getSaledItens = (req, res) => {
  const q =
    'SELECT p.name, p.id AS product_id , p.price, i.id AS item_id, i.total_value, i.qty  FROM products AS p INNER JOIN itens_saled AS i ON i.product_id = p.id WHERE i.sale_id = ?';

  connection.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const getSaledItensForFilter = (req, res) => {
  const q =
    'SELECT p.name, p.id AS product_id, i.sale_id AS sale_id FROM products AS p INNER JOIN itens_saled AS i ON i.product_id = p.id';

  connection.query(q, (err, data) => {
    if (err) return res.status(400).json('Erro ao consultar o banco de dados');

    return res.status(200).json(data);
  });
};

export const addSale = (req, res) => {
  const q = 'INSERT INTO sales (buyer, sale_date) VALUES (?)';

  connection.query(q, [[req.body.buyer, req.body.sale_date]], (err, data) => {
    if (err) return res.status(400).json('Não foi possivel adicionar a venda');

    const saleId = data.insertId;
    const items = req.body.itensForSale;
    const values = items.map((item) => [item.qty, item.total, saleId, item.product_id]);

    const qItems =
      'INSERT INTO itens_saled (`qty`, `total_value`, `sale_id`, `product_id`) VALUES ?';

    connection.query(qItems, [values], (err) => {
      if (err) return res.status(400).json('Não foi possivel adicionar esse item na venda');

      return res.status(200).json('Venda feita com sucesso');
    });
  });
};

export const editSale = (req, res) => {
  const { id } = req.params;
  const { buyer, sale_date, itensForSale } = req.body;
  const updateSaleQuery = 'UPDATE sales SET buyer = ?, sale_date = ? WHERE id = ?';

  connection.query(updateSaleQuery, [buyer, sale_date, id], (err) => {
    if (err) return res.status(400).json('Não foi possivel editar a venda');

    const updateItemsQuery =
      'INSERT INTO itens_saled (qty, total_value, sale_id, product_id) VALUES ? ON DUPLICATE KEY UPDATE qty = VALUES(qty), total_value = VALUES(total_value)';

    const itemsValues = itensForSale.map((item) => [item.qty, item.total, id, item.product_id]);

    connection.query(updateItemsQuery, [itemsValues], (err) => {
      console.log(err);
      if (err) return res.status(400).json('Não foi possivel editar esse item');

      return res.status(200).json('Venda atualizada com sucesso.');
    });
  });
};

export const deleteSaledItem = (req, res) => {
  const q = 'DELETE FROM `itens_saled` WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel deletar esse item');

    return res.status(200).json('Item deletado com sucesso');
  });
};

export const deleteSale = (req, res) => {
  const q = 'DELETE FROM `sales` WHERE id = ?';

  connection.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json('Não foi possivel deletar essa venda');

    return res.status(200).json('Venda deletada com sucesso');
  });
};
