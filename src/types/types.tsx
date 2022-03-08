export interface IPost {
  title: string
  body: string
  id: number
  userid: number
}

export interface IAddress {
  street: string
  city: string
}
export interface IUser {
  id: number
  name: string
  email: string
  address: IAddress
}
