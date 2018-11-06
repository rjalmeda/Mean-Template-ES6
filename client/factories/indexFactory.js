class IndexFactory{
    constructor($http){
        this.http = $http;
    }

    async getName(){
        console.log("factory!");
        return await this.http.get('/getName');
    }
}

export default IndexFactory;