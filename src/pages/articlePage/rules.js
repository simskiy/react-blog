export const rulesTitle = {
    required: 'Поле обязталельно к заполнению',
    minLength: {
      value: 1,
      message: 'Поле не может быть пустым'
    },
    maxLength: {
      value: 128,
      message: 'Слишком длинный заголовок'
    },
    pattern: {
      value: /^[^\s].+[^\s]$/,
      message: 'нельзя начинать и заканчивать пробелом'
    }
  }

  export const rulesDescription = {
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 1,
      message: 'Поле не может быть пустым',
    },
    maxLength: {
      value: 512,
      message: 'Слишком длинное описание'
    },
    pattern: {
      value: /^[^\s].+[^\s]$/,
      message: 'нельзя начинать и заканчивать пробелом'
    }
  }

  export const rulesText = {
    required: 'Поле обязательно к заполнению',
    // pattern: {
    //   value: /^[^\s].+[^\s]$/,
    //   message: 'нельзя начинать и заканчивать пробелом'
    // }
  }

  // export const rulesTags = {
    // pattern: {
    //   value: /^[^\s].+[^\s]$/,
      // message: 'нельзя начинать и заканчивать пробелом'
    // }
  // }