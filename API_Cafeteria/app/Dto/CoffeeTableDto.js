const BaseDto = requiere('./BaseDto');

class CoffeeTableDto extends BaseDto{
    
    constructor(data, currentTable = null){
        super();
        this.order_id = null;
        this.number = null;
        this.sector = null;
        this.status = false;
        this.fromObject(data, currentTable);

    }
}

module.exports = CoffeeTableDto;