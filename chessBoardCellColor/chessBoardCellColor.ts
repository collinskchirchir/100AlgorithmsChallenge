export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  
  const boardObj = {
    "A" : 1,
    "B" : 2,
    "C" : 3, 
    "D" : 4,
    "E" : 5,
    "F" : 6,
    "G" : 7,
    "H" : 8
  };

  const cell1Value = (boardObj[cell1[0]] * parseInt(cell1[1])) % 2;
  const cell2Value = (boardObj[cell2[0]] * parseInt(cell2[1])) % 2;

  return cell1Value === cell2Value 
  
}

// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));
