import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriaRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setCategorias(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categorias.length === 0 && (<div>Carregando...</div>)}

      {categorias.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categorias[0].videos[0].titulo}
                url={categorias[0].videos[0].url}
                videoDescription={categorias[0].videos[0].titulo}
              />
              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
