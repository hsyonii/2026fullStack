let name = prompt("이름을 입력하세요.")
let menu = prompt("주문하실 메뉴를 입력하세요.")
let num = prompt("메뉴의 수량을 입력하세요.")
console.log("[주문서]\n이름: ",name, "\n메뉴: ", menu, "\n수량:", num)

document.querySelector("h3").innerHTML = "주문서를 보려면 f12를 누르세요."