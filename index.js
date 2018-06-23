(() => {
  const searchFilter = document.getElementById('search-filter');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const searchEngine = () => {
    let searchValue = searchInput.value;
    if(!searchValue) return;
    if(!searchFilter.selectedIndex) searchValue = searchValue.replace(/ /g, '+');
    this.open(searchFilter.value + searchValue, '_self');
  }
  window.addEventListener('keyup', (event) => {
    const code = event.which || event.keyCode;
    if(code === 13) searchEngine();
  });
  searchBtn.addEventListener('click', searchEngine);
})();