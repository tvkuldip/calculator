let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "C":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      default:
        var element = document.getElementById("display");

        var lastChar = display.innerText.charAt(display.innerText.length -1);
        
        if (
          /[+-\/*]/.test(e.target.innerText) &&
          /[+-\/*]$/.test(lastChar)
        
        ) {
            console.log("el",element, /[+-\/*]/.test(element.innerHTML),/[+-\/*]$/.test(element.innerHTML));
          element.innerHTML = element.innerHTML.replace(
            element.innerHTML[element.innerHTML.length - 1],
            ""
          );
          console.log("e",element.innerHTML);
        }
        display.innerText += e.target.innerText;
        console.log("w",e.target);
    }
  });
});
