function create(words) {
  //You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. Finally, you should append all divs to the element with an id "content".
  for (let word of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = word;
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener("click", show);
    document.getElementById("content").appendChild(div);
  }
  function show(event) {

    let p = event.target.children[0];
    p.style.display = "block";
  }
}
