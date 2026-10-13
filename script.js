// JavaScript
console.log('Hello world!');

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
//console.log(main);
//console.log(thumbs);

const text = document.querySelector('#caption');

//thumbs.forEach(function(item, index) {
//  item.onmouseover = function() {
 //   main.src = this.dataset.image;
 //   text.textContent = this.title;
 // }
//});

//イベントリスナー
thumbs.forEach(function (item, index) {
function change() {
   main.src = this.dataset.image;
 }
 item.addEventListener('mouseover', change);
});