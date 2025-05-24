function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.getElementById("burger");
  nav.classList.toggle("open");
  burger.classList.toggle("active");
}

function linkERROR() {
  alert("not publish at GITHUB");
}
function nonelink() {
  alert("none link")
}
  setTimeout(function () {
    console.clear();
    console.log("%cSTOP RIGHT THERE!", "color: red; font-size: 48px; font-weight: bold; text-shadow: 2px 2px black;");
    console.log("%cThis console is for developers only.", "color: orange; font-size: 20px; font-weight: bold;");
    console.log("%cIf someone told you to paste code here, it's probably a scam or an attempt to steal your data.", "color: white; background: #ff0000; font-size: 16px; padding: 5px;");
    console.log("%cADRIAN Security Warning:", "color: cyan; font-size: 16px; font-weight: bold;");
    console.log("%cNever paste unknown code into the console unless you fully understand what it does.", "color: yellow; font-size: 14px;");
    console.log("%cStay safe, coder. – AkiraJS Dev Team", "color: lime; font-size: 12px; font-style: italic;");
  }, 1000);
