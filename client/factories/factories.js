import IndexFactory from "./indexFactory.js";

app.factory('indexFactory',function($http){
    return new IndexFactory($http);
})