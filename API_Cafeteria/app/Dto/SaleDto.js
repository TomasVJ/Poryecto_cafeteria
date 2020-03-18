const BaseDto = requiere('./BaseDto');

class CategoryDto extends BaseDto{
    
    constructor(data, currentCategory = null){
        super();
        this.coffeeTable = null;
        this.status = false;
        this.fromObject(data, currentCategory);

    }
}

module.exports = CategoryDto;