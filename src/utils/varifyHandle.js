function varifyHandle() {
  let inputVal = inputField.value.trim().toUpperCase();

  let result = "";
  let pass = Object.keys(fns);

  if (inputVal.length !== 10) pass = ["TAXvarify"];
  if (inputVal.length !== 8) pass = pass.filter((item) => item !== "TAXvarify");
  if (pass.length === 0) {
    console.log("不符合任何種類，長度錯誤!");
    return;
  }
  for (let key of pass) {
    if (regexs[key].test(inputVal)) {
      const { answer, message } = fns[key](inputVal);

      if (answer) {
        console.log(message);
        return;
      }
      if (message) result = message;
    }
  }
}

function newFn() {
  let msg = document.querySelector(".msg");
  let result = mixHandle();
  msg.innerHTML = result;
  if (result.includes("成功")) {
    msg.classList.add("showCorrect");
    setTimeout(() => {
      msg.classList.remove("showCorrect");
      msg.innerHTML = "";
    }, 3000);
  } else {
    msg.classList.add("showDanger");
    setTimeout(() => {
      msg.classList.remove("showDanger");
      msg.innerHTML = "";
    }, 3000);
  }
}

export { varifyHandle };
