// ==UserScript==
// @name         UNG COVID Info
// @version      8.26.2020
// @description  To Count COVID Cases at UNG
// @author       Jeremy Wolfe
// @match        https://ung.edu/together/managing-covid.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Definitions
    var tableRows = document.getElementsByClassName("table-bluehead-hzlines tablesaw tablesaw-stack")[0].rows
    var currentTime = new Date()
    var twoWeeks = new Date(currentTime - 12398e5)
    var dCount = 0
    var gCount = 0
    var oCount = 0
    var cCount = 0
    var twoDCount = 0
    var twoGCount = 0
    var twoOCount = 0
    var twoCCount = 0
    var i

    //Finding Campus Totals
    for (i=0; i < tableRows.length;i++) {

        var campus = (tableRows[i].cells[2].textContent).split("Campus")[1].trim()
        var dateFound = new Date ((tableRows[2].cells[0].textContent).split("d")[1])

        if (campus == "Dahlonega") {

            dCount++

        }
        if (campus == "Cumming") {

            cCount++

        }

        if (campus == "Gainesville") {

            gCount++

        }

        if (campus == "Oconee") {

            oCount++

        }



    }
    var total = (dCount+gCount+oCount+cCount)


    //Finding 2 Week Out
    for (i=0; i < tableRows.length;i++) {
        campus = (tableRows[i].cells[2].textContent).split("Campus")[1].trim()
        dateFound = new Date ((tableRows[i].cells[0].textContent).split("d")[1])
        if (dateFound >= twoWeeks) {
            if (campus == "Dahlonega") {
                twoDCount++
            }

            if (campus == "Cumming") {
                twoCCount++
            }

            if (campus == "Gainesville") {
                twoGCount++
            }

            if (campus == "Oconee") {
                twoOCount++
            }


        }
    }





    var textToAdd = ("<div style = \"padding-top:100px;color: white;background: #002f87;text-align: center;padding-bottom: 30px;\"><h1>Total Counts <br></h1>" + "<h4>Dahlonega Count: " + dCount + " |     "
                 + "Cumming Count: " + cCount + " |     "
                 + "Gainesville Count: " + gCount + " |     "
                 + "Oconee Count: " + oCount + "<br></h4>"
                 + "<h1>Percentages<br></h1>"
                 + "<h4>Dahlonega: " + (Math.ceil(dCount/total * 100)) + "% |     "
                 + "Cumming: " + (Math.ceil((cCount/total * 100))) + "% |     "
                 + "Gainesville: " + (Math.ceil(gCount/total * 100)) + "% |      "
                 + "Oconee: " + (Math.ceil(oCount/total * 100)) + "% " + "</h4>"
                 + "<h1>Last Two Weeks<br></h1>"
                 + "<h4> Dahlonega: " + twoDCount + " |    "
                 + " Cumming: " + twoCCount + " |    "
                 + " Gainesville: " + twoGCount + " |    "
                 + " Oconee: " + twoOCount + "</h4>"
                 + "</div>"
                )

    document.body.innerHTML = textToAdd + document.body.innerHTML
})();
