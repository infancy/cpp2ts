//import * as cts from './src/index'
//import * as cts from './src/antlr4ts/index'
import * as cts from './src/antlr4/index'

const cppSrcTextArea = document.getElementById('cpp-src') as HTMLTextAreaElement;
const tsDstTextArea = document.getElementById('ts-dst') as HTMLTextAreaElement;

function cpp2ts(){
    let cppSrc = cppSrcTextArea.value
    tsDstTextArea.value = cts.CPP2TS.convert(cppSrc)
}

const cppSrcBtn = document.getElementById('cpp-src-btn') as HTMLButtonElement;
cppSrcBtn.addEventListener("click", cpp2ts)