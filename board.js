let nombre = 1;
let col = ["A", "B", "C", "D", "E", "F", "G", "H"];
document.write('<table>');
for (let l = 9; l > 0; l--) {
    document.write('<tr><td class="pos">' + l + '</td>');
    for (let c = 1; c < 9; c++) {
        if (nombre / 2 == Math.round(nombre / 2)) { var color = "caseBrun" }
        else { var color = "caseBlanche" }
        for (let i = 0; i < col.length; i++) {
            let j = i + 1;
            if (j === c) {
                document.write('<td><div id="' + l + '|' + c + '" class="' + color + '" title="' + col[i] + ' | ' + l + '"></div></td>');
            }
        }
        nombre++;
    }
    nombre++;
    document.write('</tr>');
}
document.write('<tr><td>&nbsp;</td>')
for (let p = 0; p < col.length;p++) {
    document.write('<td class="pos">' + col[p] + '</td>');
}
document.write('</tr>')

document.write('</table>');
