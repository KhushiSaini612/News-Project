const mainko=document.getElementById('article_container_ko')
let datako

async function getDataKoBus(){
    const res1k=await fetch("https://newsapi.org/v2/top-headlines?country=ko&category=business&apiKey=6c546f7d962e4284b8aa46b59f00786e")
    const result1k=await res1k.json()
    datako=result1k.articles
    console.log(datako)
    const div1k=document.createElement('div')
    div1k.classList.add('div_head')
    div1k.innerHTML=`
    <h2>BUSINESS SECTION...</h2>
    `
    mainko.appendChild(div1k)
    renderUIKoBus()
}
getDataKoBus()
function renderUIKoBus(){
    for(let i=0;i<8;i++){
    const articleko=document.createElement('article')
    articleko.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datako[i].urlToImage}">
        <p><span>Author:</span> ${datako[i].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datako[i].title} 
        </h2>
        <p><span>Published At:</span> ${datako[i].publishedAt}</p>
        <p>${datako[i].description}</p>
        <a href="${datako[i].url}" target="_blank">Read More...</a>
    </div>
        `
    mainko.appendChild(articleko)
    }
    getDataKoPol()
}
async function getDataKoPol(){
    const res2k=await fetch("https://newsapi.org/v2/top-headlines?country=ko&category=politics&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result2k=await res2k.json()
        datako=result2k.articles
        console.log(datako)
        const div2k=document.createElement('div')
        div2k.classList.add('div_head')
        div2k.innerHTML=`
        <h2>POLITICS SECTION...</h2>
         `
        mainko.appendChild(div2k)
        renderUIKoPol()
}
function renderUIKoPol(){
    for(let j=0;j<8;j++){
    const articleko=document.createElement('article')
    articleko.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datako[j].urlToImage}">
        <p><span>Author:</span> ${datako[j].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datako[j].title} 
        </h2>
        <p><span>Published At:</span> ${datako[j].publishedAt}</p>
        <p>${datako[j].description}</p>
        <a href="${datako[j].url}" target="_blank">Read More...</a>
    </div>
        `
    mainko.appendChild(articleko)
    }
    getDataKoEnt()
}
async function getDataKoEnt(){
    const res3k=await fetch("https://newsapi.org/v2/top-headlines?country=ko&category=entertainment&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result3k=await res3k.json()
        datako=result3k.articles
        console.log(datako)
        const div3k=document.createElement('div')
        div3k.classList.add('div_head')
        div3k.innerHTML=`
        <h2>ENTERTAINMENT SECTION...</h2>
        `
        mainko.appendChild(div3k)
        renderUIKoEnt()
}
function renderUIKoEnt(){
    for(let k=0;k<8;k++){
    const articleko=document.createElement('article')
    articleko.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datako[k].urlToImage}">
        <p><span>Author:</span> ${datako[k].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datako[k].title} 
        </h2>
        <p><span>Published At:</span> ${datako[k].publishedAt}</p>
        <p>${datako[k].description}</p>
        <a href="${datako[k].url}" target="_blank">Read More...</a>
    </div>
        `
    mainko.appendChild(articleko)
    }
    getDataKoTech()
}
async function getDataKoTech(){
    const res4k=await fetch("https://newsapi.org/v2/top-headlines?country=ko&category=technology&apiKey=6c546f7d962e4284b8aa46b59f00786e")
        const result4k=await res4k.json()
        datako=result4k.articles
        console.log(datako)
        const div4k=document.createElement('div')
        div4k.classList.add('div_head')
        div4k.innerHTML=`
        <h2>TECHNOLOGY SECTION...</h2>
        `
        mainko.appendChild(div4k)
        renderUIKoTech()
}
function renderUIKoTech(){
    for(let l=0;l<8;l++){
    const articleko=document.createElement('article')
    articleko.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datako[l].urlToImage}">
        <p><span>Author:</span> ${datako[l].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datako[l].title} 
        </h2>
        <p><span>Published At:</span> ${datako[l].publishedAt}</p>
        <p>${datako[l].description}</p>
        <a href="${datako[l].url}" target="_blank">Read More...</a>
    </div>
        `
    mainko.appendChild(articleko)
    }
}

