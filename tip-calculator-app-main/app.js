const bill = document.getElementById("bill").value;
const people = document.getElementById("people").value;

const btn = document.querySelectorAll(".tip-btn");

const tipRes = document.querySelector(".tip-res");
const tipTotal = document.querySelector(".tip-total");
const billTotal = document.querySelector(".bill-total");

const reset = document.querySelector(".reset");


function findTip(percent, ebill) {
  let tip = (percent / 100) * ebill;
  return tip;
}

function displayResults(tip, total, final) {
  tipRes.textContent = `${tip}`;
  tipTotal.textContent = `${total}`;
  billTotal.textContent = `${final}`;
}

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const bill = document.getElementById("bill").value;
    const people = document.getElementById("people").value;

    let res = findTip(button.value, bill);

    let amt = res / people;

    let finalBill = Number(res) + Number(bill);

    displayResults(amt.toFixed(2), res.toFixed(2), finalBill.toFixed(2));
  });
});

reset.addEventListener("click", ()=> {
  window.location.reload();
})
