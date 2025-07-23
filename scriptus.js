const mainus=document.getElementById('article_container_us')
let dataus

async function getDataUsBus(){
    const res1u=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c546f7d962e4284b8aa46b59f00786e")
    const result1u=await res1u.json()
    dataus=result1u.articles
    console.log(dataus)
    const div1u=document.createElement('div')
    div1u.classList.add('div_head')
    div1u.innerHTML=`
    <h2>BUSINESS SECTION...</h2>
    `
    mainus.appendChild(div1u)
    renderUIUsBus()
}
getDataUsBus()
function renderUIUsBus(){
    for(let i=0;i<8;i++){
    const articleus=document.createElement('article')
    articleus.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataus[i].urlToImage}">
        <p><span>Author:</span> ${dataus[i].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataus[i].title} 
        </h2>
        <p><span>Published At:</span> ${dataus[i].publishedAt}</p>
        <p>${dataus[i].description}</p>
        <a href="${dataus[i].url}" target="_blank">Read More...</a>
    </div>
        `
    mainus.appendChild(articleus)
    }
    getDataUsPol()
}
async function getDataUsPol(){
    const res2u=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result2u=await res2u.json()
        dataus=result2u.articles
        console.log(dataus)
        const div2u=document.createElement('div')
        div2u.classList.add('div_head')
        div2u.innerHTML=`
        <h2>POLITICS SECTION...</h2>
         `
        mainus.appendChild(div2u)
        renderUIUsPol()
}
function renderUIUsPol(){
    for(let j=0;j<8;j++){
    const articleus=document.createElement('article')
    articleus.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataus[j].urlToImage}">
        <p><span>Author:</span> ${dataus[j].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataus[j].title} 
        </h2>
        <p><span>Published At:</span> ${dataus[j].publishedAt}</p>
        <p>${dataus[j].description}</p>
        <a href="${dataus[j].url}" target="_blank">Read More...</a>
    </div>
        `
    mainus.appendChild(articleus)
    }
    getDataUsEnt()
}
async function getDataUsEnt(){
    const res3u=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result3u=await res3u.json()
        dataus=result3u.articles
        console.log(dataus)
        const div3u=document.createElement('div')
        div3u.classList.add('div_head')
        div3u.innerHTML=`
        <h2>ENTERTAINMENT SECTION...</h2>
        `
        mainus.appendChild(div3u)
        renderUIUsEnt()
}
function renderUIUsEnt(){
    for(let k=0;k<8;k++){
    const articleus=document.createElement('article')
    articleus.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataus[k].urlToImage}">
        <p><span>Author:</span> ${dataus[k].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataus[k].title} 
        </h2>
        <p><span>Published At:</span> ${dataus[k].publishedAt}</p>
        <p>${dataus[k].description}</p>
        <a href="${dataus[k].url}" target="_blank">Read More...</a>
    </div>
        `
    mainus.appendChild(articleus)
    }
    getDataUsTech()
}
async function getDataUsTech(){
    const res4u=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result4u=await res4u.json()
        dataus=result4u.articles
        console.log(dataus)
        const div4u=document.createElement('div')
        div4u.classList.add('div_head')
        div4u.innerHTML=`
        <h2>TECHNOLOGY SECTION...</h2>
        `
        mainus.appendChild(div4u)
        renderUIUsTech()
}
function renderUIUsTech(){
    for(let l=0;l<8;l++){
    const articleus=document.createElement('article')
    articleus.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${dataus[l].urlToImage}">
        <p><span>Author:</span> ${dataus[l].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${dataus[l].title} 
        </h2>
        <p><span>Published At:</span> ${dataus[l].publishedAt}</p>
        <p>${dataus[l].description}</p>
        <a href="${dataus[l].url}" target="_blank">Read More...</a>
    </div>
        `
    mainus.appendChild(articleus)
    }
}

