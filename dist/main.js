!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={blockSize:30,rows:18,columns:10,speed:400,gameStatut:"notStarted",devMode:!1,deletionAnimationSpeed:500,previewSize:4},i={updateGameConfiguration(){const e=document.getElementById("rowNumber"),t=document.getElementById("columnNumber"),n=document.getElementById("blockSize"),i=document.getElementById("blockSpeed"),r=o.rows===parseInt(e.value,10)&&o.columns===parseInt(t.value,10)&&o.blockSize===parseInt(n.value,10);return o.rows=parseInt(e.value,10),o.columns=parseInt(t.value,10),o.blockSize=parseInt(n.value,10),o.speed=100*parseInt(i.value,10),!r},displayInitialConfiguration(){document.getElementById("rowNumber").value=o.rows,document.getElementById("columnNumber").value=o.columns,document.getElementById("blockSize").value=o.blockSize,document.getElementById("blockSpeed").value=o.speed/100},enableDisplay(e){document.getElementById("rowNumber").disabled=!e,document.getElementById("columnNumber").disabled=!e,document.getElementById("blockSize").disabled=!e,document.getElementById("blockSpeed").disabled=!e}},r={blocks:[],preview:[],deletingAnimation:"init",generatePlaygroundGrid(){const e=document.getElementById("playground"),t=document.querySelector("html");t.style.setProperty("--columns",o.columns),t.style.setProperty("--rows",o.rows),t.style.setProperty("--block-width",o.blockSize+"px");const n=o.rows*o.columns;for(let t=0;t<n;t++){let n=document.createElement("div");n.className="playgroundBlock",o.devMode&&(n.innerHTML=t),e.appendChild(n)}for(let t=0;t<o.columns;t++){let t=document.createElement("div");t.className="playgroundBottom taken",e.appendChild(t)}this.blocks=Array.from(document.querySelectorAll(".grid div"))},generatePreviewGrid(){const e=document.getElementById("nextTetrominoBox");document.querySelector("html");for(let t=0;t<16;t++){let n=document.createElement("div");n.className="playgroundBlock",o.devMode&&(n.innerHTML=t),e.appendChild(n)}this.preview=Array.from(document.querySelectorAll("#nextTetrominoBox div"))},cleanPreviewGrid(){this.preview.forEach(e=>e.className="playgroundBlock")},cleanPlaygroundGrid(){const e=document.getElementById("playground");for(;e.firstChild;)e.removeChild(e.firstChild)},handleConfigUpdate(){i.updateGameConfiguration()&&(this.cleanPlaygroundGrid(),this.generatePlaygroundGrid())},lineIsMade(){let e=[],t=[];for(let t=0;t<o.columns;t++)e.push(t);for(let n=0;n<o.rows;n++){e.every(e=>this.blocks[n*o.columns+e].classList.contains("taken")||this.blocks[n*o.columns+e].classList.contains("tetromino"))&&t.push(n)}return t.length,t},animateDeleteLine(e){for(let t=0;t<o.columns;t++)e.forEach(e=>this.blocks[o.columns*e+t].className="playgroundBlock taken erasing")},deleteLine(e){for(let t=0;t<e.length;t++){let n=[];for(let i=0;i<e[t]*o.columns;i++)n.push(this.blocks[i].className),this.blocks[i].className="playgroundBlock";for(let i=0;i<e[t]*o.columns;i++){!this.blocks[i+o.columns].className.includes("playgroundBottom")&&(this.blocks[i+o.columns].className=n[i])}}}},s={number:0,position:0,rotation:0,current:[],next:{},theTetrominoes:[],theTetrominoesPreview:[],createTetrominoes:e=>[[[1,e+1,2*e+1,3*e+1],[0,1,2,3],[1,e+1,2*e+1,3*e+1],[0,1,2,3]],[[0,e,e+1,e+2],[1,2,e+1,2*e+1],[0,1,2,e+2],[1,e+1,2*e,2*e+1]],[[2,e,e+1,e+2],[1,e+1,2*e+1,2*e+2],[0,1,2,e],[0,1,e+1,2*e+1]],[[1,2,e+1,e+2],[1,2,e+1,e+2],[1,2,e+1,e+2],[1,2,e+1,e+2]],[[1,2,e,e+1],[1,e+1,e+2,2*e+2],[1,2,e,e+1],[1,e+1,e+2,2*e+2]],[[0,1,e+1,e+2],[2,e+1,e+2,2*e+1],[0,1,e+1,e+2],[2,e+1,e+2,2*e+1]],[[1,e,e+1,e+2],[1,e+1,e+2,2*e+1],[0,1,2,e+1],[2,e+1,e+2,2*e+2]]],initPreview(){const e=Math.floor(Math.random()*this.theTetrominoes.length),t=Math.floor(Math.random()*this.theTetrominoes[this.number].length),n=this.theTetrominoesPreview[e][t];this.next={number:e,rotation:t,tetromino:n}},initTetromino(){"notStarted"===o.gameStatut&&(this.theTetrominoes=this.createTetrominoes(o.columns),this.theTetrominoesPreview=this.createTetrominoes(o.previewSize),this.initPreview()),this.number=this.next.number,this.rotation=this.next.rotation,this.position=Math.floor(o.columns/2-1),this.initPreview(),this.current=this.theTetrominoes[this.number][this.rotation]},rotateTetromino(e){let t=this.rotation;"right"===e?t++:t--,t>=this.theTetrominoes[this.number].length&&(t=0),t<0&&(t=this.theTetrominoes[this.number].length-1);const n=this.theTetrominoes[this.number][t],i=n.some(e=>r.blocks[this.position+e+o.columns].classList.contains("taken")),s=n.some(e=>(e+this.position)%o.columns==0),a=n.some(e=>(e+this.position+1)%o.columns==0);i||s&&a||(this.undraw(),this.current=n,this.rotation=t,this.draw())},drawPreview(){r.cleanPreviewGrid(),this.next.tetromino.forEach(e=>{r.preview[e].classList.add("tetromino"),r.preview[e].classList.add("colorT"+this.next.number.toString())})},draw(){this.current.forEach(e=>{r.blocks[this.position+e].classList.add("tetromino"),r.blocks[this.position+e].classList.add("colorT"+this.number.toString())})},drawNew(){this.initTetromino(),this.draw(),this.drawPreview()},undraw(){this.current.forEach(e=>{r.blocks[this.position+e].className="playgroundBlock"})},moveDown(){this.undraw(),this.position+=o.columns,this.draw()},moveLeft(){this.current.some(e=>(e+this.position)%o.columns==0)||this.lateralBlock("left")||(this.undraw(),this.position--,this.draw())},pushDown(){"init"===r.deletingAnimation&&(this.freeze()||(this.undraw(),this.position+=o.columns,this.draw()))},moveRight(){this.current.some(e=>(e+this.position+1)%o.columns==0)||this.lateralBlock("right")||(this.undraw(),this.position++,this.draw())},freeze(){return!!this.current.some(e=>r.blocks[this.position+e+o.columns].classList.contains("taken"))&&(this.current.forEach(e=>{r.blocks[e+this.position].classList.add("taken")}),!0)},lateralBlock(e){let t;return t="right"===e?1:-1,this.current.some(e=>r.blocks[this.position+e+t].classList.contains("taken"))}},a={endGame(e){const t=e?"flex":"none";document.getElementById("endGame").style.display=t,e&&(document.getElementById("finalScore").innerHTML=d.gameScore)},pause(e){const t=e?"block":"none";document.getElementById("gamePaused").style.display=t}},l={handleKeyPress(e){"play"===o.gameStatut&&(37===e.keyCode&&s.moveLeft(),39===e.keyCode&&s.moveRight(),40===e.keyCode&&s.pushDown(),65===e.keyCode&&s.rotateTetromino("left"),90===e.keyCode&&s.rotateTetromino("right"))},initListener(){document.getElementById("configPanel").addEventListener("change",()=>r.handleConfigUpdate()),document.getElementById("resetButton").addEventListener("click",()=>d.reset()),document.getElementById("startButton").addEventListener("click",()=>d.start()),document.addEventListener("keydown",this.handleKeyPress)},removeListener(){document.getElementById("configPanel").removeEventListener("change",()=>r.handleConfigUpdate()),document.getElementById("resetButton").removeEventListener("click",()=>d.reset()),document.getElementById("startButton").removeEventListener("click",()=>d.start()),document.removeEventListener("keydown",this.handleKeyPress)}},d={gameScore:0,timerId:0,init(){i.displayInitialConfiguration(),i.enableDisplay(!0),r.generatePlaygroundGrid(),r.generatePreviewGrid(),l.initListener()},start(){"lost"===o.gameStatut&&this.reset(),"notStarted"===o.gameStatut&&(this.gameScore=0,this.updateScore(0),a.endGame(!1),i.enableDisplay(!1),s.drawNew()),"pause"===o.gameStatut||"notStarted"===o.gameStatut?(this.timerId=setInterval(this.gameActive.bind(this),o.speed),document.getElementById("startButton").innerHTML="Pause Game",a.pause(!1),o.gameStatut="play"):this.pause()},pause(){o.gameStatut="pause",a.pause(!0),document.getElementById("startButton").innerHTML="Resume",clearInterval(this.timerId)},reset(){r.cleanPreviewGrid(),r.cleanPlaygroundGrid(),r.generatePlaygroundGrid(),s.initTetromino(),clearInterval(this.timerId),a.pause(!1),a.endGame(!1),o.gameStatut="notStarted",r.deletingAnimation="init",i.enableDisplay(!0),this.gameScore=0,this.updateScore(0),document.getElementById("startButton").innerHTML="Start Game"},updateScore(e){const t=e*e*10;this.gameScore+=t,document.getElementById("score").innerHTML=this.gameScore},gameActive(){if("onGoing"===r.deletingAnimation)return;const e=r.lineIsMade(),t=s.freeze();if(t&&e.length&&"done"!==r.deletingAnimation)return this.updateScore(e.length),r.animateDeleteLine(e),r.deletingAnimation="onGoing",void setTimeout(()=>{r.deletingAnimation="done"},o.deletionAnimationSpeed);if(t){r.deleteLine(e),r.deletingAnimation="init",s.drawNew();this.loseCondition()&&(clearInterval(this.timerId),o.gameStatut="lost",document.getElementById("startButton").innerHTML="Restart",a.endGame(!0))}else s.moveDown()},loseCondition:()=>s.current.some(e=>r.blocks[s.position+e].classList.contains("taken"))};d.init()}]);