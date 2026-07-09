let ttt= [null,null,null,null,null,null,null,null,null]
let turn=1; let end
if (tun%2==1&&turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    if (ttt[indexO] == null )
        ttt[indexO]='O'
    else{
        indexO = Number(promt('번호입력(0~9):'))
        ttt[indexO]='O'
    }
    
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
        end = true
    else
        end = false
    turn++
}
if (turn%2==1 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='X'
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
        end = true
    turn++
}
if (turn%2==0 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    end =(( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
    turn++
}
if (turn%2==1 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
        end = true
    turn++
}
if (turn%2==0 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    end =(( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
    turn++
}
if (turn%2==1 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
        end = true
    turn++
}
if (turn%2==0 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    end =(( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
    turn++
}
if (turn%2==1 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    if (( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
        end = true
    turn++
}
if (turn%2==0 && turn <10 && end == false){
    let indexO = Number(promt('번호입력(0~9):'))
    ttt[indexO]='O'
    end =(( ttt[0]=='O'&&ttt[1]=="O"&&ttt[2]=='O')||(ttt[3]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[6]=='O'&&ttt[7]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[3]=="O"&&ttt[6]=='O')||(ttt[1]=='O'&&ttt[4]=="O"&&ttt[7]=='O')||(ttt[2]=='O'&&ttt[5]=="O"&&ttt[8]=='O')||
        (ttt[0]=='O'&&ttt[4]=="O"&&ttt[5]=='O')||(ttt[2]=='O'&&ttt[4]=="O"&&ttt[6]=='O')||
        ( ttt[0]=='X'&&ttt[1]=="X"&&ttt[2]=='X')||(ttt[3]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[6]=='X'&&ttt[7]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[3]=="X"&&ttt[6]=='X')||(ttt[1]=='X'&&ttt[4]=="X"&&ttt[7]=='X')||(ttt[2]=='X'&&ttt[5]=="X"&&ttt[8]=='X')||
        (ttt[0]=='X'&&ttt[4]=="X"&&ttt[5]=='X')||(ttt[2]=='X'&&ttt[4]=="X"&&ttt[6]=='X'))
    turn++
}


/* 012
345
678 */

/*036 147 258
045 246 */

