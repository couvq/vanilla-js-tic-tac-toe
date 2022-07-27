const board = document.getElementById('board');
const cells = document.querySelectorAll('.clickable');
const restartBtn = document.getElementById('restart-button');
const cell0 = document.getElementById('0');
const cell1 = document.getElementById('1');
const cell2 = document.getElementById('2');
const cell3 = document.getElementById('3');
const cell4 = document.getElementById('4');
const cell5 = document.getElementById('5');
const cell6 = document.getElementById('6');
const cell7 = document.getElementById('7');
const cell8 = document.getElementById('8');



let player = 1;

restartBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
    });

    player = 1; // reset player to initial player
});

const checkGameWinner = () => {
    // if rows are all equal inner text not empty
    let row1NotAllEmpty = cell0.textContent !== '' && cell1.textContent !== '' && cell2.textContent !== '';
    let row2NotAllEmpty = cell3.textContent !== '' && cell4.textContent !== '' && cell5.textContent !== '';
    let row3NotAllEmpty = cell6.textContent !== '' && cell7.textContent !== '' && cell8.textContent !== '';

    const row1Winner = (row1NotAllEmpty && cell0.textContent === cell1.textContent && cell1.textContent === cell2.textContent);
    const row2Winner = (row2NotAllEmpty && cell3.textContent === cell4.textContent && cell4.textContent === cell5.textContent);
    const row3Winner = (row3NotAllEmpty && cell6.textContent === cell7.textContent && cell7.textContent === cell8.textContent);
    const rowsEqual = row1Winner || row2Winner || row3Winner;
    
    // if cols are all equal inner text not empty
    let col1NotAllEmpty = cell0.textContent !== '' && cell3.textContent !== '' && cell6.textContent !== '';
    let col2NotAllEmpty = cell1.textContent !== '' && cell4.textContent !== '' && cell7.textContent !== '';
    let col3NotAllEmpty = cell2.textContent !== '' && cell5.textContent !== '' && cell8.textContent !== '';

    const col1Winner = (col1NotAllEmpty && cell0.textContent === cell3.textContent && cell3.textContent === cell6.textContent);
    const col2Winner = (col2NotAllEmpty && cell1.textContent === cell4.textContent && cell4.textContent === cell7.textContent);
    const col3Winner = (col3NotAllEmpty && cell2.textContent === cell5.textContent && cell5.textContent === cell8.textContent);

    let colsEqual = col1Winner || col2Winner || col3Winner;

    return rowsEqual || colsEqual;
}

const makeMove = (e) => {
    e.preventDefault();

    if (player === 1) {
        // if cell is not empty
        if (e.target.textContent.length === 0) {
            let cellValue = document.createTextNode('X');
            e.target.appendChild(cellValue);
            if(checkGameWinner()) {
                alert(`Player ${player} won!!!`)
            }
            player = 2;
            console.log(`Current Turn: ${player}`);
        }
    } else {
        // cell not empty?
        if (e.target.textContent.length === 0) {
            let cellValue = document.createTextNode('O');
            e.target.appendChild(cellValue);
            if(checkGameWinner()) {
                alert(`Player ${player} won!!!`)
            }
            player = 1;
            console.log(`Current Turn: ${player}`);
        }
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', makeMove);
});


