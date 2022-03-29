/**
 *
 * @author: Evil Penna
 * @description: Planejador de MP e mensagem para fórum de OP's no Tribal Wars
 */
const resp = window.prompt("Digite as coordenadas separadas por espaço: ");


function getCoordAldeias() {
    return aldeias.split(' ');
}

const aldeias = resp;


console.log("Verificando total de aldeias: " + getCoordAldeias().length);


let coordSeparadas = getCoordAldeias();
coordSeparadas =  [...new Set(coordSeparadas)];
console.log("Removendo possíveis coordenadas duplicadas...");
console.log("Verificando total de aldeias após remover duplicadas: " + coordSeparadas.length);


let bbCode = '';
coordSeparadas.forEach((coord, idx) => {
    bbCode += `[*][b]${idx + 1}-[/b][|][claim]${coord.trim()}[/claim][|]\n`
})

console.log("Código BB para postar no fórum: \n");

console.log(bbCode);

console.log('=============  FAKES ============= ');


console.log(`[spoiler=FAKE SPY][code]javascript:coords='${resp}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf(\'screen=place\')==-1)alert(\'Use the script in the rally point page!\');coords=coords.split(\' \');index=0;farmcookie=document.cookie.match(\'(^|;) ?farm=([^;]*)(;|$)\');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert(\'All villages were extracted, now start from the first!\');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split(\'|\');index=index+1;cookie_date=new Date(2023,3,27);document.cookie =\'farm=\'+index+\';expires=\'+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$(\'#place_target\').find(\'input\').val(coords[0]+\'|\'+coords[1]);doc.forms[0].spy.value=5;end();[/code][/spoiler]`);

console.log(`[spoiler=FAKE ARÍETE][code]javascript:coords='${resp}';var doc=document;if(window.frames.length>0 && window.main!=null)doc=window.main.document;url=doc.URL;if(url.indexOf('screen=place')==-1)alert('Use the script in the rally point page!');coords=coords.split(' ');index=0;farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');if(farmcookie!=null)index=parseInt(farmcookie[2]);if(index>=coords.length)alert('All villages were extracted, now start from the first!');if(index>=coords.length)index=0;coords=coords[index];coords=coords.split('|');index=index+1;cookie_date=new Date(2023,3,27);document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];$('#place_target').find('input').val(coords[0]+'|'+coords[1]);doc.forms[0].spy.value=50;doc.forms[0].ram.value=1;end();[/code][/spoiler]`);