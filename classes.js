class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
};

class Giocatore extends Persona {
    constructor(nome, cognome) {
        super(nome,cognome);
        this.punteggi = 0;
    }
};

class Allenatore extends Persona {
    constructor(nome, cognome, anno){
        super(nome,cognome);
        this.anno_assunzione = anno;
    }
};

class Squadra {
    constructor(nome, allenatore){
        this.nome = nome;
        this.allenatore = allenatore;
        this.giocari = new Set();
    }
}