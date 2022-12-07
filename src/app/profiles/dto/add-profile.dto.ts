export class AddProfileDto {
    constructor(
        public firstname: string,
        public lastname: string,
        public age: number,
        public job: string
    ) { }
}