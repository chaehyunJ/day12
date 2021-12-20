function getDataArray(){
    const arr = [
        {
            img : "돈까스.png",
            name : '돈까스',
            price : '16900',
            cate : '일식'
        },
        {
            img : "떡볶이.jpg",
            name : '떡볶이',
            price : '32000',
            cate : '한식'
        },
        {
            img : "로제떡볶이.jpg",
            name : '로제떡볶이',
            price : '25000',
            cate : '한식'
        },
        {
            img : "어묵탕.jpg",
            name : '어묵탕',
            price : '16000',
            cate : '일식'
        },
        {
            img : "쫄면.jpg",
            name : '쫄면',
            price : '15000',
            cate : '중식'
        }
    ]
    return arr
}

function getDom(data){
    // console.log(arr)
    arr.sort((a,b) => a.name > b.name ? 1 : -1)
    
    const item = document.createElement('div')
    item.classList.add('item')

    for(key in data){
        const value = data[key]
        const div = document.createElement('div')
        div.classList.add(key)
        if(key == 'img'){
            const img = document.createElement('img')
            img.src = 'img/' + data.img
            img.height = 200
            img.width = 280
            div.appendChild(img)
        }
        else{
            div.innerText = key + ':' + value
        }
        item.appendChild(div)
    }
    return item
}



function render(target, dom){
    target.innerHTML = ''

    console.log(typeof dom)

    if(typeof dom == 'string'){
        target.innerHTML += dom
    }
    else{
    // console.log(arr)
    // console.log(dom)
        arr.forEach(fd =>{
            const fd1 = getDom(fd)
            target.appendChild(fd1)
        })
    
    }
}

function filterHandler(event){
    console.log(event.target)
    const checkedFilter = Array.from(document.querySelectorAll('.root > .left input:checked'))
    console.log(checkedFilter)

    const ob = {
        priceFilter : null,
        cateFilter : null
    }

    checkedFilter.forEach(e => ob[e.name] = e.value)
    console.log(ob)

    // const filter1 = checkedFilter.map(v => +v.value)
    // console.log(filter1)

    // const filter2 = checkedFilter.map(v => v.value)
    // console.log(filter2)
    right.innerHTML = ''

    if(ob.priceFilter == '0'){
        arr.forEach(dto =>{
            const div = getDom(dto)
            right.appendChild(div)
        })
    }
    const filterArr = arr.filter(dto =>{
        let flag = true

        const flag1 = +ob.priceFilter <= dto.price && dto.price < +ob.priceFilter + 10000
        const flag2 = ob.cateFilter == dto.cate
        
        if(ob.priceFilter != null)  flag = flag && flag1
        if(ob.cateFilter != null)   flag = flag && flag2
        
        return flag
    })

 

  
    filterArr.forEach(dto => {
        const div = getDom(dto)
        right.appendChild(div)
    })

    
}