let nombre = 1;
document.write('<table>');
for (let l = 9; l > 0; l--) {
    document.write('<tr>');
    for (let c = 1; c < 9; c++) {
        if (nombre / 2 == Math.round(nombre / 2)) { var color = "caseBrun" }
        else { var color = "caseBlanche" }
        let col = ["A", "B", "C", "D", "E", "F", "G", "H"];
        for (let i = 0; i < col.length; i++) {
            let j=i+1;
            if(j === c ) {
            document.write('<td><div id="' + l + '|' + c + '" class="' + color + '" title="' + col[i] + ' | ' + l + '"></div></td>');
            }
        }
        nombre++;
    }
    nombre++;
    document.write('</tr>');
}
document.write('</table>');
