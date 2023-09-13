giocatore1 = new Giocatore("Alessio", "Binchi");
giocatore2 = new Giocatore("Marco", "Rossi");
giocatore3 = new Giocatore("Roberto", "Neri");

allenatore = new Allenatore("Roberto", "Mancini", 2008);

squadra = new Squadra("Le Acquile",allenatore);

giocatore1.nuoviPunti(3);
giocatore1.nuoviPunti(2);

giocatore2.nuoviPunti(7);

giocatore3.nuoviPunti(1);
giocatore3.nuoviPunti(1);

squadra.nuovoGiocatore(giocatore1);
squadra.nuovoGiocatore(giocatore2);
squadra.nuovoGiocatore(giocatore3);

squadra.stampaSquadra();

document.write("<br><br>");
document.write("Miglior cannoniere: " + squadra.capocannoniere.descrizione + "<br><br>");
document.write("<br><br>");

if(squadra.rimuoviGiocatore(giocatore2)){
    document.write("<br> Giocatore rimosso <br>");
} else {
    document.write("<br> Giocatore non presente <br>");
}
document.write("<br><br>");

squadra.stampaSquadra();

document.write("<br><br>");

document.write("Miglior cannoniere: " + squadra.capocannoniere.descrizione + "<br><br>");
