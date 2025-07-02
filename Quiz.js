function showselectanswer() {
  const radios = document.getElementsByName("answer");
  let selected = "";

  for (const radio of radios) {
    if (radio.checked) {
      selected = radio.value;
      break;
    }
  }

  if (selected === "") {
    alert("答えを選択してください。");
  } else if (selected === "gre-phuru") {
    alert("正解です！グレープフルーツジュースは薬の効果に影響を与えることがあります。");
  } else {
    alert("不正解です。正解はグレープフルーツジュースです。");
  }
}