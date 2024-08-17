let heading = document.querySelector("p");
let container = document.querySelector(".container");
let t1 = document.querySelector(".one");
let t2 = document.querySelector(".two");
let t3 = document.querySelector(".three");
let t4 = document.querySelector(".four");
let t5 = document.querySelector(".five");
let t6 = document.querySelector(".six");
let t7 = document.querySelector(".seven");
let t8 = document.querySelector(".eight");
let t9 = document.querySelector(".nine");
let tiles = document.querySelectorAll(".tile");
let reset_btn = document.querySelector(".reset");

let matrix = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let turn = false;
let won = false;

reset_btn.addEventListener("click", function(){
    reset();
});

function headingUpdate(){
    if(turn === false){
        heading.innerText = "X's Turn";
    }else{
        heading.innerText = "O's Turn";
    }
}

function addText(tileNo, a, b){
    if(turn === false){
        tileNo.innerText = "X";
        turn = true;
        matrix[a][b] = 1;
    }else{
        tileNo.innerText = "O";
        turn = false;
        matrix[a][b] = 0;
    } 
}

t1.addEventListener("click", function(){
    addText(t1, 0, 0);
    t1.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
    
});
t2.addEventListener("click", function(){
    addText(t2, 0, 1);
    t2.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t3.addEventListener("click", function(){
    addText(t3, 0, 2);
    t3.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t4.addEventListener("click", function(){
    addText(t4, 1, 0);
    t4.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t5.addEventListener("click", function(){
    addText(t5, 1, 1);
    t5.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t6.addEventListener("click", function(){
    addText(t6, 1, 2);
    t6.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t7.addEventListener("click", function(){
    addText(t7, 2, 0);
    t7.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t8.addEventListener("click", function(){
    addText(t8, 2, 1);
    t8.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});
t9.addEventListener("click", function(){
    addText(t9, 2, 2);
    t9.style.pointerEvents = "none";
    headingUpdate();
    chkWinner();
});

function chkWinner(){
    if(matrix[0][0] == 0 && matrix[0][1] == 0 && matrix[0][2] == 0 ||
        matrix[1][0] == 0 && matrix[1][1] == 0 && matrix[1][2] == 0 ||
        matrix[2][0] == 0 && matrix[2][1] == 0 && matrix[2][2] == 0 ||
        matrix[0][0] == 0 && matrix[1][0] == 0 && matrix[2][0] == 0 ||
        matrix[0][1] == 0 && matrix[1][1] == 0 && matrix[2][1] == 0 ||
        matrix[0][2] == 0 && matrix[1][2] == 0 && matrix[2][2] == 0 ||
        matrix[0][0] == 0 && matrix[1][1] == 0 && matrix[2][2] == 0 ||
        matrix[0][2] == 0 && matrix[1][1] == 0 && matrix[2][0] == 0){
        heading.innerText = "Winner";
        won = true;
        for(i of tiles){
            i.style.pointerEvents = "none";
        }
        winnerDisplay("O");
    }
    else if(matrix[0][0] == 1 && matrix[0][1] == 1 && matrix[0][2] == 1 ||
        matrix[1][0] == 1 && matrix[1][1] == 1 && matrix[1][2] == 1 ||
        matrix[2][0] == 1 && matrix[2][1] == 1 && matrix[2][2] == 1 ||
        matrix[0][0] == 1 && matrix[1][0] == 1 && matrix[2][0] == 1 ||
        matrix[0][1] == 1 && matrix[1][1] == 1 && matrix[2][1] == 1 ||
        matrix[0][2] == 1 && matrix[1][2] == 1 && matrix[2][2] == 1 ||
        matrix[0][0] == 1 && matrix[1][1] == 1 && matrix[2][2] == 1 ||
        matrix[0][2] == 1 && matrix[1][1] == 1 && matrix[2][0] == 1){
        heading.innerText = "Winner";
        won = true;
        for(i of tiles){
            i.style.pointerEvents = "none";
        }
        winnerDisplay("X");
    }
    else if(matrix[0].indexOf(-1) == -1 && matrix[1].indexOf(-1) == -1 && matrix[2].indexOf(-1) == -1){
        heading.innerText = "Draw";
        won = true;
        winnerDisplay("XO");
    }
}

function winnerDisplay(win){
    let label = document.createElement("div");
    heading.parentNode.insertBefore(label, heading.nextSibling);
    container.classList.add("fade");
    label.innerText = win;
    label.classList.add("winner")
    label.classList.add("winneranimation");
    if(win == "XO"){
        label.style.left = "42%";
    }
}


function reset(){
    matrix = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    turn = false;
    heading.innerText = "X's Turn";
    for(i of tiles){
        i.innerText = "";
        i.style.pointerEvents = "auto";
        container.classList.remove("fade");
        if(won === true){
            let label = document.querySelector(".winner");
            label.innerText = "";
            label.classList.remove("winneranimation");
        }
    }
}