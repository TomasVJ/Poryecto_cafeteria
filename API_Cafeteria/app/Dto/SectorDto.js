const BaseDto = requiere('./BaseDto');

class SectorDto extends BaseDto{
    
    constructor(data, currentSector = null){
        super();
        this.name = null;
        this.status = true;
        this.fromObject(data, currentSector);

    }
}

module.exports = SectorDto;