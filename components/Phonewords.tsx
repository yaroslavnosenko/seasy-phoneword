interface Props {
  phonewords: string[]
  loading: boolean
  error: boolean
}

export const Phonewords = (props: Props) => {
  const { phonewords } = props
  return (
    <div>
      {phonewords.map((word: string) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  )
}
