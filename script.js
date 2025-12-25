'use strict';

//■やりたいこと
//  1:各項目をドロップダウンから選択できるようにする
//  2:選択した値を保持
//  3:下段に、2のカロリーと価格を合計を表示
//  4:下段に、2の 名前を逆順で合体し表示

//更新時に自動的に動作させるため　window.onloadを使用
window.onload = function() {
  // idの取得
  let doughSelect = document.getElementById('doughSelect');
  let process1Select = document.getElementById('process1Select');
  let process2Select = document.getElementById('process2Select');
  let process3Select = document.getElementById('process3Select');
  let resultmsg = document.getElementById('result');

  // 選択肢を追加する関数を定義
  function addOptions(selectElem, options) {
    for (let i = 0; i < options.length; i++) {
      let opt = document.createElement('option');
      opt.value = i; // オプション配列のインデックスをvalueにする
      opt.text = options[i].Name + " - " + options[i].Description;
      selectElem.appendChild(opt); // Slect要素に選択しを追加
    }
  }

  // 初期化：選択肢を実際にセット
  addOptions(doughSelect, donutbody);
  addOptions(process1Select, process1);
  addOptions(process2Select, process2);
  addOptions(process3Select, process3);

    // 初期表示メッセージ
  resultmsg.textContent = "まず生地を選んでください。";

  //　変化点があるたびに更新するメインの関数
  function updateResult() {
    // 各selectの選択値を取得
    // doughSelect.valueはリスト＝配列内で選択してるインデックス番号を返してる
    let doughIndex = doughSelect.value;
    let p1Index = process1Select.value;
    let p2Index = process2Select.value;
    let p3Index = process3Select.value;
    
    // 各配列の中のインデックスに該当するオブジェクトを定義
    let dough = donutbody[doughIndex];
    let p1 = process1[p1Index] 
    let p2 = process2[p2Index] 
    let p3 = process3[p3Index] 

    // 名前の結合（工程3 + 工程2 + 工程1 + 生地）
    // joinで配列を結合
    let donutName = [];
     donutName.push(p3.AddName); 
     donutName.push(p2.AddName); 
     donutName.push(p1.AddName); 
     donutName.push(dough.AddName); 
    let donutName2 = donutName.join("");
  
    // カロリーと価格の合計値算出
    let totalCalory = dough.Calory + p1.Calory + p2.Calory + p3.Calory;
    let totalPrice = dough.Price + p1.Price + p2.Price + p3.Price;

    // リザルトのコメント表示
    let text1 = "ドーナツ名: " + donutName2 + ",  ";
    let text2 = "合計カロリー: " + totalCalory + " kcal" + ",  " ;
    let text3 = "原価: " + totalPrice + " 円";
    resultmsg.textContent = text1 + text2 + text3;
  }
  // イベントリスナー ：変化点あったら
  doughSelect.addEventListener('change', updateResult);
  process1Select.addEventListener('change', updateResult);
  process2Select.addEventListener('change', updateResult);
  process3Select.addEventListener('change', updateResult);
};
