import { BaseResponse } from "src/app/shared/model/base-response.model";

export class UsersResponse extends BaseResponse {
    data: User[] = [];
}

export class User {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

export class UserResponse {
    data: User = new User();
    support?: any;
}