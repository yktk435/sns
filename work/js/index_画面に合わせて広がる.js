



window.onload = () => {
    let divArray = Array.from(document.querySelectorAll('div.main'))
    /************************************************************************/
    // 画面サイズ変更
    /************************************************************************/
    changeSize()//画面読み込み時に画面調整
    window.addEventListener('resize',changeSize)//サイズを変更すると画面調整
    
}

function changeSize(){
    console.log('画面')
    let divArray = Array.from(document.querySelectorAll('div.main'))
    let size = {
        'width': document.documentElement.clientWidth,
        'height': document.documentElement.clientHeight
    }
    console.log('width',size.width)
    if (size.width < 950) {//それより小さい縦幅なら
        let setSize=size.width-100>560 ? 560:size.width-100
        divArray[1].style.width=setSize+"px;"
        divArray[2].style.display='none'
        
        divArray[1].innerText=divArray[1].style.width
        divArray[2].innerText=divArray[2].style.width+'  right'

    }
    else if (950 <= size.width && size.width < 1000) {//2分割
        console.log('2分割')
        divArray[0].style.width="70px"
        divArray[1].style.width="560px"
        divArray[2].style.display='none'
        divArray[0].innerText=divArray[0].style.width+'  left'
        divArray[2].innerText=divArray[2].style.width+'  right'
    } else if (1000 <= size.width && size.width < 1270) {//3分割
        console.log('3分割')
        divArray[0].style.width="70px"
        divArray[1].style.width="560px"
        divArray[2].style.width="350px"
        divArray[2].style.display='block'
        divArray[0].innerText=divArray[0].style.width+'  left'
        divArray[2].innerText=divArray[2].style.width+'  right'
    }else if (1270 <= size.width) {//3分割 すべて展開
        console.log('すべて展開')
        divArray[0].style.width="250px"
        divArray[1].style.width="560px"
        divArray[2].style.width="350px"
        divArray[2].style.display='block'
        divArray[0].innerText=divArray[0].style.width+'  left'
        divArray[2].innerText=divArray[2].style.width+'  right'

    }
}