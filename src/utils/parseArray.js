module.exports = function parseArray(stringArray){
    return stringArray.split(",").map(tech => tech.trim());
}