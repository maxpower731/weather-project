
//Do I even need this class?  Thought I might need to connect to backend
export class Metar {
    constructor(
        public id: number,
        public airportCode: string,
        public windSpeedKt: number
    ) { }
}
