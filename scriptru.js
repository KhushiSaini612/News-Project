const mainru=document.getElementsByClassName('article_container')[0]
let dataru
function formatPublishedAt(publishedAt) {
  const dateObj = new Date(publishedAt);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return dateObj.toLocaleString('en-IN', options);
}
async function getDataRuBus(){
    const res1r=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/ru.json")
    const result1r=await res1r.json()
    dataru=result1r.articles
    console.log(dataru)
    const div1r=document.createElement('div')
    div1r.classList.add('div_head')
    div1r.innerHTML=`
    <h2>BUSINESS SECTION...</h2>
    `
    mainru.appendChild(div1r)
    renderUIRuBus()
}
getDataRuBus()
function renderUIRuBus(){
    for(let i=0;i<8;i++){
    const articleru=document.createElement('article')
    articleru.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataru[i].urlToImage}">
        <p><span>Author:</span> ${dataru[i].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataru[i].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(dataru[i].publishedAt)}</p>
        <p>${dataru[i].description}</p>
        <a href="${dataru[i].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainru.appendChild(articleru)
    }
    getDataRuPol()
}
async function getDataRuPol(){
    const res2r=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/ru.json")
        const result2r=await res2r.json()
        dataru=result2r.articles
        console.log(dataru)
        const div2r=document.createElement('div')
        div2r.classList.add('div_head')
        div2r.innerHTML=`
        <h2>SPORTS SECTION...</h2>
         `
        mainru.appendChild(div2r)
        renderUIRuPol()
}
function renderUIRuPol(){
    for(let j=0;j<8;j++){
    const articleru=document.createElement('article')
    articleru.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataru[j].urlToImage}">
        <p><span>Author:</span> ${dataru[j].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataru[j].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(dataru[j].publishedAt)}</p>
        <p>${dataru[j].description}</p>
        <a href="${dataru[j].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainru.appendChild(articleru)
    }
    getDataRuEnt()
}
async function getDataRuEnt(){
    const res3r=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/ru.json")
        const result3r=await res3r.json()
        dataru=result3r.articles
        console.log(dataru)
        const div3r=document.createElement('div')
        div3r.classList.add('div_head')
        div3r.innerHTML=`
        <h2>ENTERTAINMENT SECTION...</h2>
        `
        mainru.appendChild(div3r)
        renderUIRuEnt()
}
function renderUIRuEnt(){
    for(let k=0;k<8;k++){
    const articleru=document.createElement('article')
    articleru.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataru[k].urlToImage}">
        <p><span>Author:</span> ${dataru[k].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataru[k].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(dataru[k].publishedAt)}</p>
        <p>${dataru[k].description}</p>
        <a href="${dataru[k].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainru.appendChild(articleru)
    }
    getDataRuTech()
}
async function getDataRuTech(){
    const res4r=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/ru.json")
        const result4r=await res4r.json()
        dataru=result4r.articles
        console.log(dataru)
        const div4r=document.createElement('div')
        div4r.classList.add('div_head')
        div4r.innerHTML=`
        <h2>TECHNOLOGY SECTION...</h2>
        `
        mainru.appendChild(div4r)
        renderUIRuTech()
}
function renderUIRuTech(){
    for(let l=0;l<8;l++){
    const articleru=document.createElement('article')
    articleru.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataru[l].urlToImage}">
        <p><span>Author:</span> ${dataru[l].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataru[l].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(dataru[l].publishedAt)}</p>
        <p>${dataru[l].description}</p>
        <a href="${dataru[l].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainru.appendChild(articleru)
    }
}

