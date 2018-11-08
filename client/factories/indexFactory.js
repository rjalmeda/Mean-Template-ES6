class IndexFactory{
    constructor($http){
        this.http = $http;
    }

    async getName(){
        let data = await this.http.get('/name');
        return data.data.name;
    }

    async postName(username){
        await this.http.post('/name', {username});
        return;
    }
}

export default function($http){
    return new IndexFactory($http);
};