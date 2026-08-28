export interface BookingOwner {
  id: string
  displayName: string
}

export interface Booking {
  id: string
  roomId: string
  officeId: string
  title: string
  comment?: string
  startsAt: string
  endsAt: string
  status: 'active' | 'cancelled'
  owner: BookingOwner
  createdAt: string
  room?: {
    id: string
    name: string
    floor: number
    office: {
      id: string
      name: string
      timezone?: string
    }
  }
}

export interface CreateBookingDto {
  roomId: string
  title: string
  comment?: string
  startsAt: string
  endsAt: string
}
