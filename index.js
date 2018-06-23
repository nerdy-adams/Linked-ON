(() => {
  const searchFilter = document.getElementById('search-filter');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const moveToCategory = document.getElementById('move-to-category');
  const sectionLink = document.getElementById('section-link');
  // 검색 엔진 이벤트 함수 정의 
  const searchEngine = () => {
    let searchValue = searchInput.value;
    if(!searchValue) return;
    if(!searchFilter.selectedIndex) searchValue = searchValue.replace(/ /g, '+');
    this.open(searchFilter.value + searchValue, '_self');
  }

  // 엔터로 검색하기 
  window.addEventListener('keyup', (event) => {
    const code = event.which || event.keyCode;
    if(code === 13) searchEngine();
  });
  // 검색을 클릭하여 검색하기
  searchBtn.addEventListener('click', searchEngine);

  // 스크롤 이벤트
  moveToCategory.addEventListener('click', () => {
    const currentScrollY = this.scrollY;
    // console.log(currentScrollY);
    // console.log(sectionLink.offsetHeight);
    window.scrollTo({top: sectionLink.offsetHeight, behavior: 'smooth'});
    // for(let i = currentScrollY; i <= sectionLink.offsetHeight; i++) {
    //   console.log(i);
    // }
    // const hostname = window.location.hostname;
    // const pathname = window.location.pathname;
    // window.open(hostname + pathname + '#section-link', '_self');
  });
})();