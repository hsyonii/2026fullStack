// 예제1
const dom = document.querySelector('#title')
dom.innerHTML = 'DOM 조작 성공!'

// 예제2
function greetingMessage(){
    const nameInput = document.querySelector('#name_input')
    let html2 = `안녕하세요 ${nameInput.value}님!`
    document.querySelector("p").innerHTML = html2
}

// 예제3
document.querySelector('#color_box').style =
    "border: solid 2px aqua; weight: 50px; height: 100px;"
function colorChange(){
    document.querySelector('#color_box').style =
    "border: solid 2px aqua; weight: 50px; height: 100px; background-color:aqua; color: white"
}

// 예제4


// 예제5
document.querySelector('#target').style=
    "border: solid 2px red; weight: 50px; height: 100px;" 
function removeTarget(){
    document.querySelector('#target').remove()
}