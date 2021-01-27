var nombre = 1;
document.write('<table>');
for (var l = 1; l < 9; l++) {
    document.write('<tr>');
for (var c = 1; c < 9; c++) {

    if (nombre / 2 == Math.round(nombre / 2)) { var classe = "caseBrun" }
    else { var classe = "caseBlanc" }

    document.write('<td><a onMouseOver="position(' + l + ',' + c + ')"><div id="' + l + '|' + c + '" class="' + classe + '" title="' + c + ' | ' + l + '"></div></a></td>');
    nombre++;
}
nombre++;
document.write('</tr>');
}
document.write('</table>');
