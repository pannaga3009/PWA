
const apiKey = '3bc0fcb13a634a4ba0db6bf6603e35a1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');


window.addEventListener('load', e => {
    updateNews();
    update();

    // updateSources();
});
async function updateSources() {
    const url = await fetch('https://newsapi.org/v2/sources');
    let response = await ajaxCall(url);
    sourceSelector.innerHTML = json.sources
        .map(src => '<option value="${src.id}">${src.name}</option>').join('\n');
}
async function updateNews() {

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    response.articles.forEach(article => {
        $("#newsDiv .mainNews_img").attr('src', article.urlToImage);
        $("#newsDiv .title").text(article.title);
        $("#newsDiv .title").attr('href', article.url);
        $("#newsDiv .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#newsDiv").html());

        $("#newsDiv .mainNews_img").attr('src', '');
        $("#newsDiv .title").text('');
        $("#newsDiv .title").attr('href', '');
        $("#newsDiv .feature_article_content").text('');
    });
}

async function update() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + apiKey;
    let response = await ajaxCall(url);
    //  response.articles.forEach(createArt);
    response.articles.forEach(article => {
        $("#splNewsDiv .news_img").attr('src', article.urlToImage);
        $("#splNewsDiv  .title1").text(article.title);
        $("#splNewsDiv  .title1").attr('href', article.url);
        $("#splNewsDiv  .feature_article_content").text(article.description);

        $("#ajaxNews").append($("#splNewsDiv").html());

        $("#splNewsDiv  .news_img").attr('src', '');
        $("#splNewsDiv  .title1").text('');
        $("#splNewsDiv  .title1").attr('href', '');
        $("#splNewsDiv  .feature_article_content").text('');
    });
}

async function ajaxCall(url) {

    const res = await fetch(url);
    return json = await res.json();
}





/* function createArt(article){
$("#splNewsDiv .news_img").attr('src',article.urlToImage);
$("#splNewsDiv .col-md-5 .title1").text(article.title);
$("#splNewsDiv .col-md-5 .title1").attr('href',article.url);
$("#splNewsDiv .col-md-5 .feature_article_content").text(article.description);

$("#splNewsDiv .news_img").on('click', function(){});

let newsDiv = document.querySelector('#splNewsDiv').querySelector('.news_img');

$("#ajaxNews").append($("#splNewsDiv").html());
//$("#ajaxNews").append($("#newsMainDiv").text());
 return true;
} 


function createArticle(article){

$("#newsMainDiv .mainNews_img").attr('src',article.urlToImage);
$("#newsMainDiv .title").text(article.title);
$("#newsMainDiv .title").attr('href',article.url);
$("#newsMainDiv .feature_article_content").text(article.description);

$("#newsMainDiv .mainNews_img").on('click', function(){});

let newsDiv = document.querySelector('#newsMainDiv').querySelector('.mainNews_img');

$("#ajaxNews").append($("#newsMainDiv").html());
 return true;
}
*/