function getDataArray(){
    const arr = [
        {
            name : '돈까스',
            price : '6900',
            img : "돈까스.png"
        },
        {
            name : '떡볶이',
            price : '12000',
            img : "떡볶이.jpg"
        },
        {
            name : '로제떡볶이',
            price : '15000',
            img : "로제떡볶이.jpg"
        },
        {
            name : '어묵탕',
            price : '6000',
            img : "어묵탕.jpg"
        },
        {
            name : '쫄면',
            price : '5000',
            img : "쫄면.jpg"
        }
    ]
    return arr
}

function getDom(data){
    console.log(arr)
    arr.sort((a,b) => a.name > b.name ? 1 : -1)

    const element = document.createElement('div')
    console.log(element)
    element.classList.add('item')

    const div1 = document.createElement('div')
    const img = document.createElement('img')
    img.width = '100'
    img.height = '100'
    img.src = 'img/' + data.img

    div1.appendChild(img)

    const div2 = document.createElement('div')
    const name = document.createElement('div')
    const price = document.createElement('div')

    name.innerText = '메뉴 이름 : ' + data.name
    price.innerText = '가격 : ' + data.price

    div2.appendChild(name)
    div2.appendChild(price)

    element.appendChild(div1)
    element.appendChild(div2)

    return element
}



function render(target, dom){
    target.innerHTML = ''

    console.log(typeof dom)

    if(typeof dom == 'string'){
        target.innerHTML += dom
    }
    else{
    console.log(arr)
    console.log(dom)
        arr.forEach(fd =>{
            const fd1 = getDom(fd)
            target.appendChild(fd1)
        })
    
    }
}

function filterHandler(){

}