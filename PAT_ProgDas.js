// nomor 1 (satu)
function motorcycle(brand,maxspeed) {
    this.brand
    this.color
    this.maxspeed
}

// nomor 2 (dua)
class H2carbon extends motorcycle {
    constructor(brand,maxspeed) {
        super(brand,maxspeed,true);
    }
    drove() {
        return `${this.brand} melaju dengan cepat!`;
    }
}

// nomor 3 (tiga)
class Honda extends motorcycle {
    constructor(brand,maxspeed) {
        super(brand,maxspeed, false);
    }
    turn() {
        return `${this.brand} berbelo ke kiri!`;
    }
}

// nomor 4 (empat)
const H2carbon1 = new H2carbon ('H2carbon',300);

// nomror 5 (lima)
const Honda1 = new Honda ('Honda',150)

// contoh penggunaan
console.log(H2carbon1.drove()); //melaju dengan cepat
console.log(Honda1.turn());  //ber belok ke kiri
console.log(H2carbon1);  //motorcycle {brand: 'H2carbon', maxspeed: 300}
console.log(Honda1);  //motorcycle {brand: 'Honda', maxspeed: 150}
