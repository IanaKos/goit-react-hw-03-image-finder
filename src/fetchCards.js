import axios from 'axios';

const options = {
  baseUrl: 'https://pixabay.com/api/',
  key: '41769090-706ead126e055710809ca53a4',
  image_type: 'photo',
  orientation: 'horizontal',
  page: 1,
  perPage: '12',
};

export default async function fetchCards(searchImg, currentPage) {
  const { baseUrl, key, image_type, orientation, perPage } = options;

  const response = await axios.get(
    `${baseUrl}?key=${key}&q=${searchImg}&image_type=${image_type}&orientation=${orientation}&page=${currentPage}&per_page=${perPage}`
  );
  const results = response.data;
  return results;
}
