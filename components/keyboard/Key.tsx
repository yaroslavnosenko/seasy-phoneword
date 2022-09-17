import { Key as KeyType } from '../../types'
import styles from '../../styles/Keyboard.module.scss'

interface Props {
  _key: KeyType
  onClick: (key: KeyType) => void
}

export const Key = (props: Props) => {
  const { _key, onClick } = props
  const { id, alpha } = _key
  return (
    <div className={styles.key} onClick={() => onClick(_key)}>
      <h3>{id}</h3>
      {alpha.length !== 0 && (
        <span>{alpha.map((alpha: string) => alpha + ' ')}</span>
      )}
    </div>
  )
}
