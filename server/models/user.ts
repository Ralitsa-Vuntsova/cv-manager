import { Model } from 'objection';

export class UserModel extends Model {
  static tableName = 'users';

  id!: number;
  first_name!: string;
  last_name!: string;
  username!: string;
  password!: string;
  email!: string;
  created_at!: Date;
  updated_at!: Date;
}