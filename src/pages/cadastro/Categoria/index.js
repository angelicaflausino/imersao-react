import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: "#000"
  };

 const [categorias, setCategorias] = useState([]);
 const [novaCategoria, setCategoria] = useState(categoriaInicial);

  function setValue(keyName, valueInput){
    setCategoria({
      ...novaCategoria,
      [keyName]: valueInput
    });
  }

  function handleChange(e) {
    //const { getAttribute, value } = e.target;
    setValue(
      e.target.getAttribute('name'), 
      e.target.value
    );
  }

  useEffect(() => {
    const isLocal = window.location.hostname.includes('localhost');
    const URL_CATEGORIAS = isLocal ? 'http://localhost:8080/categorias' : 'https://bugflix.herokuapp.com/categorias';
    fetch(URL_CATEGORIAS)
    .then(async (response) => {
      const data = await response.json();
      setCategorias([
        ...data,
      ]);
    });
  }, []);

    return(
      <PageDefault>
        <h1>Cadastro Categoria: {novaCategoria.nome}</h1>

        <form onSubmit={function handleSubmit(e){
            e.preventDefault();
            setCategorias([
              ...categorias,
              novaCategoria
            ]);

            setCategoria(categoriaInicial);
        }}>
          
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={novaCategoria.nome}
            onChange={handleChange}
          />
          
          <FormField
            label="Descricao"
            type="textarea"
            name="descricao"
            value={novaCategoria.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={novaCategoria.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>

        </form>

        <br />

        {categorias.length === 0 && (
          <div>Loading...</div>
        )}

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <br />
        <Link to="/">
            Ir para a Home
        </Link>
      </PageDefault	>
    );
  }

export default CadastroCategoria;