import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { FormatDate } from '../components/FormatDate';

const SaleReport = (sales) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 20, 15, 20],

    content: [
      { text: 'Vendas ', style: 'title' },
      {
        table: {
          widths: [50, 200, 100, 100],
          body: [
            ['Código', 'Comprador', 'Total', 'Data da venda'],
            ...sales.map((sale) => [
              sale.id,
              sale.buyer,
              parseFloat(sale.total_value).toFixed(2),
              FormatDate(sale.sale_date),
            ]),
          ],
        },
      },
    ],

    styles: {
      title: {
        fontSize: 25,
        bold: true,
      },
    },
  };

  pdfMake.createPdf(docDefinitions).open();
};

export default SaleReport;
