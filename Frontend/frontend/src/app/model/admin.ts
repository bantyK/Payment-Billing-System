export class Admin {
    private id: number;
    private username: string;
    private password: string;
    private dateOfJoining: Date;
    private salary: number;

    constructor(id: number, username: string, password: string, dateofJoining: Date, salary: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.dateOfJoining = dateofJoining;
        this.salary = salary;
    }

    getId() {
        return this.id;
    }
}
