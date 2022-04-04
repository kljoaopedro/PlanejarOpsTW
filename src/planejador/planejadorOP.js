const PADDING_20 = '20px';

function addStyles(rootDiv, coordParagraph, fakesParagraph, fakesScriptParagraph, authorDiv) {
    rootDiv.style.backgroundColor = '#eed9ae';
    rootDiv.style.border = '1px solid black';

    coordParagraph.style.padding = PADDING_20;
    fakesParagraph.style.padding = PADDING_20;
    fakesScriptParagraph.style.padding = PADDING_20;
    authorDiv.style.float = 'right';
}

function appendChilds(rootDiv, coordParagraph, fakesParagraph, fakesScriptParagraph, authorDiv) {
    const coordText = document.createTextNode(`[table][**]N[||]Villages[||]Reservation[/**]${bbCode}[/table]`);
    const authorText = document.createTextNode('Made by Evil Penna');
    const fakeText = document.createTextNode('=============  FAKES =============');
    const scriptFakeText = document.createTextNode(`[spoiler=FAKE SPY][code]javascript:coords='${textVillageScript}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf('screen=place')==-1)alert('Use the script in the rally point page!');coords=coords.split(' ');index=0;farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert('All villages were extracted, now start from the first!');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split('|');index=index+1;cookie_date=new Date(2023,3,27);document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$('#place_target').find('input').val(coords[0]+'|'+coords[1]);doc.forms[0].spy.value=5;end();[/code][/spoiler]\n
    [spoiler=FAKE RAM][code]javascript:coords='${textVillageScript}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf('screen=place')==-1)alert('Use the script in the rally point page!');coords=coords.split(' ');index=0;farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert('All villages were extracted, now start from the first!');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split('|');index=index+1;cookie_date=new Date(2023,3,27);document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$('#place_target').find('input').val(coords[0]+'|'+coords[1]);doc.forms[0].spy.value=50;doc.forms[0].ram.value=1;end();[/code][/spoiler]`);

    authorDiv.href = 'https://github.com/kljoaopedro';
    authorDiv.target = '_blank';

    rootDiv.appendChild(coordParagraph);
    rootDiv.appendChild(fakesParagraph);
    rootDiv.appendChild(fakesScriptParagraph);
    rootDiv.appendChild(authorDiv);

    authorDiv.appendChild(authorText);
    coordParagraph.appendChild(coordText);
    fakesParagraph.appendChild(fakeText);
    fakesScriptParagraph.appendChild(scriptFakeText);
}


function createHTMLElements() {
    const rootDiv = document.createElement("div");
    const authorDiv = document.createElement("a");
    const coordParagraph = document.createElement("p");
    const fakesParagraph = document.createElement("p");
    const fakesScriptParagraph = document.createElement("p");


    addStyles(rootDiv, coordParagraph, fakesParagraph, fakesScriptParagraph, authorDiv);
    appendChilds(rootDiv, coordParagraph, fakesParagraph, fakesScriptParagraph, authorDiv);

    const rallyPointElement = document.getElementById("command-form-warning");
    rallyPointElement.appendChild(rootDiv);
}


const onlyCoordPattern = new RegExp('(\\d+)\\|(\\d+)', 'g');
const userCoordinates = window.prompt("Paste coordinates: ");

const villages = userCoordinates.match(onlyCoordPattern);
console.log("Checking total villages: " + villages.length);


let newCoordinates;
newCoordinates = [...new Set(villages)];
console.log("Removing possible duplicate coordinates...");
console.log("Checking total villages after removing duplicates: " + newCoordinates.length);

let textVillageScript = '';
newCoordinates.forEach((coord, idx) => {
    console.log(idx, newCoordinates.length);
    if(coord === newCoordinates[newCoordinates.length - 1]){
        textVillageScript += coord.trim();
    } else {
        textVillageScript += `${coord} `;
    }
});

let bbCode = '';
newCoordinates.forEach((coord, idx) => {
    bbCode += `[*][b]${idx + 1}-[/b][|][claim]${coord.trim()}[/claim][|]\n`
})

createHTMLElements();
