// utilites start------------------------>
function setInnerText(ValueToSet, elementId) {
    if (ValueToSet === Number || ValueToSet > 0) {
        const element = document.getElementById(elementId);
        element.innerText = ValueToSet;
    }
    else if(ValueToSet === 0){
        alert('please select your players first')
    }
    else {
        alert('Please give valid input')
    }
}
function intToRoman(number) {
    if (number === 1) {
        return 'I';
    }
    if (number === 2) {
        return 'II';
    }
    if (number === 3) {
        return 'III';
    }
    if (number === 4) {
        return 'IV';
    }
    if (number === 5) {
        return 'V';
    }
}
// utilities end------------------------->

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
        createLi.classList.add('py-2');
        createLi.innerText = `${getPlayerName}`;

        selectedPlayers.appendChild(createLi);
        event.target.setAttribute('disabled', true);

        const selectedPlayerNumber = document.getElementById('selected-player-number');
        selectedPlayerNumber.innerText = intToRoman(selectedPlayersLength + 1);
    })
}

const calculateButton = document.getElementById('btn-calculate');
calculateButton.addEventListener('click', function () {
    const budgetField = document.getElementById('budget-field');
    const budgetFieldValue = parseFloat(budgetField.value);
    const budgetPlayers = budgetFieldValue * selectedPlayers.children.length;
    setInnerText(budgetPlayers, 'budget-display')
    budgetField.value = '';

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
        setInnerText(totalCost, 'total-cost')
    }
    else {
        alert('Please Calculate Player Expenses First!!!')
    }
    managerField.value = '';
    coachField.value = '';
})