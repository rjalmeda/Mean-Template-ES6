class IndexService{
    constructor($http){
        this.http = $http;
    }

    async getName(){
        console.log("service!")
        return await this.http.get('/getName');
    }
}

export default IndexService;