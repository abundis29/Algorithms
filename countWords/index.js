function count(input){
    let arry = input.split(/\s+/);
    const obj = {}
    arry.forEach(element => {
      obj[element] = obj.hasOwnProperty(element) ? obj[element] + 1 : 1 
    })
    
    let values = Object.values(obj)
    let max = Math.max(...values)
    return getMostFrequentlyWord(obj, max); 
}
  
function getMostFrequentlyWord(obj, value){
    for(let element in obj){
      if(obj[element] == value){
        return element
      }
    }
}

module.exports = count;