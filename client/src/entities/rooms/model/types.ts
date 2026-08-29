export type RoomFeaturesCode = 'display' | 'whiteboard' | 'video'

export interface RoomFeature {
  code: RoomFeaturesCode
  name: string
}

export interface RoomOffice {
  id: string
  name: string
  address: string
  timezone: string
}

export interface RoomBookingOwner {
  id: string
  login: string
  displayName: string
  email: string
  avatarUrl: string | null
  initials: string
}

export interface RoomsParams {
  officeId: string
  minCapacity?: number
  from?: string
  to?: string
}

export interface RoomBookingsParams {
  from?: string
  to?: string
}

export interface Room {
  id: string
  officeId: string
  name: string
  floor: number
  capacity: number
  features: RoomFeature[]
  office: RoomOffice
  available?: boolean
}

export interface RoomBooking {
  id: string
  roomId: string
  userId: string
  title: string
  comment: string | null
  startsAt: string
  endsAt: string
  createdAt: string
  room: Omit<Room, 'office' | 'available'>
  office: RoomOffice
  owner: RoomBookingOwner
}
