const mainjp=document.getElementsByClassName('article_container')[0]
let datajp
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
async function getDataJpBus(){
    const res1j=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/fr.json")
    const result1j=await res1j.json()
    datajp=result1j.articles
    console.log(datajp)
    const div1j=document.createElement('div')
    div1j.classList.add('div_head')
    div1j.innerHTML=`
    <h2>BUSINESS SECTION...</h2>
    `
    mainjp.appendChild(div1j)
    renderUIJpBus()
}
getDataJpBus()
function renderUIJpBus(){
    for(let i=0;i<8;i++){
    const articlejp=document.createElement('article')
    articlejp.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datajp[i].urlToImage}">
        <p><span>Author:</span> ${datajp[i].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datajp[i].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(datajp[i].publishedAt)}</p>
        <p>${datajp[i].description}</p>
        <a href="${datajp[i].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainjp.appendChild(articlejp)
    }
    getDataJpPol()
}
async function getDataJpPol(){
    const res2j=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/fr.json")
        const result2j=await res2j.json()
        datajp=result2j.articles
        console.log(datajp)
        const div2j=document.createElement('div')
        div2j.classList.add('div_head')
        div2j.innerHTML=`
        <h2>SPORTS SECTION...</h2>
         `
        mainjp.appendChild(div2j)
        renderUIJpPol()
}
function renderUIJpPol(){
    for(let j=0;j<8;j++){
    const articlejp=document.createElement('article')
    articlejp.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datajp[j].urlToImage}">
        <p><span>Author:</span> ${datajp[j].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datajp[j].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(datajp[j].publishedAt)}</p>
        <p>${datajp[j].description}</p>
        <a href="${datajp[j].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainjp.appendChild(articlejp)
    }
    getDataJpEnt()
}
async function getDataJpEnt(){
    const res3j=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/fr.json")
        const result3j=await res3j.json()
        datajp=result3j.articles
        console.log(datajp)
        const div3j=document.createElement('div')
        div3j.classList.add('div_head')
        div3j.innerHTML=`
        <h2>ENTERTAINMENT SECTION...</h2>
        `
        mainjp.appendChild(div3j) 
        renderUIJpEnt()
}
function renderUIJpEnt(){
    for(let k=0;k<8;k++){
    const articlejp=document.createElement('article')
    articlejp.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datajp[k].urlToImage}">
        <p><span>Author:</span> ${datajp[k].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datajp[k].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(datajp[k].publishedAt)}</p>
        <p>${datajp[k].description}</p>
        <a href="${datajp[k].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainjp.appendChild(articlejp)
    }
    getDataJpTech()
}
async function getDataJpTech(){
    const res4j=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/fr.json")
        const result4j=await res4j.json()
        datajp=result4j.articles
        console.log(datajp)
        const div4j=document.createElement('div')
        div4j.classList.add('div_head')
        div4j.innerHTML=`
        <h2>TECHNOLOGY SECTION...</h2>
        `
        mainjp.appendChild(div4j)
        renderUIJpTech()
}
function renderUIJpTech(){
    for(let l=0;l<8;l++){
    const articlejp=document.createElement('article')
    articlejp.innerHTML=`
    <div class="img_author">
        <img class="article_image" src="${datajp[l].urlToImage}">
        <p><span>Author:</span> ${datajp[l].author}</p>
    </div>
    <div class="article_content">
        <h2>
        ${datajp[l].title} 
        </h2>
        <p><span>Published At:</span> ${formatPublishedAt(datajp[l].publishedAt)}</p>
        <p>${datajp[l].description}</p>
        <a href="${datajp[l].url}" target="_blank">Click to read more...</a>
    </div>
        `
    mainjp.appendChild(articlejp)
    }
}
