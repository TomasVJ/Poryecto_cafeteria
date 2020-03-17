const BaseDto = requiere('./BaseDto');

class ProductDto extends BaseDto{
    
    constructor(data, currentProduct = null){
        super();
        this.name = null;
        this.code = null;
        this.description = null;
        this.price = null;
        this.status = true;
        this.category_id = null;
        this.fromObject(data, currentProduct);

    }
}

module.exports = ProductDto;