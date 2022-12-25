import styles from './btn.module.scss'

const Btn = (props) => {
const {label, className} = props

  return (
    <button
      className={`${className} ${styles.btn}`}
    >{label}</button>)
}

export default Btn