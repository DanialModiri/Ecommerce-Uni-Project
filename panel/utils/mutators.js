export const update = {
    update: ([fieldName, value], state, utils) => {
      if (typeof fieldName === 'object') {
        const newState = fieldName;
        return Object.keys(fieldName).forEach(key => {
          return utils.changeValue(state, key, () => newState[key]);
        })
      }
      return utils.changeValue(state, fieldName, () => value)
    }
  }