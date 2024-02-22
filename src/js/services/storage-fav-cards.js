function addToFavorites(obj) {
  let favorites = JSON.parse(localStorage.getItem('favWorkouts')) || [];
  const isDuplicate = favorites.some(item => item._id === obj._id);

  if (isDuplicate) {
    return;
  }

  favorites.push(obj);
  localStorage.setItem('favWorkouts', JSON.stringify(favorites));
}

function removeFromFavorites(obj) {
  let favorites = JSON.parse(localStorage.getItem('favWorkouts')) || [];
  let index = favorites.findIndex(item => item._id === obj._id);

  if (index === -1) {
    return;
  }

  favorites.splice(index, 1);
  localStorage.setItem('favWorkouts', JSON.stringify(favorites));
}
