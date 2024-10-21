function oblicz() {
    let rodzajPaliwa = document.getElementById("rodzajPaliwa").value;  
    let ileLitrow = document.getElementById("litry").value;  
    let wynik;
 
 
     if (rodzajPaliwa == 1) {
        wynik = ileLitrow * 4;
        document.getElementById("wyswietlacz").innerHTML = wynik + " zł";
    } 
    else if (rodzajPaliwa == 2) {
        wynik = ileLitrow * 3.5;
        document.getElementById("wyswietlacz").innerHTML = wynik + " zł";
    } 
    else {
        document.getElementById("wyswietlacz").innerHTML = "0 zł";
    }
}
