function start_chronometrus() {
    // elements
    updateTime();
}

function updateTime() {
    let elSecR = document.querySelector("#secr_display");
    let elSecL = document.querySelector("#secl_display");
    let elMinR = document.querySelector("#minr_display");
    let elMinL = document.querySelector("#minl_display");
    let elHouR = document.querySelector("#hourr_display");
    let elHouL = document.querySelector("#hourl_display");

    setInterval(function () {
        if (Number(elSecR.innerHTML) < 9) {
            elSecR.innerHTML = Number(elSecR.innerHTML) + 1;
        } else {
            if (Number(elSecL.innerHTML) < 5) {
                elSecR.innerHTML = 0
                elSecL.innerHTML = Number(elSecL.innerHTML) + 1;
            } else {
                if (Number(elMinR.innerHTML) < 9) {
                    elSecL.innerHTML = 0;
                    elSecR.innerHTML = 0;
                    elMinR.innerHTML = Number(elMinR.innerHTML) + 1;
                } else {
                    if (Number(elMinL.innerHTML) < 5) {
                        elSecL.innerHTML = 0;
                        elSecR.innerHTML = 0;
                        elMinR.innerHTML = 0
                        elMinL.innerHTML = Number(elMinL.innerHTML) + 1;
                    } else {
                        if (Number(elHouR.innerHTML) < 9) {
                            elSecL.innerHTML = 0;
                            elSecR.innerHTML = 0;
                            elMinR.innerHTML = 0;
                            elMinL.innerHTML = 0;
                            elHouR.innerHTML = Number(elHouR.innerHTML) + 1;
                        } else {
                            elSecL.innerHTML = 0;
                            elSecR.innerHTML = 0;
                            elMinR.innerHTML = 0;
                            elMinL.innerHTML = 0;
                            elHouR.innerHTML = 0;
                            elHouL.innerHTML = Number(elHouL.innerHTML) + 1;
                        }
                    }
                }
            }
        }
    }, 1000);
}