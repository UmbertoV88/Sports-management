class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.cognome}`;
    }
};

class Giocatore extends Persona {
    constructor(nome, cognome) {
        super(nome,cognome);
        this.punteggi = 0;
    }

    nuoviPunti(punti) {
        this.punteggi += punti;
    }

    get punteggio() {
        return this.punteggi;
    }

    get descrizione() {
        return super.nomeCompleto + "-" + this.punteggi;
    }
};

class Allenatore extends Persona {
    constructor(nome, cognome, anno){
        super(nome,cognome);
        this.anno_assunzione = anno;
    }

    get descrizione() {
        return `${this.nomeCompleto} (dal ${this.anno_assunzione})`;
    }
};

class Squadra {
    constructor(nome, allenatore){
        this.nome = nome;
        this.allenatore = allenatore;
        this.giocatori = new Set();
    }

    nuovoGiocatore(giocatore) {
        this.giocatori.add(giocatore);
    }

    rimuoviGiocatore(giocatore){
        return this.giocatori.delete(giocatore);
    }

    stampaSquadra() {
        document.write(`Allena: ${allenatore.descrizione} <br>`)
        document.write(`<br>Formazione: (${this.giocatori.size} giocatori) <br>`);

        for(let g of this.giocatori){
            document.write(g.descrizione);
            document.write("<br>");
        }       
    }

    get capocannoniere() {
        let capocannoniere;
        for (let g of this.giocatori) {
            if(capocannoniere == null || capocannoniere.punteggio < g.punteggio) {
                capocannoniere = g;
            }
        }
        return capocannoniere;
    }

}