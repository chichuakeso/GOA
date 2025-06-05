function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1
    drawDice(diceNumber)
}
function drawDice(number) {
    const dice = document.getElementById("dice")
    dice.innerHTML = ""
    const dotPositions = {
        1: [4],
        2: [0, 8],
        3: [0, 4, 8],
        4: [0, 2, 6, 8],
        5: [0, 2, 4, 6, 8],
        6: [0, 2, 3, 5, 6, 8]
    }
    dotPositions[number].forEach(pos => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.gridArea = getGridArea(pos)
        dice.appendChild(dot)
    })
}
function getGridArea(pos) {
    const row = Math.floor(pos / 3) + 1
    const col = (pos % 3) + 1
    return `${row} / ${col}`
}