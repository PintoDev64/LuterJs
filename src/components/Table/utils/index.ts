export function checkDataParameter(data: {}[] | undefined) {
    return !Array.isArray(data) || data.length === 0 || Object.keys(data[0]).length === 0
}