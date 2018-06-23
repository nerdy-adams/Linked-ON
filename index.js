(() => {
  const searchFilter = document.getElementById('search-filter');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  searchBtn.addEventListener('click', () => {
    let searchValue = searchInput.value;
    if(!searchValue) return;
    if(!searchFilter.selectedIndex) searchValue = searchValue.replace(/ /g, '+');
    this.open(searchFilter.value + searchValue);
  });
})();