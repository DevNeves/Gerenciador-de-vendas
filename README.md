<h1>Gerenciador de vendas</h1>

![home](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/c1433314-9b5f-4725-805b-5413304f01dd)

<h2>Descrição do sistema</h2>

<p>Esse é um sistema que simula um gerenciador de vendas de uma loja de eletrônicos, nele é possivel cadastrar novos clientes, novas vendas e etc</p>

+ Todas as operações são ou podem ser Criadas, Listadas, Editadas e Deletadas (CRUD),
+ Possui um sistema de cadastro de usuario, com autenticação JWT, armazenamento da sessão em cookies e os dados (do login) no LocalStorage.
+ Nesse sistema o "vendedor" pode cadastrar clientes, cidades, bairros, produtos e as vendas e todas as operções são CRUDS.

<h2>Tecnologias utilizadas</h2>

<h3>As pricipais tecnologias foram o React.js (front) Node.js (back) e como DB o MySQL</h3>

<h4>Libs Frontend</h4>

+ axios
+ react-router-dom
+ react-hook-form
+ react-input-mask
+ react-toastify
+ react-icons
+ styled-components
+ pdfmake

<h4>Libs Backend</h4>

+ express
+ nodemon
+ mysql2
+ dotenv
+ jsonwebtoken
+ bcryptjs
+ cookie-parser
+ cors
+ dotenv
  
<h2>Layout (FrontEnd)</h2>

<h3>A Aplicação segue um layout padrão, e são muitas paginas então vou colocar aqui só algumas para te dar uma base do projeto</h3>

Cadastro de clientes:

![registrarcliente](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/ee93520f-6e4b-4fec-a355-eaa8857f6966)

Listagem de clientes:

![clientes_cadastrados](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/56a1527c-3734-4dda-ad8c-2cd3282d32b6)

Cadastro de Venda:

![cadastrarvenda](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/669d697d-a64f-4944-9f9b-b91a0f652763)

Listagem de vendas:

![venda](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/47a538d9-1388-44a6-a186-78f2b1fdcaef)

<h3>Todas os formularios possuem validação...</h3>

![teste](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/3319dffd-6101-48af-9705-dcd9d9e6d8dd)

Relatorios / Filtragem

![filtros](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/046858cc-02a4-463b-8375-1b2c544b2794)

PDFs e NFe

Relatorio de clientes (PDF)

![pdfcliente](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/1600ce40-fd81-4a2e-b415-3894263f6ac4)

Relatorio de vendas (PDF)

![pdf venda](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/92481088-6593-48c1-80d1-7a9908161a6e)

NFE

![ve](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/4aa20b02-b829-4024-a626-1132ba31574f)

<h2>Banco de Dados (Backend)</h2>

<h3>MER do banco</h3>

![diagram](https://github.com/DevNeves/Gerenciador-de-vendas/assets/102633306/4dde9a02-23d0-4c9c-9cff-7e73f71dc9c4)

