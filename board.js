var nombre=1;
document.write('<table>');
for(var l=1; l<9; l++) // CREER 8 LIGNES
{
document.write('<tr>');
for(var c=1; c<9; c++) // CREER 8 CASES PAR LIGNE
{
    
if (nombre/2 == Math.round(nombre/2)) // classe CHANGE UNE CASE SUR DEUX (SI NOMBRE EST PAIR OU PAS)
{var classe="caseBrun"}
else
{var classe="caseBlanc"}
    
document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="'+l+'|'+c+'" class="'+classe+'"></div></a></td>'); // CREATION DES CASES (position('+l+','+c+') EST COMPLETE PAR UNE FONCTION DE LOCALISATION DES CASES DANS UN AUTRE SCRIPT)
nombre++;
}
nombre++;
document.write('</tr>');
}
document.write('</table>');