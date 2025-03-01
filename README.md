📌 To-Do List com TypeScript

Este projeto é uma To-Do List (lista de tarefas) desenvolvida com React e TypeScript, que permite adicionar, remover e marcar tarefas como concluídas. Além disso, conta com persistência no localStorage e suporte a temas (claro e escuro).

🚀 Funcionalidades

✅ Adicionar tarefas à lista

🗑️ Remover tarefas

✍️ Marcar tarefas como concluídas

💾 Salvamento automático no localStorage

🎨 Alternância entre tema claro e escuro

🛠️ Tecnologias utilizadas

React ⚛️

TypeScript

CSS 🎨

localStorage 🗄️

📥 Como instalar e rodar o projeto

1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/To-do-list-com-TypeScript.git

2️⃣ Entrar no diretório do projeto

cd To-do-list-com-TypeScript

3️⃣ Instalar as dependências

npm install
# ou
yarn install

4️⃣ Rodar o projeto

npm run dev
# ou
yarn dev

O projeto estará rodando em http://localhost:5173/.

📂 Estrutura do projeto

📂 frontend/
├── 📜 src/
│   ├── assets/ # Pasta para imagens da aplicação
│   ├── 📜 App.tsx  # Componente principal da aplicação
│   ├── 📜 ThemeContext.tsx  # Gerenciamento de tema claro/escuro
│   ├── 📜 App.css  # Estilos da aplicação
│   ├── 📜 main.tsx  # Ponto de entrada da aplicação
│   └── 📜 index.html  # Template HTML principal
├── 📜 package.json  # Dependências e scripts do projeto
└── 📜 tsconfig.json  # Configurações do TypeScript

💡 Como funciona o projeto?

As tarefas são armazenadas em um estado React (useState************************************) e persistidas no localStorage.

O tema é gerenciado por um Context API (ThemeContext.tsx************************************).

O usuário pode alternar entre tema claro e escuro com um botão.

🤝 Contribuindo

Se quiser contribuir, fork este repositório e envie um pull request com suas melhorias.

📄 Licença

Este projeto está sob a licença MIT.
