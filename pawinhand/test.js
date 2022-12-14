const MAX_PAGE = 3;
const MIN_PAGE = 0;
// const SCROLL_GAGE = 2;

let page = MIN_PAGE;

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if(e.wheelDelta === 120) {
    if(page === MIN_PAGE) return;
    else {
      page--;
      console.log("바뀐 페이지 : ", page);  
      scroll({
        top: window.innerHeight * page,
        left: 0,
        behavior: "smooth",
      })
    }
  } 
  else {
    if(page === MAX_PAGE) return;
    else {
      page++;
      console.log("바뀐 페이지 : ", page);  
      scroll({
        top: window.innerHeight * page,
        left: 0,
        behavior: "smooth",
      })
    }
  }
  
}, {passive : false}); // preventDefault를 먹히게 하는 옵션

window.addEventListener('beforeunload', (e) => {
  scrollTo(0, 0);
})
