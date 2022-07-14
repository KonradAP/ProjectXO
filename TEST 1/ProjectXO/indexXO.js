let counter = 0;
document.querySelector("#button1").addEventListener("click", () => {
  gameSystem(button1);
});
document.querySelector("#button2").addEventListener("click", () => {
  gameSystem(button2);
});
document.querySelector("#button3").addEventListener("click", () => {
  gameSystem(button3);
});
document.querySelector("#button4").addEventListener("click", () => {
  gameSystem(button4);
});
document.querySelector("#button5").addEventListener("click", () => {
  gameSystem(button5);
});
document.querySelector("#button6").addEventListener("click", () => {
  gameSystem(button6);
});
document.querySelector("#button7").addEventListener("click", () => {
  gameSystem(button7);
});
document.querySelector("#button8").addEventListener("click", () => {
  gameSystem(button8);
});
document.querySelector("#button9").addEventListener("click", () => {
  gameSystem(button9);
});

function gameSystem(clickedButton) {
  if (clickedButton.style.backgroundColor === "black") {
    if (counter % 2 === 0) {
      clickedButton.style.backgroundColor = "red";
      counter++;
      if (
        (button1.style.backgroundColor === "red" &&
          button2.style.backgroundColor === "red" &&
          button3.style.backgroundColor === "red") ||
        (button4.style.backgroundColor === "red" &&
          button5.style.backgroundColor === "red" &&
          button6.style.backgroundColor === "red") ||
        (button7.style.backgroundColor === "red" &&
          button8.style.backgroundColor === "red" &&
          button9.style.backgroundColor === "red") ||
        (button1.style.backgroundColor === "red" &&
          button4.style.backgroundColor === "red" &&
          button7.style.backgroundColor === "red") ||
        (button2.style.backgroundColor === "red" &&
          button5.style.backgroundColor === "red" &&
          button8.style.backgroundColor === "red") ||
        (button3.style.backgroundColor === "red" &&
          button6.style.backgroundColor === "red" &&
          button9.style.backgroundColor === "red") ||
        (button1.style.backgroundColor === "red" &&
          button5.style.backgroundColor === "red" &&
          button9.style.backgroundColor === "red") ||
        (button7.style.backgroundColor === "red" &&
          button5.style.backgroundColor === "red" &&
          button3.style.backgroundColor === "red")
      ) {
        document.querySelector("#message-red-win").style.display = "flex";
      }
      messageNoWin();
    } else {
      clickedButton.style.backgroundColor = "blue";
      counter++;
      if (
        (button1.style.backgroundColor === "blue" &&
          button2.style.backgroundColor === "blue" &&
          button3.style.backgroundColor === "blue") ||
        (button4.style.backgroundColor === "blue" &&
          button5.style.backgroundColor === "blue" &&
          button6.style.backgroundColor === "blue") ||
        (button7.style.backgroundColor === "blue" &&
          button8.style.backgroundColor === "blue" &&
          button9.style.backgroundColor === "blue") ||
        (button1.style.backgroundColor === "blue" &&
          button4.style.backgroundColor === "blue" &&
          button7.style.backgroundColor === "blue") ||
        (button2.style.backgroundColor === "blue" &&
          button5.style.backgroundColor === "blue" &&
          button8.style.backgroundColor === "blue") ||
        (button3.style.backgroundColor === "blue" &&
          button6.style.backgroundColor === "blue" &&
          button9.style.backgroundColor === "blue") ||
        (button1.style.backgroundColor === "blue" &&
          button5.style.backgroundColor === "blue" &&
          button9.style.backgroundColor === "blue") ||
        (button7.style.backgroundColor === "blue" &&
          button5.style.backgroundColor === "blue" &&
          button3.style.backgroundColor === "blue")
      ) {
        document.querySelector("#message-blue-win").style.display = "flex";
      }
      messageNoWin();
    }
  }
}

function messageNoWin() {
  if (
    button1.style.backgroundColor != "black" &&
    button2.style.backgroundColor != "black" &&
    button3.style.backgroundColor != "black" &&
    button4.style.backgroundColor != "black" &&
    button5.style.backgroundColor != "black" &&
    button6.style.backgroundColor != "black" &&
    button7.style.backgroundColor != "black" &&
    button8.style.backgroundColor != "black" &&
    button9.style.backgroundColor != "black"
  ) {
    document.querySelector("#message-no-win").style.display = "flex";
  }
}

document.querySelector("#restart-button1").addEventListener("click", () => {
  resetDone(), true;
});
document.querySelector("#restart-button2").addEventListener("click", () => {
  resetDone(), true;
});
document.querySelector("#restart-button3").addEventListener("click", () => {
  resetDone(), true;
});

function resetDone() {
  if (
    document.querySelector("#message-no-win").style.display === "flex" ||
    document.querySelector("#message-blue-win").style.display === "flex" ||
    document.querySelector("#message-red-win").style.display === "flex"
  ) {
    document.querySelector("#message-no-win").style.display = "none";
    document.querySelector("#message-blue-win").style.display = "none";
    document.querySelector("#message-red-win").style.display = "none";
    document.querySelector("#button1").style.backgroundColor = "black";
    document.querySelector("#button2").style.backgroundColor = "black";
    document.querySelector("#button3").style.backgroundColor = "black";
    document.querySelector("#button4").style.backgroundColor = "black";
    document.querySelector("#button5").style.backgroundColor = "black";
    document.querySelector("#button6").style.backgroundColor = "black";
    document.querySelector("#button7").style.backgroundColor = "black";
    document.querySelector("#button8").style.backgroundColor = "black";
    document.querySelector("#button9").style.backgroundColor = "black";
    counter = 0;
  }
}
