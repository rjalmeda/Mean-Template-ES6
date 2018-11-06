import IndexService from "./IndexService.js";

app.service('indexService', function($http){
    return new IndexService($http);
})