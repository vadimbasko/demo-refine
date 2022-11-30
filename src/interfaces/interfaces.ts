import {Dayjs} from "dayjs";

export interface ICompany {
  id: string
  name: string
  staffCount?: number
  website?: string
}

export interface IUser {
  id: string
  email: string
  banned?: boolean
  company?: ICompany
  firstName?: string
  lastName?: string
  registrationDate?: Date
  role?: IRole
  userSource?: UserSource
}


export enum UserSource {
  Mobile = "MOBILE",
  Offline = "OFFLINE",
  Web = "WEB",
}

export interface IRole {
  id: string
  name: string
  mobileAccess?: boolean
  webAccess?: boolean
}

export interface IPostFilterVariables {
  company: string;
  userSource: string;
  registrationDate: [Dayjs, Dayjs];
}
