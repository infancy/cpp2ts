import * as cts from "./src/antlr4/index.js";
const cppSrcTextArea = document.getElementById("cpp-src");
const tsDstTextArea = document.getElementById("ts-dst");
function cpp2ts() {
  let cppSrc = cppSrcTextArea.value;
  tsDstTextArea.value = cts.CPP2TS.convert(cppSrc);
}
const cppSrcBtn = document.getElementById("cpp-src-btn");
cppSrcBtn.addEventListener("click", cpp2ts);
