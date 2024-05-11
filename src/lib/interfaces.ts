import { Profile } from "next-auth";

export interface ExtendedProfile extends Profile {
  given_name?: string;
  family_name?: string;
}

export interface TokenUser {
  user_id: number
  membership_id: string
  email: string
  email_verified: boolean
  updated_at: string
  created_at: string
  phone_number: any
  phone_verified: any
  iat: number
  exp: number
}
