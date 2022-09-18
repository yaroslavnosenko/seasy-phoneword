import { KeyboardConfig } from '../keyboard.config'
import { words } from '../words'
import { Key } from '../types'

export const getDummyPhonewords = (digits: string[]): string[] => {
  const phonewords: string[] = []
  const add = (letter: string, index: number) => {
    if (letter.length === digits.length) {
      phonewords.push(letter)
      return
    }
    const alpha: string[] =
      KeyboardConfig.find((key: Key) => key.id === digits[index])?.alpha || []
    for (let i = 0; i < alpha.length; i++) {
      add(letter + alpha[i], index + 1)
    }
  }
  add('', 0)
  return phonewords
}

export const filterRealWords = (phonewords: string[]): string[] =>
  phonewords.filter((phoneword: string) => words.includes(phoneword))
