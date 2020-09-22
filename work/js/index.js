window.onload = () => {


    /************************************************************************/
    // 画面サイズ変更
    /************************************************************************/
    changeSize() //画面読み込み時に画面調整
    window.addEventListener('resize', changeSize) //サイズを変更すると画面調整

    // 大きさ設定
    let divArray = Array.from(document.querySelectorAll('div.main'))
        // divArray[0].style.width = "70px"
        // divArray[1].style.width = "560px"
        // divArray[2].style.width = '350px'


    // 左のアイコンをクリックしたときの処理
    //アイコン押したら青くなる処理
    let aTags = Array.from(document.querySelectorAll('div.left a.simple-icon'))
    aTags.forEach(aTag => {
            aTag.addEventListener('click', (e) => {
                //遷移防止
                e.preventDefault()
                    //一旦ボタンの色を戻す(白にする)
                aTags.forEach(aTag2 => aTag2.firstElementChild.style.webkitFilter = "")
                    //クリックしたアイコンの色を変える
                e.target.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
            })
        })
        //右側の検索バーにフォーカスしたら、周りに青い線を入れる
    let input_serach_bar = document.querySelector('input.search-bar')
    let searchIcon = document.querySelector('.search-icon')
    let input_serach_bar_parent = document.querySelector('.search-bar-parent')
    input_serach_bar.addEventListener('focus', (e) => {
        input_serach_bar_parent.style.border = "1px solid rgba(0,151,236)"
        console.log(searchIcon)
        searchIcon.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
    })
}

function changeSize() {
    console.log('画面')
    let divArray = Array.from(document.querySelectorAll('div.main'))
    let divIconContainer = Array.from(document.querySelectorAll('.icon-container'))
    let divIconDiscription = Array.from(document.querySelectorAll('.icon-discription'))
    let size = {
        'width': document.documentElement.clientWidth,
        'height': document.documentElement.clientHeight
    }
    console.log('width', size.width)

    if (1270 <= size.width) { //3分割 すべて展開

        console.log('すべて展開')
        divArray[1].style.width = "560px"
        divArray[2].style.width = "350px"
        divArray[2].style.display = 'block'
        divArray[0].style.width = "250px"
            //アイコンを左に寄せる
        divIconContainer.forEach(div => {
                console.log('aaa')
                div.className = div.className.replace('div-outside-image', 'if-spread')
            })
            // アイコンの説明を表示
        divIconDiscription.forEach(div => div.style.display = 'block')

    } else {
        //アイコンをもとに戻す
        divIconContainer.forEach(div => {
                div.className = div.className.replace('if-spread', 'div-outside-image')
            })
            //アイコン説明を非表示
        divIconDiscription.forEach(div => div.style.display = 'none')
        if (size.width < 950) { //それより小さい縦幅なら
            let setSize = size.width - 100 > 560 ? 560 : size.width - 100
            divArray[1].style.width = setSize + "px;"
            divArray[2].style.display = 'none'

        } else if (950 <= size.width && size.width < 1000) { //2分割
            console.log('2分割')
            divArray[0].style.width = "70px"
            divArray[1].style.width = "560px"
            divArray[2].style.display = 'none'
        } else if (1000 <= size.width && size.width < 1270) { //3分割
            console.log('3分割')
            divArray[0].style.width = "70px"
            divArray[1].style.width = "560px"
            divArray[2].style.width = "350px"
            divArray[2].style.display = 'block'

        }
    }
}

function focusOut(e) {
    let input_serach_bar_parent = document.querySelector('.search-bar-parent')
    let searchIcon = document.querySelector('.search-icon')
    searchIcon.style.webkitFilter = ""
    input_serach_bar_parent.style.border = ""
}