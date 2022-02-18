const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'
}

// console.log(target)

const handler = {
    get(obj, prop){
        if(prop in obj) {
            return obj[prop]
        }
        
        const suggestion = Object.keys(obj).find(key => {
            return levenshtein.get(key, prop) < 3
        })
            
        if(suggestion){
            console.log(`${prop} no se encontro, quisite decir ${suggestion}`)
        }
        return obj[prop]
    }
}

const p = new Proxy(target, handler)