class IndexController{
    constructor($scope, $location, indexFactory, indexService){
        this.indexFactory = indexFactory;
        this.indexService = indexService;
        this.scope = $scope;
    }

    async getName(){
        console.log("here");
        this.scope.name = await this.indexFactory.getName();
        return this.scope.$apply();
    }

    async postName(){
        console.log("here!");
        await this.indexFactory.postName(this.scope.username);
        this.scope.name = `Added ${this.scope.username}`;
        return this.scope.$apply();
    }
}

export default IndexController;