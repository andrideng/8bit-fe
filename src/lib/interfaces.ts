import { Profile } from "next-auth";

export interface ExtendedProfile extends Profile {
  given_name?: string;
  family_name?: string;
}

export interface TokenUser {
  user_id: number
  phone_number: any
  email: string
  membership_id: string
  locked: boolean
  wishlist: any[]
  created_at: string
  updated_at: string
  iat: number
  exp: number
}
