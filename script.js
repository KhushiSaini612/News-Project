const main=document.getElementsByClassName('article_container')[0]
let data
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
async function getDataInBus(){
    const res1=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
    const result1=await res1.json()
    data=result1.articles
    console.log(data)
    const div1=document.createElement('div')
    div1.classList.add('div_head')
    div1.innerHTML=`
    <h2>BUSINESS SECTION...</h2>
    `
    main.appendChild(div1)
    renderUIInBus()
}
getDataInBus()
function renderUIInBus(){
    for(let i=0;i<8;i++){
    const article=document.createElement('article')
    article.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${data[i].urlToImage}">
        <p><span>Author:</span> ${data[i].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${data[i].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(data[i].publishedAt)}</p>
        <p>${data[i].description}</p>
        <a href="${data[i].url}" target="_blank">Click to read more...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInPol()
}
async function getDataInPol(){
    const res2=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json")
        const result2=await res2.json()
        data=result2.articles
        console.log(data)
        const div2=document.createElement('div')
        div2.classList.add('div_head')
        div2.innerHTML=`
        <h2>SPORTS SECTION...</h2>
         `
        main.appendChild(div2)
        renderUIInPol()
}
function renderUIInPol(){
    for(let j=0;j<8;j++){
    const article=document.createElement('article')
    article.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${data[j].urlToImage}">
        <p><span>Author:</span> ${data[j].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${data[j].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(data[j].publishedAt)}</p>
        <p>${data[j].description}</p>
        <a href="${data[j].url}" target="_blank">Click to read more...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInEnt()
}
async function getDataInEnt(){
    const res3=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json")
        const result3=await res3.json()
        data=result3.articles
        console.log(data)
        const div3=document.createElement('div')
        div3.classList.add('div_head')
        div3.innerHTML=`
        <h2>ENTERTAINMENT SECTION...</h2>
        `
        main.appendChild(div3)
        renderUIInEnt()
}
function renderUIInEnt(){
    for(let k=0;k<8;k++){
    const article=document.createElement('article')
    article.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${data[k].urlToImage}">
        <p><span>Author:</span> ${data[k].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${data[k].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(data[k].publishedAt)}</p>
        <p>${data[k].description}</p>
        <a href="${data[k].url}" target="_blank">Click to read more...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInTech()
}
async function getDataInTech(){
    const res4=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json")
        const result4=await res4.json()
        data=result4.articles
        console.log(data)
        const div4=document.createElement('div')
        div4.classList.add('div_head')
        div4.innerHTML=`
        <h2>TECHNOLOGY SECTION...</h2>
        `
        main.appendChild(div4)
        renderUIInTech()
}
function renderUIInTech(){
    for(let l=0;l<8;l++){
    const article=document.createElement('article')
    article.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${data[l].urlToImage}">
        <p><span>Author:</span> ${data[l].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${data[l].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(data[l].publishedAt)}</p>
        <p>${data[l].description}</p>
        <a href="${data[l].url}" target="_blank">Click to read more...</a>
    </div>
        `
    main.appendChild(article)
    }
}


