import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

const CustomersReport = (customers) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const docDefinitios = {
    pageSize: 'A4',
    pageMargins: [15, 20, 15, 20],

    content: [
      { text: 'Clientes', style: 'title' },
      {
        table: {
          widths: [50, 250, 100, 100],
          body: [
            ['Código', 'Nome', 'Cidade', 'Telefone'],
            ...customers.map((customer) => [
              customer.id,
              customer.name,
              customer.city,
              customer.fone,
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

  pdfMake.createPdf(docDefinitios).open();
};

export default CustomersReport;
