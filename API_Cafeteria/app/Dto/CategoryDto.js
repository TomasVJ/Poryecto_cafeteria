const BaseDto = requiere('./BaseDto');

class CategoryDto extends BaseDto{
    
    constructor(data, currentCategory = null){
        super();
        this.name = null;
        this.description = null;
        this.fromObject(data, currentCategory);

    }
}

module.exports = CategoryDto;