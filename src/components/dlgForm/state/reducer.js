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
    case 'onSubmit': {
      // console.log(state)
      break;
    }
    default: return state
  }
}