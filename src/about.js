const aboutPage = ()=>{
    const aboutElement = document.createElement('div')
    aboutElement.setAttribute('id','aboutPage')
    aboutElement.innerText='this is abpot page mahtafucka'
    return aboutElement
}

const aboutLoad=()=>{
    const swap = document.getElementById('swap')
    swap.innerText=""
    swap.appendChild(aboutPage())
}
export default aboutLoad