export interface BookingOwner {
  id: string
  login: string
  displayName: string
  email: string
  avatarUrl?: string | null
  initials: string
}

export interface BookingRoom {
  id: string
  officeId: string
  name: string
  floor: number
  capacity: number
  features: { code: string; name: string }[]
}

export interface BookingOffice {
  id: string
  name: string
  address: string
  timezone: string
}

export interface Booking {
  id: string
  roomId: string
  userId: string
  title: string
  comment?: string | null
  startsAt: string
  endsAt: string
  createdAt: string
  room: BookingRoom
  office: BookingOffice
  owner: BookingOwner
}

export interface BookingsQueryParams {
  scope?: BookingsScope
  officeId?: string
}

export type BookingsScope = 'upcoming' | 'past' | 'all'

export interface CreateBookingDto {
  roomId: string
  title: string
  comment?: string
  startsAt: string
  endsAt: string
}
