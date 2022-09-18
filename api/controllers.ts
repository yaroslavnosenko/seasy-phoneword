import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import { getDummyPhonewords, filterRealWords } from './services'

const ALLOWED: string[] = ['2', '3', '4', '5', '6', '7', '8', '9']

type PhonewordsRes = {
  data: string[] | null
}

const validateAndMutateRequest = (
  query: string | string[] | undefined
): [boolean, string[] | undefined] => {
  if (typeof query !== 'string') return [false, undefined]
  if (query === '') return [false, undefined]
  const mutated: string[] = query.split('')

  const filtered: string[] = mutated.filter(
    (char: string) => !ALLOWED.includes(char)
  )
  if (filtered.length !== 0) return [false, undefined]

  return [true, mutated]
}

export const PhonewordsController = (req: Req, res: Res<PhonewordsRes>) => {
  const { digits } = req.query
  const [isValid, mutated] = validateAndMutateRequest(digits)
  if (!(isValid && mutated)) {
    return res.status(400).send({ data: null })
  }
  const dummy: string[] = getDummyPhonewords(mutated)
  const data: string[] = filterRealWords(dummy)
  return res.status(200).json({ data })
}
