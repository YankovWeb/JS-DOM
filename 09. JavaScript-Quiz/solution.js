function solve() {
  let slide = 0;
  let count = 0;
  //right answers
  let answers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  // event on click
  let buttons = [...document.getElementsByClassName("answer-text")];

  for (let button of buttons) {
    button.addEventListener("click", check);
  }
  //function to check if the answer is true
  function check(e) {
    let answer = e.target.innerText;
    if (answers.includes(answer)) {
      count++;
    }
    hideShow();
    //
    function hideShow() {
      let route = [...document.getElementsByTagName("section")];
      route[slide].style.display = "none";
      slide++;
      //route[slide] return Undefine if is out of the range,
      if (route[slide]) {
        route[slide].style.display = "block";
      } else {
        //if route[slide] is undefine the result will be printed
        let h1 = document.getElementsByTagName("h1")[0];
        if (count === answers.length) {
          return (h1.innerText +=
            "\n\n\n\n You are recognized as top JavaScript fan!");
        }
        return (h1.innerText += `\n\n\n\n You have ${count} right answers`);
      }
    }
  }
}
