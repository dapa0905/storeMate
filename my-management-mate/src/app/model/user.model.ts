import { Role } from "../enum/role.enum";

export class User {
    userId: number;
    userName: string;
    email: string;
    password: string;
    role: Role;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;

    constructor(
        userId: number,
        userName: string,
        email: string,
        password: string,
        role: Role,
        isActive: boolean,
        createAt: Date,
        updateAt: Date,
    ){
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
        this.createAt = createAt;
        this.updateAt = updateAt;
    }
}