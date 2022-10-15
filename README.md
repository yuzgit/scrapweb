## 使い方
1. index.js内の`{ projectname }`をページを保存したいScrapboxプロジェクト名に変更する。
1. scrapboxにindex.jsをコピペ
1. ブックマークに以下追加。
   ```js
   javascript: var url="https://scrapbox.io/api/code/{ プロジェクト名 }/{ページ名 }/index.js"; 
   var elm=document.createElement(%27script%27); 
   elm.setAttribute(%27src%27, url); 
   document.body.appendChild(elm);
   ```
1. 追加ブックマークを実行