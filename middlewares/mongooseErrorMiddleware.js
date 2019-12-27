module.exports = (err, req, res, next) => {
    console.log('VALIDATION',err)
    if (err && err.name === 'ValidationError')
        return res.status(400).send(
            Object.keys(err.errors).map(item => ({ name: item, message: err.errors[item] }))
        );
}