var axios = require("axios");

var helpers = {

    // Run API Query
    runQuery: function(searchArr) {
        console.log(searchArr); //debug
        var 
            topic = searchArr[0].toString(),
            startYr = (searchArr[1].toString() || 1950) + '0101',
            endYr = (searchArr[2].toString() || 2016) + '1231';

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        return axios.get(url, {
            params: {
                'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
                'q': topic,
                'begin_date': startYr,
                'end_date': endYr
            }
        }).then(function(res) {

            var resultsArr = res.data.response.docs;
            var articlesArr = [];

            resultsArr.forEach(function(current, index){
                var newObj = {
                    title: current.headline.main,
                    date: current.pub_date,
                    url: current.web_url
                }
                articlesArr.push(newObj);

            });

            return articlesArr;
        });
    },

    // Make GET request to Mongoose db
    getSaved: function() {

        return axios.get('/api/saved').then(function(res) {

            var articlesArr = [];

            res.data.forEach(function(current, index){
                var newObj = {
                    title: current.title,
                    date: current.date,
                    url: current.url
                }
                articlesArr.push(newObj);

            });
            return articlesArr;

        });
    },

    // Make POST request to Mongoose db
    saveArticle: function(obj) {
        return axios.post('/api/saved', {
            title: obj.title,
            date: obj.date,
            url: obj.url
        }).then(function(res) {
            console.log('Article saved.');
        }).catch(function (error) {
            console.log(error);
        });
    }, 

    // Make DELETE request to Mongoose db. 
    // NOTE: axios.delete() by itself does not work; json needs to be specificied as the response type.
    deleteArticle: function(obj) {
        return axios({
            method: 'delete',
            url: '/api/saved',
            data: obj,
            responseType: 'json'
        }).then(function(res) {
            console.log('Article deleted.');
        }).catch(function (error) {
            console.log(error);
        });
    }
};

module.exports = helpers;