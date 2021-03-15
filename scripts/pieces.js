
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
    let array_case = [];
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
                            casesEnable(c, n, a, pos_x, pos_y, array_case);
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
    _array_case(array_case);
};

function casesEnable(c, n, a, pos_x, pos_y, array_case) {
    /** Name cases around each piece 
     *  Change color of the enable cases 
     *   c     => case letter
     *   n     => piece name: name
     *   a     => move: all 0/1
     *   pos_x => piece horizontal position: c
     *   pos_y => piece vertical position: l
     * **/
    const case_letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let caseEnable = pos_x + pos_y;
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
                                npos_x = case_letter[j + Number(col)];
                                npos_y = Number(pos_y) + Number(lig);
                            }
                            else {
                                npos_x = case_letter[j - Number(col)];
                                npos_y = Number(pos_y) - Number(lig);

                            }
                            switch (a) {
                                case "0":
                                    if (n != "w_pawn") {
                                        caseEnable = npos_x + Number(npos_y);
                                        if (Number(npos_y >= 1)) {
                                            if (document.getElementById(caseEnable) != null) {
                                                document.getElementById(caseEnable).classList.add("caseEnable");
                                                setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 1000);
                                                _case_Enable(caseEnable);
                                                return caseEnable;
                                            }
                                        }
                                    }
                                    else {
                                        if (npos_y = "2") {
                                            for (i = 1; i < 3; i++) {
                                                let cp = Number(npos_y) + Number(i);
                                                caseEnable = npos_x + cp;
                                                if (document.getElementById(caseEnable) != null) {
                                                    document.getElementById(caseEnable).classList.add("caseEnable");
                                                    setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 1000);
                                                    _case_Enable(caseEnable);
                                                }
                                            }
                                        }
                                        else {

                                        }
                                    }

                                    break;
                                case "1":
                                    switch (n) {
                                        case "w_bishop":
                                            for (let i = 0; i < case_letter.length; i++) {
                                                _npos_x = case_letter[i + 1];
                                                console.log("nposx:: " + _npos_x);
                                            }
                                            break;
                                        case "w_tower":
                                            console.log("Not yet !");
                                            break;
                                        case "w_queen":
                                            console.log("Not yet !");
                                            break;
                                        default:
                                            break;
                                    }
                                    /* SHOW THE ENABLE CASES
                                    if (Number(pos_y >= 1)) {
                                        if (document.getElementById(caseEnable) != null) {
                                            document.getElementById(caseEnable).classList.add("caseEnable");
                                            setTimeout(() => { document.getElementById(caseEnable).classList.remove("caseEnable") }, 1000);
                                            _case_Enable(caseEnable);
                                            return caseEnable;
                                        }
                                    }
                                    */
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