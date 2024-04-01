import { ObjectId } from 'mongodb';

export interface IGetAllResponse<T> {
  page: number;
  perPage: number;
  total: number;
  data: T[];
}

export interface INode {
  _id: ObjectId;
  parent: ObjectId;
  name: string;
  count: number;
  children?: INode[] | [];
}

export interface IMessage {
  messageSid: string;
  dateCreated: Date;
  from: string;
  senderId: ObjectId;
  message: string;
}

export interface IJoin {
  accountSid: string;
}

export interface IChatComplete {
  channelSid: string;
  channelName: string;
  profilePicture?: string;
  messages: {
    messageSid: string;
    message: string;
    author: string;
    dateTime?: Date;
  }[];
}

export interface PopulatedSenderId {
  _id: string;
  profilePicture: string;
  // Add other properties as needed
}

export interface IGenericFile {
  size: number;
  buffer: Buffer;
  encoding: string;
  mimetype: string;
  fieldname: string;
  originalname: string;
}
