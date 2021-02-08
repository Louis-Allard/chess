
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
                            casesname(c, pos_x, pos_y);
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

function casesname(c, pos_x, pos_y) {
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
            console.log("Cases authorisées: " + c);
            for (let i = 0; i < jsonResponse["cases"].length; i++) {
                if (jsonResponse["cases"][i]['case'] === c) {
                    console.log(jsonResponse["cases"][i])
                    /**
                    * Si name = id
                    *  Si moves.enabled = 1
                    *      Pour Chaque case
                    *          Colorer(pos_x = pos_x + c, pos_y = pos_y + l)
                    */

                }
            }
        }
        ).catch((error) => {
            console.log("Error " + error);
        });
}