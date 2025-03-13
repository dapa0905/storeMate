import { User } from "../model/user.model"
import { Role } from "../enum/role.enum"

export const USERS: User[] = [

    {
        userId: 1,
        userName: 'admin',
        email: 'admin@example.com',
        password: 'hashedpassword', // 실제 해시된 비밀번호를 사용할 경우 해싱 처리 필요
        role: Role.Admin,
        isActive: true,
        createAt: new Date(),
        updateAt: new Date(),
    },
    
    {
        userId: 2,
        userName: 'user',
        email: 'user@example.com',
        password: 'hashedpassword', // 실제 해시된 비밀번호를 사용할 경우 해싱 처리 필요
        role: Role.User,
        isActive: true,
        createAt: new Date(),
        updateAt: new Date(),
    },

    {
        userId: 3,
        userName: 'user',
        email: '1111',
        password: '1111', // 실제 해시된 비밀번호를 사용할 경우 해싱 처리 필요
        role: Role.User,
        isActive: true,
        createAt: new Date(),
        updateAt: new Date(),
    },
];