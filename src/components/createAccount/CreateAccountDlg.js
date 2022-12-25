import React from "react"
import Btn from "../btn/Btn"
import Input from '../input/Input'
import styles from './createAccountDlg.module.scss'
import { Link } from "react-router-dom"

const handleSubmit = (e) => {
  e.preventDefault();
}

const CreateAccountDlg = () => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>Create New Account</legend>
        <Input label={'Username'} type={'text'} placeholder='Username' />
        <Input label={'Email adress'} type={'email'} placeholder='Email adress'/>
        <Input label='Password' type='password' placeholder='Password' />
        <Input label='Repeat Password' type='password' placeholder='Password' />
      </fieldset>
      <hr className={styles.line} />
      <label className={styles.agree}>
        <input type='checkbox' />
        <span>I agree to the processing of my personal information</span>
      </label>
      <Btn label='Create' className={styles.btn} />
      <span className={styles.note}>Already have an account? <Link to='/login' >Sign In.</Link></span>      
    </form>  
  )
}

export default CreateAccountDlg