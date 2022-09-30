function encodeAndDecodeMessages() {
  const buttons = [...document.getElementsByTagName("button")];

  const firstButton = buttons[0];
  firstButton.addEventListener("click", encodeAndSend);

  const secoundButton = buttons[1];
  secoundButton.addEventListener("click", decodeAndRead);

  function encodeAndSend() {
    let text = document.getElementsByTagName("textarea")[0].value;

    let arrOfChar = text.split("");
    arrOfChar.forEach((char, i) => {
      arrOfChar[i] = String.fromCharCode(char.charCodeAt(0) + 1);
    });

    arrOfChar = arrOfChar.join("");
    document.getElementsByTagName("textarea")[1].value = arrOfChar;

    document.getElementsByTagName("textarea")[0].value = "";

    console.log("click");
  }

  function decodeAndRead() {
    let textForDecoding = document.getElementsByTagName("textarea")[1].value;

    let arrForDecoding = textForDecoding.split("");

    arrForDecoding.forEach((char, i) => {
      arrForDecoding[i] = String.fromCharCode(char.charCodeAt(0) - 1);
    });
    arrForDecoding = arrForDecoding.join("");
    document.getElementsByTagName("textarea")[1].value = arrForDecoding;

    console.log("click2");
  }
}
