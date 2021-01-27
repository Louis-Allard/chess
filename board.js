let nombre=1;
document.write('<table>');
for(let l=1; l<9; l++) 
{
document.write('<tr>');
for(let c=1; c<9; c++) 
{
    
if (nombre/2 == Math.round(nombre/2))
{let classe="caseBrun"}
else
{let classe="caseBlanc"}
    
document.write('<td><a onMouseOver="position('+l+','+c+')"><div id="'+l+'|'+c+'" class="'+classe+'"></div></a></td>');
nombre++;
}
nombre++;
document.write('</tr>');
}
document.write('</table>');