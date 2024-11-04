document.addEventListener("DOMContentLoaded", () => {
    const billTotalInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentageDisplay = document.getElementById("tipPercentage");
    const tipAmountDisplay = document.getElementById("tipAmount");
    const totalBillDisplay = document.getElementById("totalBill");
    const currencySelect = document.getElementById("currency");

    const calculateTip = () => {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseInt(tipSlider.value);
        const conversionRate = parseFloat(currencySelect.selectedOptions[0].getAttribute("data-rate"));

        if (isNaN(billTotal) || billTotal < 0) {
            alert("Please enter a valid bill amount.");
            return;
        }

        const tipAmount = (billTotal * (tipPercentage / 100)) * conversionRate;
        const totalBill = (billTotal + tipAmount) * conversionRate;

        tipPercentageDisplay.value = `${tipPercentage}%`;
        tipAmountDisplay.value = tipAmount.toFixed(2);
        totalBillDisplay.value = totalBill.toFixed(2);
    };

    billTotalInput.addEventListener("input", calculateTip);
    tipSlider.addEventListener("input", calculateTip);
    currencySelect.addEventListener("change", calculateTip);
});
