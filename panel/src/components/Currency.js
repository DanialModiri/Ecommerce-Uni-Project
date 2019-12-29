function Currency(value) {
    return (Math.ceil(value) === value ? value : value.toFixed(2)).toLocaleString()
}

export default Currency;