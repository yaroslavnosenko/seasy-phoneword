import styles from '../styles/Input.module.scss'

interface Props {
  value: string
}

export const Input = (props: Props) => {
  const { value } = props
  return <div className={styles.input}>{value}</div>
}
