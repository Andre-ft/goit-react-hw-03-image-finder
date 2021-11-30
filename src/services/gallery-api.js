const API_KEY = '23458770-c93bd78e83fb2002196f13d31';

function fetchGallery(nextQuery, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?q=${nextQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.log('Promise.reject');
    return Promise.reject(new Error(`Nothing to show for: ${nextQuery}`));
  });
}

const api = {
  fetchGallery,
};

export default api;
