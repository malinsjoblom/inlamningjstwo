var timeAnstallda = {​​​​​
    name: "" ,
    timLon:0,
    timme:0,
    semesterErsättning:0,
    raknaManadasLon: function(){​​​​​
    var totalt= (this.timLon * this.timme) + this.semesterErsättning
    console.log(totalt)
    return totalt;
    }​​​​​
    }​​​​​
    // sätta value i ett objekt
    timeAnstallda.name = "Kalle Anka" // input fält
    timeAnstallda.timLon = 150
    timeAnstallda.timme = 160
    timeAnstallda.semesterErsättning = .12 //räkna semesterErsättning
    timeAnstallda.raknaManadasLon() 