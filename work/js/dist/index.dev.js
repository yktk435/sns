"use strict";

window.onload = function () {
  /************************************************************************/
  // 画面サイズ変更

  /************************************************************************/
  changeSize(); //画面読み込み時に画面調整

  window.addEventListener('resize', changeSize); //サイズを変更すると画面調整
  // 大きさ設定

  var divArray = Array.from(document.querySelectorAll('div.main')); // divArray[0].style.width = "70px"
  // divArray[1].style.width = "560px"
  // divArray[2].style.width = '350px'
  // 左のアイコンをクリックしたときの処理
  //アイコン押したら青くなる処理

  var aTags = Array.from(document.querySelectorAll('.spreaded-icon-a'));
  aTags.forEach(function (aTag) {
    aTag.addEventListener('click', function (e) {
      //遷移防止
      // e.preventDefault()
      //一旦ボタンの色を戻す(白にする)
      aTags.forEach(function (aTag2) {
        return aTag2.style = "";
      }); //クリックしたアイコンの色を変える

      e.target.closest('.spreaded-icon-a').style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
    });
  }); //右側の検索バーにフォーカスしたら、周りに青い線を入れる

  var input_serach_bar = document.querySelector('input.search-bar');
  var searchIcon = document.querySelector('.search-icon');
  var input_serach_bar_parent = document.querySelector('.search-bar-parent');
  input_serach_bar.addEventListener('focus', function (e) {
    input_serach_bar_parent.style.border = "1px solid rgba(0,151,236)";
    console.log(searchIcon);
    searchIcon.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
  });
};

function changeSize() {
  console.log('画面');
  var divArray = Array.from(document.querySelectorAll('div.main'));
  var divIconContainer = Array.from(document.querySelectorAll('.mark'));
  var divIconDiscription = Array.from(document.querySelectorAll('.icon-discription'));
  var size = {
    'width': document.documentElement.clientWidth,
    'height': document.documentElement.clientHeight
  }; // スクロールのための画面の高さ変更

  var headerfirstElementChild = document.querySelector('header').firstElementChild;
  var mainfirstElementChild = document.querySelector('.main-container');
  var rightArea = document.querySelector('.main.right.border');
  headerfirstElementChild.style.height = document.documentElement.clientHeight + "px";
  mainfirstElementChild.style.height = document.documentElement.clientHeight - 50 + "px";
  rightArea.style.height = document.documentElement.clientHeight + "px"; // スクロールのための画面の高さ変更 終わり

  if (1270 <= size.width) {
    //3分割 すべて展開
    console.log('すべて展開');
    divArray[1].style.width = "560px";
    divArray[2].style.width = "350px";
    divArray[2].style.display = 'block';
    divArray[0].style.width = "250px"; //アイコンを左に寄せる

    divIconContainer.forEach(function (div) {
      if (div.className.match(/outer/)) {
        console.log('outer → if-spreaded');
        div.className = div.className.replace('outer', 'if-spreaded');
      }
    }); // アイコンの説明を表示

    divIconDiscription.forEach(function (div) {
      return div.style.display = 'block';
    });
  } else {
    //アイコンをもとに戻す
    divIconContainer.forEach(function (div) {
      if (div.className.match(/if-spreaded/)) {
        console.log('if-spreaded → outer');
        div.className = div.className.replace('if-spreaded', 'outer');
      }
    }); //アイコン説明を非表示

    divIconDiscription.forEach(function (div) {
      return div.style.display = 'none';
    });

    if (size.width < 950) {
      //それより小さい縦幅なら
      var setSize = size.width - 100 > 560 ? 560 : size.width - 100;
      divArray[1].style.width = setSize + "px;";
      divArray[2].style.display = 'none';
    } else if (950 <= size.width && size.width < 1000) {
      //2分割
      console.log('2分割');
      divArray[0].style.width = "70px";
      divArray[1].style.width = "560px";
      divArray[2].style.display = 'none';
    } else if (1000 <= size.width && size.width < 1270) {
      //3分割
      console.log('3分割');
      divArray[0].style.width = "70px";
      divArray[1].style.width = "560px";
      divArray[2].style.width = "350px";
      divArray[2].style.display = 'block';
    }
  }
}

function focusOut(e) {
  var input_serach_bar_parent = document.querySelector('.search-bar-parent');
  var searchIcon = document.querySelector('.search-icon');
  searchIcon.style.webkitFilter = "";
  input_serach_bar_parent.style.border = "";
}
/******************************************/
// 通知

/******************************************/
//すべて・返信の切り替え


function notificationToggle(e) {
  var all = document.querySelector('.notification-button-all');
  var rep = document.querySelector('.notification-button-rep');

  if (e.innerText.match(/すべて/)) {
    console.log('OK');
    all.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
    rep.style.webkitFilter = "";
  } else {
    all.style.webkitFilter = "";
    rep.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
  }

  return false; // console.log(e.className)
}
/******************************************/
// プロフィール

/******************************************/
//メニューをクリックすると下がブルーの線になる


function BlueLineWhenClick(e) {
  var menus = document.querySelectorAll('#prof-menu');
  menus.forEach(function (menu) {
    menu.style.webkitFilter = "";
  });
  e.style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
}

var aTags = Array.from(document.querySelectorAll('.spreaded-icon-a'));
aTags.forEach(function (aTag) {
  aTag.addEventListener('click', function (e) {
    //遷移防止
    e.preventDefault(); //一旦ボタンの色を戻す(白にする)

    aTags.forEach(function (aTag2) {
      return aTag2.style = "";
    }); //クリックしたアイコンの色を変える

    e.target.closest('.spreaded-icon-a').style.webkitFilter = "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)";
  });
});