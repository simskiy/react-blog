export const initialState = {
  email: null,
  check: true,
  newPassword: null,
  password: null,
  repeatPassword: null,
  username: null,
  avatar: null,
}


const components = {
  inputEmail: 'email',
  inputNewPassword: 'newPassword',
  inputPassword: 'password',
  inputRepeatPassword: 'repeatPassword',
  inputUsername: 'username',
  inputAvatar: 'avatar'
}

export function reducer (state, action) {
  switch(action.type) {
    case 'onChangeEmail': {
      const {email} = action.payload
      return {...state, email}
    }
    case 'onChangeUsername': {
      const {username} = action.payload
      return {...state, username}
    }
    case 'onChangePassword': {
      const {password} = action.payload
      return {...state, password}
    }
    case 'onChangeRepeatPaswword': {
      const {repeatPassword} = action.payload
      return {...state, repeatPassword}
    }
    case 'onChangeNewPassword': {
      const {newPassword} = action.payload
      return {...state, newPassword}
    }
    case 'onChangeAvatar': {
      const {avatar} = action.payload
      return {...state, avatar}
    }
    case 'onCheckAgree': {
      // const {check} = action.payload
      return {...state, ...{check: !state.check}}
    }
    case 'onSelectMode': {
      const {mode} = action.payload
      return {...state, mode}
    }
    case 'onReset': {
      const {component} = action.payload
      return {...state, ...{[components[component]]: null, password: null, repeatPassword: null, newPassword: null}}
    }
    // case 'setError': {
    //   const {error} = action.payload
    //   return {...state, error}
    // }
    // case 'onSubmit': {
    //   return initialState
    // }
    
    default: return state
  }
}