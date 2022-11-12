export class Profile {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public age: number,
        public job: string,
        public image: string,
        public description: string = '',
    ) { }
}