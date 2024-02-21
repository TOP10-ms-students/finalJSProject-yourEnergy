function addToFavorites(exerciseId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(exerciseId)) {
    favorites.push(exerciseId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

function removeFromFavorites(exerciseId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let index = favorites.indexOf(exerciseId);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
