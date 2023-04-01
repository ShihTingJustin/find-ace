"use strict";

// ======階段一 開始======
const playerRecords = document.querySelectorAll(".table tbody tr");
const thumbsUpIconHTML = '<i class="fa fa-thumbs-up"></i>';

for (let i = 0; i < playerRecords.length; i++) {
  const score = parseInt(playerRecords[i].children[1].textContent, 10);
  if (score >= 20) {
    // 使用 innerHTML 加入按讚符號
    playerRecords[i].children[0].innerHTML += thumbsUpIconHTML;
  }
}
// ======階段一 結束======

// // ======階段二 開始======
// const playerRecords = document.querySelectorAll('.table tbody tr')

// for (let i = 0; i < playerRecords.length; i++) {
//   const score = parseInt(playerRecords[i].children[1].textContent, 10)
//   if (score >= 20) {
//     // 建立新的 DOM 元素，修改該元素的 class name，再把元素加到球員名字後面
//     const thumbsUpIcon = document.createElement('i')
//     thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//     playerRecords[i].children[0].appendChild(thumbsUpIcon)
//   }
// }
// // ======階段二 結束======
