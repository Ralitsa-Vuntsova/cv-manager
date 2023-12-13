import { Model, ModelOptions, QueryContext } from "objection";

export class BaseModel extends Model {
  async $beforeInsert(context: QueryContext) {
    await super.$beforeInsert(context);

    this.updatedAt = new Date();
    this.createdAt = new Date();
  }

  async $beforeUpdate(opts: ModelOptions, context: QueryContext) {
    await super.$beforeUpdate(opts, context);

    this.updatedAt = new Date();
    delete (this as any).createdAt;
  }

  createdAt!: Date;
  updatedAt!: Date;
}