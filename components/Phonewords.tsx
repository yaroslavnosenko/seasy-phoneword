import styles from '../styles/Phonewords.module.scss'

interface Props {
  phonewords: string[]
  loading: boolean
  error: boolean
}

export const Phonewords = (props: Props) => {
  const { phonewords, error, loading } = props
  return loading ? (
    <div className={styles.loading} />
  ) : error ? (
    <div className={styles.error}>Error, please enter correct numbers</div>
  ) : (
    <div className={styles.phonewords}>
      {phonewords.map((word: string) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  )
}
