class IndexController{
    constructor($scope, $location, indexFactory, indexService){
        this.indexFactory = indexFactory;
        this.indexService = indexService;
        this.scope = $scope;
    }

    async factoryGetName(){
        let name = await this.indexFactory.getName();
        this.scope.$apply(()=>{
            this.scope.name = `Factory ${name.data}`;
        });
    }

    async serviceGetName(){
        let name = await this.indexService.getName();
        this.scope.$apply(()=>{
            this.scope.name = `Service ${name.data}`;
        });
    }
}

export default IndexController;