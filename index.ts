import * as cts from './src/index'

const cppSrcTextArea = document.getElementById('cpp-src') as HTMLTextAreaElement;
const tsDstTextArea = document.getElementById('ts-dst') as HTMLTextAreaElement;

function cpp2ts(){
    let cppSrc = cppSrcTextArea.value
    let lexer = new cts.lexer(cppSrc)
    tsDstTextArea.value = lexer.next().toString()
}

const cppSrcBtn = document.getElementById('cpp-src-btn') as HTMLButtonElement;
cppSrcBtn.addEventListener("click", cpp2ts)