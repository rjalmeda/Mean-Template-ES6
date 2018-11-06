class IndexController{
    constructor($scope, $location, indexFactory, indexService){
        this.indexFactory = indexFactory;
        this.indexService = indexService;
    }

    async factoryGetName(){
        return console.log(await this.indexFactory.getName());
    }

    async serviceGetName(){
        return console.log(await this.indexService.getName());
    }
}

export default IndexController;