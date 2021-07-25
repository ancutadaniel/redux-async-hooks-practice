export const fetchRobotsAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err.message);
};
