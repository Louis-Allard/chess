
/*********************************************
 _____   _   _____   _____   _____   _____  
 |  _  \ | | | ____| /  ___| | ____| /  ___/ 
 | |_| | | | | |__   | |     | |__   | |___  
 |  ___/ | | |  __|  | |     |  __|  \___  \ 
 | |     | | | |___  | |___  | |___   ___| | 
 |_|     |_| |_____| \_____| |_____| /_____/ 
 ************************************************/
let url = "http://127.0.0.1:5500/moves.json";

function pieces_showmoves(n, pos_x, pos_y) {
    /**  Show pieces possibility
     *   n     => piece name: name
     *   pos_x => piece horizontal position: c
     *   pos_y => piece vertical position: l
     * **/
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
                        if (moves[j]["enabled"] === "1") {
                            let c = moves[j]["case"];
                            let a = moves[j]["all"];
                            casesEnable(c, n, a, pos_x, pos_y);
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

function casesEnable(c, n, a, pos_x, pos_y) {
    /** Name cases around each piece 
     *  Change color of the enable cases 
     *   c     => case letter
     *   n     => piece name: name
     *   a     => move: all 0/1
     *   pos_x => piece horizontal position: c
     *   pos_y => piece vertical position: l
     * **/
    const case_letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
    let caseEnable = pos_x + pos_y;
    let array_case =[];
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
                    for (let j = 0; j < case_letter.length; j++) {
                        if (case_letter[j] === pos_x) {
                            if (n.slice(0, 1) === "w") {
                                pos_x = case_letter[j + Number(col)];
                                pos_y = Number(pos_y) + Number(lig);
                            }
                            else {
                                pos_x = case_letter[j - Number(col)];
                                pos_y = Number(pos_y) - Number(lig);

                            }
                            switch (a) {
                                case "0":
                                    caseEnable = pos_x + Number(pos_y);
                                    if (Number(pos_y >= 1)) {
                                        if (document.getElementById(caseEnable) != null) {
                                            document.getElementById(caseEnable).classList.add("caseEnable");
                                            setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 1000);
                                            _case_Enable(caseEnable);
                                            return caseEnable;
                                        }
                                    }
                                    break;
                                case "1":
                                    for (l = 0; l < 9; l++) {
                                        l_pos_y = Number(pos_y) + Number(l);
                                        if (("-9" < l_pos_y < "9") && ("-9" < j < "9") && l_pos_y != "0") {
                                            caseEnable = pos_x + Number(l_pos_y);
                                            array_case.push(caseEnable);
                                            _array_case(array_case);
                                            /*
                                            if (Number(pos_y >= 1)) {
                                                if (document.getElementById(caseEnable) != null) {
                                                    document.getElementById(caseEnable).classList.add("caseEnable");
                                                    setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 1000);
                                                    _case_Enable(caseEnable);
                                                    return caseEnable;
                                                }
                                            }
                                            */
                                        }
                                    }
                                    break;
                                default:
                                    alert("----- ERROR ON [a] PARAMETER -----");
                                    break;
                            }
                        }
                    }
                }
            }
        }
        ).catch((error) => {
            console.log("Error " + error);
        });
}