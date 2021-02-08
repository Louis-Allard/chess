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
                document.write('<td><div id="' + l + '|' + c + '" class="' + color + '">');
                if (col[i] === "E" && l === 1) {
                    // document.write('<div id="w_king" class="w_king on" title="King" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                    document.write('<div id="w_king" class="w_king on" title="King" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if (col[i] === "D" && l === 1) {
                    document.write('<div id="w_queen" class="w_queen on" title="Queen" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "C" && l === 1) || (col[i] === "F" && l === 1)) {
                    document.write('<div id="w_bishop" class="w_bishop on" title="Bishop" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "B" && l === 1) || (col[i] === "G" && l === 1)) {
                    document.write('<div id="w_knight" class="w_knight on" title="Knight" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "A" && l === 1) || (col[i] === "H" && l === 1)) {
                    document.write('<div id="w_tower" class="w_tower on" title="Tower" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "A" && l === 2) || (col[i] === "B" && l === 2) || (col[i] === "C" && l === 2) || (col[i] === "D" && l === 2) || (col[i] === "E" && l === 2) || (col[i] === "F" && l === 2) || (col[i] === "G" && l === 2) || (col[i] === "H" && l === 2)) {
                    document.write('<div id="w_pawn"class="w_pawn on" title="Pawn" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if (col[i] === "E" && l === 8) {
                    document.write('<div id="b_king" class="b_king on" title="King" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if (col[i] === "D" && l === 8) {
                    document.write('<div id="b_queen" class="b_queen on" title="Queen" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "C" && l === 8) || (col[i] === "F" && l === 8)) {
                    document.write('<div id="b_bishop" class="b_bishop on" title="Bishop" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "B" && l === 8) || (col[i] === "G" && l === 8)) {
                    document.write('<div id="b_knight" class="b_knight on" title="Knight" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "A" && l === 8) || (col[i] === "H" && l === 8)) {
                    document.write('<div id="b_tower" class="b_tower on" title="Tower" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
                }
                if ((col[i] === "A" && l === 7) || (col[i] === "B" && l === 7) || (col[i] === "C" && l === 7) || (col[i] === "D" && l === 7) || (col[i] === "E" && l === 7) || (col[i] === "F" && l === 7) || (col[i] === "G" && l === 7) || (col[i] === "H" && l === 7)) {
                    document.write('<div id="b_pawn" class="b_pawn on" title="Pawn" onclick="pieces_showmoves(id,`' + col[i] + '`,' + l + ')"></div>');
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

/*********************************************
 _____   _   _____   _____   _____   _____  
 |  _  \ | | | ____| /  ___| | ____| /  ___/ 
 | |_| | | | | |__   | |     | |__   | |___  
 |  ___/ | | |  __|  | |     |  __|  \___  \ 
 | |     | | | |___  | |___  | |___   ___| | 
 |_|     |_| |_____| \_____| |_____| /_____/ 
 ************************************************/


function pieces_showmoves(n, pos_x, pos_y) {
    /**  Show pieces possibility
     *   n     => piece name: name
     *   pos_x => piece horizontal position: c
     *   pos_y => piece vertical position: l
     * **/
    url = "http://127.0.0.1:5500/moves.json";
    fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((jsonResponse) => {
            for (let i = 0; i < jsonResponse[n].length; i++) {
                const moves = jsonResponse[n][i].moves;
                if (jsonResponse[n][i].name == n) {
                    for (let j = 0; j < moves.length; j++) {
                        if (moves[j]["enabled"] == "1") {
                           let c = moves[j]["case"];
                            casesname(c);
                        }
                    }
                }
                else {
                    console.error(error);
                }
            }
        }).catch((error) => {
            console.log("Error " + error);
        });
};

function casesname(c) {
    /** Name cases around each piece **/
    url = "http://127.0.0.1:5500/moves.json";
    fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((jsonResponse) => {
            console.log(jsonResponse["cases"]);
            console.log("Cases authorisées: " + c);
            for(let i=0; i<jsonResponse["cases"].length; i++){
                if(jsonResponse["cases"][i]['case'] === c){
                    console.log(jsonResponse["cases"][i])
                }
            }
            /**
             * Si name = id
             *  Si moves.enabled = 1
             *      Pour Chaque case
             *          Colorer(pos_x = pos_x + c, pos_y = pos_y + l)
             * 
             */
        }
        ).catch((error) => {
            console.log("Error " + error);
        });
}