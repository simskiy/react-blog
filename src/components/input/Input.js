import styles from './input.module.scss'
import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    label, 
    type, 
    placeholder, 
    autocomplete = 'off', 
  } = props
  return (
    <label className={styles.label}>
      {label}
      <input 
        type={type} 
        className={styles.input} 
        placeholder={placeholder}
        autoComplete={autocomplete}
      />        
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.oneOf(['on', 'off'])
}

export default Input

