import { KeyboardConfig } from '../../keyboard.config'
import { Key as KeyType } from '../../types'
import { Key } from './Key'
import styles from '../../styles/Keyboard.module.scss'

interface Props {
  onKeyAdd: (key: KeyType) => void
  onClear: () => void
}

export const Keyboard = (props: Props) => {
  const { onKeyAdd, onClear } = props
  return (
    <div>
      <div className={styles.keyboard}>
        {KeyboardConfig.map((key: KeyType) => (
          <Key key={key.id} _key={key} onClick={onKeyAdd} />
        ))}
      </div>
      <div className={styles.clear} onClick={onClear}>
        CLEAR
      </div>
    </div>
  )
}
