import * as cts from "./src/index.js";
const cppSrcTextArea = document.getElementById("cpp-src");
const tsDstTextArea = document.getElementById("ts-dst");
function cpp2ts() {
  let cppSrc = cppSrcTextArea.value;
  let lexer = new cts.lexer(cppSrc);
  tsDstTextArea.value = lexer.next().toString();
}
const cppSrcBtn = document.getElementById("cpp-src-btn");
cppSrcBtn.addEventListener("click", cpp2ts);
