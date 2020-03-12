import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header'

function App() {
  const [name, setName] = useState('');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  async function handleAddRepository() {
    if (name !== '') {

      const response = await fetch(`https://api.github.com/users/${name}/repos`);
      const data = await response.json();
      console.log(data);
      setRepositories(data);
      setName('');
    }
  }
  function handleDelete(id) {
    const newRepositories = repositories.filter(repo => repo.id !== id);
    setRepositories(newRepositories);
  }

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });
    setRepositories(newRepositories);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
      <button id="but" onClick={handleAddRepository}>
        Pesquisar repositorios
    </button>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>♥</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
            <button onClick={() => handleDelete(repo.id)}> <strong>x</strong> </button>
            <a href={repo.html_url}><button>Acessar</button></a>
          </li>
        ))}
      </ul>
    </>
  );


}
export default App;
