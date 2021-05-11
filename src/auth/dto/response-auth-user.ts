import { User } from "src/user/user.entity";

export interface ResponseAuthUser {
    token: string;
    user: User;
}