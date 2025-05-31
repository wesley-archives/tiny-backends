import { ObjectId, Document } from "mongodb";

export class Base implements Document {
  _id?: ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
  _doc: any;

  constructor(data: Partial<Base>) {
    this._id = data._id;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }
}
