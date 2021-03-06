import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados do vídeo');
    });
}

export default {
  create,
};
