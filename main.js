var pageNumber = 0;


function getArticle(article){
    let template = `<h1>${article.title}</h1>
    <p>${article.content1}</p>
  
        
  
    <img src="${article.imageLink}" alt="lorem image" />
    <p>${article.content2}</p>`

    return template
}

function setUpSection(){
    let section = document.getElementById('section')
    section.innerText = ""
}

function addData(pageNumber){
    setUpSection();
    let section = document.getElementById('section')
    console.log(pageNumber, data[pageNumber].length)
    let numberofArticles = data[pageNumber].length
    let articles = data[pageNumber]
    for(i = 0 ; i< numberofArticles ; i++){
        let article = getArticle(articles[i])
        section.innerHTML += article
    }
}



addData(pageNumber);

function next(){
    pageNumber = (pageNumber+1) % data.length
    addData(pageNumber)
}

function prev() {
    pageNumber = (pageNumber - 1) < 0 ? data.length - 1 : pageNumber - 1
    addData(pageNumber);
}