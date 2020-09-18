window.onload = () => {
    // 大きさ設定
    let divArray = Array.from(document.querySelectorAll('div.main'))
    divArray[0].style.width = "70px"
    divArray[1].style.width = "560px"
    divArray[2].style.width = '350px'


    // 左のアイコンをクリックしたときの処理
    let aTags = Array.from(document.querySelectorAll('div.left a'))
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
}