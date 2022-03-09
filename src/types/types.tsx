export interface IPost {
  title: string
  body: string
  id: number
  userId: number
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
