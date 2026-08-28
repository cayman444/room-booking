export interface RoomsParams {
  officeId: string
  minCapacity?: number
  from?: string
  to?: string
}

export interface Room {
  id: string
  officeId: string
  name: string
  floor: number
  capacity: number
  features: {
    code: RoomFeaturesCode
    name: string
  }[]
  office: {
    id: string
    name: string
    address: string
    timezone: string
  }
  available: boolean
}

export type RoomFeaturesCode = 'display' | 'whiteboard' | 'video'
