
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
                            casesEnable(c, pos_x, pos_y);
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

function casesEnable(c, pos_x, pos_y) {
    /** Name cases around each piece **/
    url = "http://127.0.0.1:5500/moves.json";
    const col_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
    fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((jsonResponse) => {
            for (let i = 0; i < jsonResponse["cases"].length; i++) {
                if (jsonResponse["cases"][i]['case'] === c) {
                    let col = jsonResponse["cases"][i]["c"];
                    let lig = jsonResponse["cases"][i]["l"];
                    for (let i = 0; i < col_letters.length; i++) {
                        if (col_letters[i] === pos_x) {
                            pos_x = col_letters[i + Number(col)];
                        }
                    }
                    pos_y = Number(pos_y) + Number(lig);
                    let caseEnable = pos_x + Number(pos_y);
                    if (Number(pos_y >= 1)) {
                        console.log("cases autorisées: " + caseEnable);
                        document.getElementById(caseEnable).classList.add("caseEnable");
                        setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 5000);
                    }

                }
            }
        }
        ).catch((error) => {
            console.log("Error " + error);
        });
}