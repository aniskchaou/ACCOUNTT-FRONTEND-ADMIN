import { User } from "./user";

export class Admin extends User {


    private static instance: Admin;

    private constructor() {
        super(true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true, true, true, true, true, true)
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Admin();
        }
        return this.instance;
    }
}