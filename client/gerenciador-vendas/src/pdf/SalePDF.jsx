import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { FormatDate } from '../components/FormatDate';

const SalePDF = (sale, itens, customer) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const docDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [15, 20, 15, 40],

    content: [
      { text: 'LOJA', style: 'title' },
      {
        text: 'AVENIDA NOME LOREM IPSUM, 6222 - ALPES - CIDADE - PR - CEP: 0000-000',
      },
      { text: 'CNPJ: 00.518.953/0001-46' },
      { text: 'Fone: (44)3333-3333 - Whatsapp: (44) 99999-9999', style: 'description' },
      { text: 'Venda de Mercadoria:', style: 'subheader' },
      { text: `DATA DA VENDA: ${FormatDate(sale.sale_date)}` },
      { text: `CLIENTE: ${sale.buyer}` },
      { text: `ENDEREÇO:  ${customer.address}` },
      { text: `CIDADE: ${customer.city}` },
      { text: `TELEFONE: ${customer.fone}` },
      { text: `EMAIL: ${customer.email}`, margin: [0, 0, 0, 10] },
      {
        table: {
          widths: ['*', 200, 100, '*', 100],
          body: [
            ['Código', 'Produto', 'VR UNIT', 'QUANT', 'VR TOTAL'],
            ...itens.map((item) => [
              item.item_id,
              item.name,
              item.price,
              item.qty,
              parseFloat(item.total_value).toFixed(2),
            ]),
          ],
        },
        margin: [0, 0, 0, 60],
      },
      {
        alignment: 'justify',
        columns: [
          {
            text: 'ASSINATURA \n ----------------------',
            margin: [60, 0, 0, 10],
          },
          {
            text: `VALOR TOTAL \n ---------------- \n${parseFloat(sale.total_value).toFixed(2)}`,
            alignment: 'right',
            margin: [50, 0, 0, 0],
          },
        ],
      },
    ],

    styles: {
      title: {
        fontSize: 25,
        bold: true,
      },
      description: {
        margin: [0, 0, 0, 20],
      },
      subheader: {
        margin: [0, 0, 0, 10],
      },
    },
  };

  pdfMake.createPdf(docDefinitions).open();
};

export default SalePDF;
