/******************************************
 _____   _____       ___   _____    _____  
 |  _  \ /  _  \     /   | |  _  \  |  _  \ 
 | |_| | | | | |    / /| | | |_| |  | | | | 
 |  _  { | | | |   / / | | |  _  /  | | | | 
 | |_| | | |_| |  / /  | | | | \ \  | |_| | 
 |_____/ \_____/ /_/   |_| |_|  \_\ |_____/ 
*******************************************/

let nombre = 1;
let col = ["A", "B", "C", "D", "E", "F", "G", "H"];
document.write('<table>');
for (let l = 8; l > 0; l--) {
    document.write('<tr><td class="pos">' + l + '</td>');
    for (let c = 1; c < 9; c++) {
        if (nombre / 2 == Math.round(nombre / 2)) { var color = "caseBrun" }
        else { var color = "caseBlanche" }
        for (let i = 0; i < col.length; i++) {
            let j = i + 1;
            if (j === c) {
                document.write('<td><div id="' + l + '|' + c + '" class="' + color + '" title="' + col[i] + ' | ' + l + '">');
                if (col[i] === "E" && l === 1) {
                    document.write('<div class="w_king"></div>')
                }
                if (col[i] === "D" && l === 1) {
                    document.write('<div class="w_queen"></div>')
                }
                if ((col[i] === "C" && l === 1) || (col[i] === "F" && l === 1)) {
                    document.write('<div class="w_bishop"></div>')
                }
                if ((col[i] === "B" && l === 1) || (col[i] === "G" && l === 1)) {
                    document.write('<div class="w_knight"></div>')
                }
                if ((col[i] === "A" && l === 1) || (col[i] === "H" && l === 1)) {
                    document.write('<div class="w_tower"></div>')
                }
                if ((col[i] === "A" && l === 2) || (col[i] === "B" && l === 2) || (col[i] === "C" && l === 2) || (col[i] === "D" && l === 2) || (col[i] === "E" && l === 2) || (col[i] === "F" && l === 2) || (col[i] === "G" && l === 2) || (col[i] === "H" && l === 2)) {
                    document.write('<div class="w_pawn"></div>')
                }                                                                 
                document.write('</div>');

            }

        }
        nombre++;
    }
    nombre++;
    document.write('</tr>');
}
document.write('<tr><td>&nbsp;</td>')
for (let p = 0; p < col.length; p++) {
    document.write('<td class="pos">' + col[p] + '</td>');
}
document.write('</tr>')

document.write('</table>');
