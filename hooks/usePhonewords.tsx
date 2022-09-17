import { useEffect, useState } from 'react'

const PHONEWORDS_URL = '/api/phonewords'

export const usePhonewords = (
  digits: string
): { data: string[]; loading: boolean; error: boolean } => {
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (digits === '') {
      setError(false)
      setLoading(false)
      setData([])
      return
    }
    setLoading(true)
    const url = new URL(PHONEWORDS_URL, document.baseURI)
    url.search = new URLSearchParams({ digits }).toString()
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.status.toString())
      })
      .then((res) => setData(res.data || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [digits])

  return { data, loading, error }
}
