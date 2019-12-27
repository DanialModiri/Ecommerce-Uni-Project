export const composeValidators = (validators) => value => {
    for(let i in validators){
        const validationError = typeof validators[i] === 'function' ? validators[i](value) : null;
        if(validationError)
            return validationError;
    }
}