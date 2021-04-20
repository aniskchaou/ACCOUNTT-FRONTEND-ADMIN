import { User } from "./user";

export class Accountant extends User {

    private static instance: Accountant;

    private constructor() {
        super(true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true, true, true)
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Accountant();
        }
        return this.instance;
    }
}