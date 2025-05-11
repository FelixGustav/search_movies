# 🎬 Movie Search App

Aplicação web que permite ao usuário buscar filmes e visualizar detalhes completos a partir da [OMDb API](https://www.omdbapi.com/). Desenvolvido com **React + Vite**, aplicando os princípios de **Responsabilidade Única (SRP)** e **Inversão de Dependência (DIP)**.

---

## 📸 Demonstração

![preview](./preview.png) <!-- Adicione um screenshot do app aqui, se desejar -->

---

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [OMDb API](https://www.omdbapi.com/)
- JavaScript (ES6+)

---

## 🔐 Configuração da API

1. Crie uma conta gratuita em: https://www.omdbapi.com/apikey.aspx
2. Após receber sua chave por e-mail, crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
3. adcione o sequinte code na em api/services/movieApi.js

```env
API_URL = 'https://www.omdbapi.com/';
API_KEY = 'CHAVE_API';

```

## Como Rodar localmente

# 1. Clone o repositório
```
git clone https://github.com/seu-usuario/movie-search-app.git
cd movie-search-app

```


# 2. Instale as dependências
```
npm i
```

# 3. Crie o arquivo .env com sua chave da OMDb
echo "VITE_OMDB_API_KEY=sua_chave_aqui" > .env

# 4. Inicie o projeto
```
npm run dev
```
