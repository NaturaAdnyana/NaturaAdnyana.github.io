export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export const countComments = (comments) => {
  return comments.length;
};

export const setLocalStorage = (name) => {
  const CACHE_KEY = "USERNAME";
  localStorage.setItem(CACHE_KEY, name);
};
