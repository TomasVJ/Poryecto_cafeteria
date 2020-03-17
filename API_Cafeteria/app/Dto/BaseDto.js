class BaseDto{
    /**
     * Inflate the DTO object with the given data
     * @param object data 
     * @return DTO 
     */
    fromObject(data, model= null){
        let instance = this;

        if (model !== null){
            for(let attr in model){
                if (instance.hasOwnProperty(attr) && instance[attr] === null){
                    instance[attr] = model[attr];
                }
            }
        }

        for (let attr in data){
            if (instance.hasOwnProperty(attr)){
                instance[attr] = data[attr];
            }
        }

        return instance;
    }

    /**
     * Get an object representation of the DTO
     * @return {object}
     */
    toObject(){
        const dto = {};
        for (let i in this){
            dto[i] = this[i];
        }
        return dto;
    }
}

module.exports = BaseDto;