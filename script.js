async function foo() {  //function gets executed onclicking Search button
    var title = document.querySelector(".title");//selects the paragraph tag inside div class subcontainer

    var inp = document.querySelector("input").value;
    var a = await fetch(`https://api-thirukkural.vercel.app/api?num=${inp}`)
    var b = await a.json();
    title.innerText = `${b.line1}
${b.line2}`;
    var cont = document.querySelector(".contents");
    cont.innerText = `Chapter: ${b.chap_tam} - ${b.chap_eng}
Chapter Group: ${b.chapgrp_tam} - ${b.chapgrp_eng}
Section: ${b.sect_tam} - ${b.sect_eng}
Tamil Explanation: ${b.tam_exp}
English Translation: ${b.eng}
Explanation: ${b.eng_exp}`;

    console.log(b);
}