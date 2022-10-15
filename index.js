const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

const pageUrl = location.href;
const pageTitle = location.title;

const scrapboxTitle = 'sw: ' + pageTitle;
const scrapboxUrl = 'https://scrapbox.io//' + scrapboxTitle + '&body=' + pageUrl;
