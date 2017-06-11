export class Admin {
    private branch: string;
    private username: string;
    private password: string;
    private dateOfJoining: Date;
    private salary: number;

    constructor(username: string, password: string, dateofJoining: Date, salary: number) {
        this.username = username;
        this.password = password;
        this.dateOfJoining = dateofJoining;
        this.salary = salary;
    }
}