import { BaseModel } from './base-model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  id!: number;
  first_name!: string;
  last_name!: string;
  username!: string;
  password!: string;
  email!: string;
}