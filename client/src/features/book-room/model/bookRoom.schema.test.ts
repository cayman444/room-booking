import { describe, expect, it } from 'vitest'
import { bookRoomSchema } from './bookRoom.schema'

describe('bookRoomSchema', () => {
  it('validates a correct booking payload', () => {
    const validData = {
      title: 'Синхронизация команды',
      date: '2026-10-24',
      startTime: '10:00',
      duration: 60,
      comment: 'Обсуждение архитектуры',
    }

    const result = bookRoomSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('fails when title is empty or only whitespace', () => {
    const invalidData = {
      title: '   ',
      date: '2026-10-24',
      startTime: '10:00',
      duration: 60,
    }

    const result = bookRoomSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails when title exceeds 100 characters', () => {
    const invalidData = {
      title: 'a'.repeat(101),
      date: '2026-10-24',
      startTime: '10:00',
      duration: 60,
    }

    const result = bookRoomSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails when duration is less than 15 minutes', () => {
    const invalidData = {
      title: 'Встреча',
      date: '2026-10-24',
      startTime: '10:00',
      duration: 10,
    }

    const result = bookRoomSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('allows optional comment to be omitted', () => {
    const validData = {
      title: 'Встреча 1 на 1',
      date: '2026-10-24',
      startTime: '14:30',
      duration: 30,
    }

    const result = bookRoomSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })
})
