function setInnerText(ValueToSet, elementId) {
    if (ValueToSet === Number || ValueToSet > 0) {
        const element = document.getElementById(elementId);
        element.innerText = ValueToSet;
    }
    else {
        alert('Please give valid input')
    }
}


const selectButton = document.getElementsByClassName('btn-select');
const selectedPlayers = document.getElementById('players-list');
for (buttons of selectButton) {
    buttons.addEventListener('click', function (event) {
        const getPlayerName = event.target.parentNode.children[0].innerText;

        const selectedPlayersLength = selectedPlayers.children.length;
        if (selectedPlayersLength > 4) {
            alert('You Cannot Select More Than Five Players');
            return;
        }

        const createLi = document.createElement('li');
        createLi.classList.add = 'py-4';
        createLi.innerText = `${getPlayerName}`;

        selectedPlayers.appendChild(createLi);
        event.target.setAttribute('disabled', true);

    })
}

const CalculateButton = document.getElementById('btn-calculate');
CalculateButton.addEventListener('click', function () {
    if (selectedPlayers.children.length < 5) {
        alert('Please Select Five Players At Least')
    }
    else {

        const budgetField = document.getElementById('budget-field');
        const budgetFieldValue = parseFloat(budgetField.value);
        const budgetPlayers = budgetFieldValue * 5;

        setInnerText(budgetPlayers, 'budget-display')
        budgetField.value = '';
    }
})



const calculateTotal = document.getElementById('btn-calculate-all');
calculateTotal.addEventListener('click', function () {
    const managerField = document.getElementById('manager-field');
    const managerCost = parseFloat(managerField.value);
    const coachField = document.getElementById('coach-field');
    const coachCost = parseFloat(coachField.value);
    const budgetDisplay = document.getElementById('budget-display');
    const budgetCost = parseFloat(budgetDisplay.innerText);

    if (budgetCost > 0) {
        const totalCost = managerCost + coachCost + budgetCost;
        console.log(totalCost);
        setInnerText(totalCost, 'total-cost')
    }
    else {
        alert('Please Calculate Player Expenses First!!!')
    }
})


