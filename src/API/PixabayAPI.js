import axios from 'axios';

export async function fetchImgs(page, quevery) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34958458-acf0b4ab26692bebb5071463c';
  const BASE_SEARCH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  return await axios.get(
    `${BASE_URL}?key=${API_KEY}&image_type=${BASE_SEARCH_PARAMS.image_type}&orientation=${BASE_SEARCH_PARAMS.orientation}&per_page=${BASE_SEARCH_PARAMS.per_page}&q=${quevery}&page=${page}&safesearch=${BASE_SEARCH_PARAMS.safesearch}`
  );
}
