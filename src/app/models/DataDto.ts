export class DataDto {
    name: string;
    species: string;
    house: string;
    dateOfBirth: string;
    patronus: string;
    image: string;

    gender: string;
    yearOfBirth: number;
    ancestry: string;
    eyeColour: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    alive: boolean;
    actor: string;
    wand: Wand;

    constructor(){
        this.name = "";
        this.species = "";
        this.house = "";
        this.dateOfBirth = "";
        this.patronus = "";
        this.image = "";
        this.gender = "";
        this.yearOfBirth = 0;
        this.ancestry = "";
        this.eyeColour = "";
        this.actor = "";
        this.hogwartsStudent = false;
        this.hogwartsStaff = false;
        this.alive = false;
        this.wand = new Wand();
    }
}

export class Wand {
    wood: string;
    core: string;
    length: number;
    constructor(){
        this.wood = "";
        this.core = "";
        this.length = 0;
    }
}