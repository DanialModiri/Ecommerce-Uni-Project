module.exports = (filters) => {
    return Object.keys(filters).reduce((total, item) => {
        return { ...total, [`filters.${item}`]: Array.isArray(filters[item]) ? { $in: filters[item] } : filters[item] }
    }, {})
}