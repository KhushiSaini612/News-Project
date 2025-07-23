// fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6c546f7d962e4284b8aa46b59f00786e").then(response=> response.json()).then(data=>{console.log(data);})



const main=document.getElementById('article_container')
let data

async function getDataInBus(){
    const res1=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c546f7d962e4284b8aa46b59f00786e")
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
        <p><span>Published At:</span> ${data[i].publishedAt}</p>
        <p>${data[i].description}</p>
        <a href="${data[i].url}" target="_blank">Read More...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInPol()
}
async function getDataInPol(){
    const res2=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result2=await res2.json()
        data=result2.articles
        console.log(data)
        const div2=document.createElement('div')
        div2.classList.add('div_head')
        div2.innerHTML=`
        <h2>POLITICS SECTION...</h2>
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
        <p><span>Published At:</span> ${data[j].publishedAt}</p>
        <p>${data[j].description}</p>
        <a href="${data[j].url}" target="_blank">Read More...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInEnt()
}
async function getDataInEnt(){
    const res3=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6c546f7d962e4284b8aa46b59f00786e")
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
        <p><span>Published At:</span> ${data[k].publishedAt}</p>
        <p>${data[k].description}</p>
        <a href="${data[k].url}" target="_blank">Read More...</a>
    </div>
        `
    main.appendChild(article)
    }
    getDataInTech()
}
async function getDataInTech(){
    const res4=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6c546f7d962e4284b8aa46b59f00786e")
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
        <p><span>Published At:</span> ${data[l].publishedAt}</p>
        <p>${data[l].description}</p>
        <a href="${data[l].url}" target="_blank">Read More...</a>
    </div>
        `
    main.appendChild(article)
    }
}


