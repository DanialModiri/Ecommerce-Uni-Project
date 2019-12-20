export const length = ([maxLength, maxMsg], [minLength, minMsg]) => (value) => {
    value = value || [];
    if (value.length > maxLength)
        return maxMsg;
    else if (value.length < minLength)
        return minMsg;
    return undefined;
} 