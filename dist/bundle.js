(()=>{"use strict";function e(){littleBlueScreen=document.createElement("div"),main.classList.add("mainOpacity"),littleBlueScreen.classList.add("littleBlueScreen"),body.appendChild(littleBlueScreen)}function t(){const e=document.createElement("img"),t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("button");e.setAttribute("src","./images/loseImg.png"),s.style.marginRight="0.1px",s.style.marginBottom="48px",s.style.marginTop="40px",e.style.marginTop="30px",t.classList.add("finalText"),a.classList.add("spentTime"),i.classList.add("yourTime"),s.classList.add("restartButton"),t.textContent="Вы проиграли!",a.textContent="Затраченное время:",i.textContent=timer.value,clearInterval(timerEngine),s.textContent="Играть снова",s.addEventListener("click",(()=>{main.classList.remove("mainOpacity"),document.querySelectorAll(".littleBlueScreen").forEach((e=>{remove(e),e.classList.remove("littleBlueScreen")})),remove(main),l()})),littleBlueScreen.appendChild(e),littleBlueScreen.appendChild(t),littleBlueScreen.appendChild(a),littleBlueScreen.appendChild(i),littleBlueScreen.appendChild(s)}function a(){const e=document.createElement("img"),t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("button");e.setAttribute("src","./images/winImg.png"),s.style.marginRight="0.1px",s.style.marginBottom="48px",s.style.marginTop="40px",e.style.marginTop="30px",t.classList.add("finalText"),a.classList.add("spentTime"),i.classList.add("yourTime"),s.classList.add("restartButton"),t.textContent="Вы выиграли!",a.textContent="Затраченное время:",i.textContent=timer.value,clearInterval(timerEngine),s.textContent="Играть снова",s.addEventListener("click",(()=>{main.classList.remove("mainOpacity"),document.querySelectorAll(".littleBlueScreen").forEach((e=>{remove(e),e.classList.remove("littleBlueScreen")})),remove(main),l()})),littleBlueScreen.appendChild(e),littleBlueScreen.appendChild(t),littleBlueScreen.appendChild(a),littleBlueScreen.appendChild(i),littleBlueScreen.appendChild(s)}function i(){timerEngine=setInterval((()=>{clocker>=.6&&(clocker=.01,minClocker+=1),timer.value="0"+minClocker+clocker.toFixed(2).substring(1),clocker+=.01}),1e3)}function l(){remove(main),clearInterval(timerEngine);const s=document.createElement("div"),n=document.createElement("p"),r=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),o=document.createElement("button");r.classList.add("picker","first"),c.classList.add("picker","second"),d.classList.add("picker","third"),o.classList.add("startButton"),main.classList.add("mainHardnessPick"),s.classList.add("numbers"),n.classList.add("pick"),n.textContent="Выбери сложность",r.textContent="1",c.textContent="2",d.textContent="3",o.textContent="Старт",r.addEventListener("click",(()=>{r.classList.add("colorChanger"),c.classList.remove("colorChanger","pickAfterPick"),d.classList.remove("colorChanger","pickAfterPick"),r.classList.add("pickAfterPick"),window.gameState.hardness=1})),c.addEventListener("click",(()=>{r.classList.remove("colorChanger","pickAfterPick"),c.classList.add("colorChanger","pickAfterPick"),d.classList.remove("colorChanger","pickAfterPick"),c.classList.add("pickAfterPick"),window.gameState.hardness=2})),d.addEventListener("click",(()=>{r.classList.remove("colorChanger","pickAfterPick"),c.classList.remove("colorChanger","pickAfterPick"),d.classList.add("colorChanger"),d.classList.add("pickAfterPick"),window.gameState.hardness=3})),o.addEventListener("click",(s=>{if(s.preventDefault(),0!==window.gameState.hardness)return function(){main.classList.remove("mainHardnessPick"),remove(main),clearInterval(timerEngine),upperBar=document.createElement("div"),timer=document.createElement("input");const s=document.createElement("p"),n=document.createElement("p"),r=document.createElement("div"),c=document.createElement("div");mainBar=document.createElement("div");const d=document.createElement("button"),o=document.createElement("div");timer.classList.add("timer"),c.classList.add("timerBar"),upperBar.classList.add("upperBar"),mainBar.classList.add("mainBar"),r.classList.add("minSecBar"),s.classList.add("upperBarText"),n.classList.add("upperBarText"),d.classList.add("restartButton"),o.classList.add("comrade"),n.textContent="sek",s.textContent="min",d.textContent="Начать заново",timer.setAttribute("name","stopwatch"),timer.setAttribute("size","1"),timer.setAttribute("value","00.00"),timer.setAttribute("disabled","disabled"),c.appendChild(timer),c.appendChild(r),r.appendChild(s),r.appendChild(n),upperBar.appendChild(c),upperBar.appendChild(o),upperBar.appendChild(d),main.appendChild(upperBar),main.appendChild(mainBar),function(){timer.value="00.00";let l,s,n=["./cards/6byb.jpg","./cards/6cher.jpg","./cards/6pic.jpg","./cards/6kre.jpg","./cards/7byb.jpg","./cards/7cher.jpg","./cards/7pic.jpg","./cards/7kre.jpg","./cards/8byb.jpg","./cards/8cher.jpg","./cards/8kre.jpg","./cards/8pic.jpg","./cards/9pic.jpg","./cards/9kre.jpg","./cards/9byb.jpg","./cards/9cher.jpg","./cards/10pic.jpg","./cards/10kre.jpg","./cards/10byb.jpg","./cards/10cher.jpg","./cards/Jpic.jpg","./cards/Jkre.jpg","./cards/Jbyb.jpg","./cards/Jcher.jpg","./cards/Dpic.jpg","./cards/Dkre.jpg","./cards/Dbyb.jpg","./cards/Dcher.jpg","./cards/Kpic.jpg","./cards/Kkre.jpg","./cards/Kbyb.jpg","./cards/Kcher.jpg","./cards/Tpic.jpg","./cards/Tkre.jpg","./cards/Tbyb.jpg","./cards/Tcher.jpg"],r=[],c=-1,d=0,o=0;function m(){r.forEach((e=>{e===l&&(l=Math.round(36*Math.random()),m())}))}if(1===window.gameState.hardness){let h=[];for(let e=0;e<6;e++)l=Math.round(35*Math.random()),m(),r.push(l),h.push(n[l]),h.push(n[l]);h.sort((()=>Math.random()-.5));for(let e=0;e<h.length;e++){let t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");t.classList.add("wrap"),a.classList.add("front"),i.classList.add("back"),i.style.backgroundImage=`url(${h[e]})`,mainBar.appendChild(t),l.appendChild(a),l.appendChild(i),t.appendChild(l),l.classList.add("cardBack")}r=[],l=0,mainBar.classList.add("mainBar1"),mainBar.style.width="66%",mainBar.style.marginLeft="17%",mainBar.style.marginRight="17%",setTimeout((()=>{const e=setInterval((()=>{c+=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left-back 2s both",11===c&&clearInterval(e)}),200)}),1e3),setTimeout((()=>{c=12;const e=setInterval((()=>{c-=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left-back 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left 2s both",0===c&&clearInterval(e)}),200)}),7500),setTimeout((()=>{document.querySelectorAll(".cardBack").forEach((i=>{i.addEventListener("click",(()=>{if(i.firstChild.style.animation="flip-vertical-left 2s both",i.lastChild.style.animation="flip-vertical-left-back 2s both",d+=1,o+=1,i.classList.add("chosen"),12===o)remove(main),e(),a();else if(s===i.lastChild.style.backgroundImage){d=0,console.log("true");const e=document.querySelector(".comrade");e.style.color="#a2ff03",e.style.opacity="1";let t=["rotate-scale-up 2.9s both","rotate-scale-up-diag-1 2.9s both","shake-horizontal 2.9s both","bounce-top 2.9s both"],a=["В точку!","Вот это да!","Именно!","Ооо да...","Та самая карта!","Отличная память!","Не сбавляй темп!","Продолжай в том же духе!","Идешь на рекорд!","Еще немного..."];e.style.animation=t[Math.round(4*Math.random())],e.textContent=a[Math.round(10*Math.random())],document.querySelectorAll(".chosen").forEach((t=>{setTimeout((()=>{t.style.animation="true 2s both",setTimeout((()=>{t.classList.add("ashes"),e.animation="",e.style.opacity="0"}),2e3)}),1e3)}))}else if(2===d){d=0,console.log("false");const a=document.querySelector(".comrade");a.textContent="Упс...",a.style.color="#f75555",a.style.animation="false 2.9s",document.querySelectorAll(".chosen").forEach((i=>{setTimeout((()=>{i.style.animation="false 2s both",setTimeout((()=>{i.classList.add("ashes"),a.style.animation="",a.style.color="",remove(mainBar),e(),t()}),2e3)}),1e3)}))}s=i.lastChild.style.backgroundImage,console.log(i.lastChild.style.backgroundImage)}))})),i()}),11e3)}if(2===window.gameState.hardness){let h=[];for(let e=0;e<12;e++)l=Math.round(35*Math.random()),m(),r.push(l),h.push(n[l]),h.push(n[l]);h.sort((()=>Math.random()-.5));for(let e=0;e<h.length;e++){let t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");t.classList.add("wrap"),a.classList.add("front"),i.classList.add("back"),i.style.backgroundImage=`url(${h[e]})`,mainBar.appendChild(t),l.appendChild(a),l.appendChild(i),t.appendChild(l),l.classList.add("cardBack")}r=[],l=0,mainBar.classList.add("mainBar1"),mainBar.style.width="66%",mainBar.style.marginLeft="17%",mainBar.style.marginRight="17%",setTimeout((()=>{const e=setInterval((()=>{c+=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left-back 2s both",23===c&&clearInterval(e)}),200)}),1e3),setTimeout((()=>{c=24;const e=setInterval((()=>{c-=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left-back 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left 2s both",0===c&&clearInterval(e)}),200)}),15e3),setTimeout((()=>{document.querySelectorAll(".cardBack").forEach((i=>{i.addEventListener("click",(()=>{if(i.firstChild.style.animation="flip-vertical-left 2s both",i.lastChild.style.animation="flip-vertical-left-back 2s both",d+=1,o+=1,i.classList.add("chosen"),24===o)remove(main),e(),a();else if(s===i.lastChild.style.backgroundImage){d=0,console.log("true");const e=document.querySelector(".comrade");e.style.color="#a2ff03",e.style.opacity="1";let t=["rotate-scale-up 2.9s both","rotate-scale-up-diag-1 2.9s both","shake-horizontal 2.9s both","bounce-top 2.9s both"],a=["В точку!","Вот это да!","Именно!","Ооо да...","Та самая карта!","Отличная память!","Не сбавляй темп!","Продолжай в том же духе!","Идешь на рекорд!","Еще немного..."];e.style.animation=t[Math.round(4*Math.random())],e.textContent=a[Math.round(10*Math.random())],document.querySelectorAll(".chosen").forEach((t=>{setTimeout((()=>{t.style.animation="true 2s both",setTimeout((()=>{t.classList.add("ashes"),e.animation="",e.style.opacity="0"}),2e3)}),1e3)}))}else if(2===d){d=0,console.log("false");const a=document.querySelector(".comrade");a.textContent="Упс...",a.style.color="#f75555",a.style.animation="false 2.9s",document.querySelectorAll(".chosen").forEach((i=>{setTimeout((()=>{i.style.animation="false 2s both",setTimeout((()=>{i.classList.add("ashes"),a.style.animation="",a.style.color="",remove(mainBar),e(),t()}),2e3)}),1e3)}))}s=i.lastChild.style.backgroundImage,console.log(i.lastChild.style.backgroundImage)}))})),i()}),20500)}if(3===window.gameState.hardness){let h=[];for(let e=0;e<18;e++)l=Math.round(35*Math.random()),m(),r.push(l),h.push(n[l]),h.push(n[l]);h.sort((()=>Math.random()-.5));for(let e=0;e<h.length;e++){let t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");t.classList.add("wrap"),a.classList.add("front"),i.classList.add("back"),i.style.backgroundImage=`url(${h[e]})`,mainBar.appendChild(t),l.appendChild(a),l.appendChild(i),t.appendChild(l),l.classList.add("cardBack")}r=[],l=0,mainBar.classList.add("mainBar3"),mainBar.style.width="100%",setTimeout((()=>{const e=setInterval((()=>{c+=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left-back 2s both",35===c&&clearInterval(e)}),200)}),1e3),setTimeout((()=>{c=36;const e=setInterval((()=>{c-=1,mainBar.childNodes[c].firstChild.firstChild.style.animation="flip-vertical-left-back 2s both",mainBar.childNodes[c].firstChild.lastChild.style.animation="flip-vertical-left 2s both",0===c&&clearInterval(e)}),200)}),3e4),setTimeout((()=>{document.querySelectorAll(".cardBack").forEach((i=>{i.addEventListener("click",(()=>{if(i.firstChild.style.animation="flip-vertical-left 2s both",i.lastChild.style.animation="flip-vertical-left-back 2s both",d+=1,o+=1,i.classList.add("chosen"),36===o)remove(main),e(),a();else if(s===i.lastChild.style.backgroundImage){d=0,console.log("true");const e=document.querySelector(".comrade");e.style.color="#a2ff03",e.style.opacity="1";let t=["rotate-scale-up 2.9s both","rotate-scale-up-diag-1 2.9s both","shake-horizontal 2.9s both","bounce-top 2.9s both"],a=["В точку!","Вот это да!","Именно!","Ооо да...","Та самая карта!","Отличная память!","Не сбавляй темп!","Продолжай в том же духе!","Идешь на рекорд!","Еще немного..."];e.style.animation=t[Math.round(4*Math.random())],e.textContent=a[Math.round(10*Math.random())],document.querySelectorAll(".chosen").forEach((t=>{setTimeout((()=>{t.style.animation="true 2s both",setTimeout((()=>{t.classList.add("ashes"),e.animation="",e.style.opacity="0"}),2e3)}),1e3)}))}else if(2===d){d=0,console.log("false");const a=document.querySelector(".comrade");a.textContent="Упс...",a.style.color="#f75555",a.style.animation="false 2.9s",document.querySelectorAll(".chosen").forEach((i=>{setTimeout((()=>{i.style.animation="false 2s both",setTimeout((()=>{i.classList.add("ashes"),a.style.animation="",a.style.color="",remove(mainBar),e(),t()}),2e3)}),1e3)}))}s=i.lastChild.style.backgroundImage,console.log(i.lastChild.style.backgroundImage)}))})),i()}),38e3)}}(),d.addEventListener("click",(()=>{remove(mainBar),l()}))}();n.style.color="red",n.style.fontSize="45px"})),main.appendChild(n),main.appendChild(s),main.appendChild(o),s.appendChild(r),s.appendChild(c),s.appendChild(d)}window.onload=()=>{l()}})();
//# sourceMappingURL=bundle.js.map