boardPrint()

function boardPrint(){
    let boardList=JSON.parse(localStorage.getItem('localBoardList'))
    if(boardList==null){
        boardList=[]
    }    
    let html=''
    for(let i=0;i<=boardList.length-1;i++){
        html += `<tr>
                    <td><a href="view.html?no=${boardList[i].no}>${boardList[i].no}</a></td>
                    <td><a href="view.html?no=${boardList[i].no}>${boardList[i].content}</a></td>
                </tr>`
    }
    document.querySelector('#boardList').innerHTML=html
}