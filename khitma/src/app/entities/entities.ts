
export const NUM_OF_AJZA = 30;


export const JUZ_STATUS = Object.freeze({
    IDLE: 0,
    BOOKED: 1,
    DONE: 2
});



export class Juz {
    index: number;
    status: number;
    owner: string;

    public constructor(init?: Partial<Juz>) {
        Object.assign(this, init);
    }

}

export class KhitmaGroup {
    id?: string;
    title?: string;
    description?: string;
    author?: string;
    creationDate?: Date;
    ajza?: Juz[];
    cycle?: number;

    public constructor(init?: Partial<KhitmaGroup>) {
        Object.assign(this, init);
        this.cycle = init.cycle || 0;
        this._initAjza();
    }

    public isDone() {
        return this.ajza.every(juz => juz.status === JUZ_STATUS.DONE);
    }

    private _initAjza() {
        this.ajza = [];
        for (var i = 0; i < NUM_OF_AJZA; i++) {
            this.ajza.push(new Juz({ index: i, status: JUZ_STATUS.IDLE }))
        }

        // this.ajza = Array(NUM_OF_AJZA).fill(new Juz());
    }

    public assignJuz(juzIndex, owner) {
        this.ajza[juzIndex].owner = owner;
    }

    public getURL() {
        return location.origin + '/group/' + this.id;
    }

    toJson() {

        let res = new KhitmaGroup(this);

        // convert to native js object
        res.ajza = this.ajza.map((obj) => { return Object.assign({}, obj) });

        return res;
    }

    getAjzaObj() {
        return { ...this.ajza.map((obj) => { return Object.assign({}, obj) }) };
    }

    public isAdmin(username) {
        return username == this.author;
    }


    static getEmptyAjzaObj() {

        let ajza = [];
        for (var i = 0; i < NUM_OF_AJZA; i++) {
            ajza.push(new Juz({ index: i, status: JUZ_STATUS.IDLE }))
        }

        return { ...ajza.map((obj) => { return Object.assign({}, obj) }) };
    }

}

