// let p1Display = document.querySelector('#p1Display');
// let p2Display = document.querySelector('#p2Display');

// let p1Button = document.querySelector('#p1Button');
// console.log(p1Button);
// let p2Button = document.querySelector('#p2Button');
// console.log(p2Button);
// let resetButton = document.querySelector('#reset');
// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = true;

// p1Button.addEventListener("click", function () {
//     if (isGameOver) { // เพื่อบอกว่าเกมยังไม่จบให้มันบวกคะแนนลงไปใน p1score
//         p1Score += 1
//         if (p1Score == winningScore) {
//             isGameOver = false
//         }
//     }
//     p1Display.textContent = p1Score
// })

// p2Button.addEventListener('click', function () {
//     if (isGameOver) {
//         // ตามที่ผมเข้าใจอันนี้คือตอนแรกตัวแปร isgameover เป็ฯ FALSE แล้วมันมี !มันเลยกลางเป็น trueเพื่อบังคับให้มันเข้า if ใช่ไหมคับ
//         p2Score += 1
//         if (p2Score == winningScore) {
//             isGameOver = false
//         }
//     }
//     p2Display.textContent = p2Score
// })
// resetButton.addEventListener('click', function () {
//     isGameOver = false
//     p1Score = 0
//     p2Score = 0
//     p1Display.textContent = p1Score
//     p2Display.textContent = p2Score
// })



// // let p1Display = document.querySelector('#p1Display'); //ลบได้เลยหลังจาก refactor
// // let p2Display = document.querySelector('#p2Display');
// // let plusbutton1 = document.querySelector('#plusbutton');
// // let plusbutton2 = document.querySelector('#minusbutton');
// let resetbutton = document.querySelector('#resetbutton');
// let playto = document.querySelector('#playto')
// p1Score = 0
// p2Score = 0

// let winningScore = 8
// let flag = true
// // plusbutton1.addEventListener('click', () => {
// //     if (p1Score !== winningScore) {
// //         p1Score = p1Score + 1
// //         p1Display.innerHTML = p1Score
// //     } else {
// //         flag = false
// //         // p1Display.style.color = "red"
// //         p1Display.classList.add('winner')
// //         p2Display.classList.add('loser')
// //     }


// // })
// // plusbutton2.addEventListener('click', () => {
// //     if (p2Score !== winningScore) {
// //         p2Score = p2Score + 1
// //         p2Display.innerHTML = p2Score
// //     } else {
// //         flag = false
// //         p1Display.classList.add('loser')
// //         p2Display.classList.add('winner')
// //     }

// // }) //ทำการ refactor
// let p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// };

// let p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// };
// p1Button.addEventListener('click', function () {
//     updateScore(p1, p2);
// });

// p2Button.addEventListener('click', function () {
//     updateScore(p2, p1);
// });

// function updateScore(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         console.log(player.score);

//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('winner');
//             opponent.display.classList.add('loser');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }

//         player.display.textContent = player.score;
//     }
// }

// resetbutton.addEventListener('click', reset)

// playto.addEventListener('change', () => {
//     alert(playto.value)
//     reset()
// })
// function reset() {
//     p1Score = 0
//     p2Score = 0
//     p1Display.innerHTML = p1Score
//     p2Display.innerHTML = p2Score
//     p1Display.classList.remove('winner', 'loser')
//     p2Display.classList.remove('winner', 'loser')
// }


let p1 = {
    score: 0,
    button: document.querySelector('#plusbutton'),
    display: document.querySelector('#p1Display')
};

let p2 = {
    score: 0,
    button: document.querySelector('#minusbutton'),
    display: document.querySelector('#p2Display')
};

let resetbutton = document.querySelector('#resetbutton');
let playto = document.querySelector('#playto');

let isGameOver = false;
let winningScore = 3; // กำหนดค่าเริ่มต้น

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;

        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.textContent = player.score;
    }
}

resetbutton.addEventListener('click', reset);

playto.addEventListener('change', function () {
    winningScore = Number(playto.value);
    alert(playto.value)
    reset();
});

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}
