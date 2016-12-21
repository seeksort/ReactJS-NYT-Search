var axios = require("axios");

var helpers = {

    // Run API Query
    runQuery: function(searchArr) {
        console.log(searchArr); //debug
        var 
            topic = searchArr[0].toString(),
            startYr = (searchArr[1].toString() || 1950) + '0101',
            endYr = (searchArr[2].toString() || 2016) + '1231';

        console.log(topic + ' ' + startYr + ' ' + endYr)//debug

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

            var resultsArr = res;
            var articlesArr = [];

            res.forEach(function(current, index){
                var newObj = {
                    title: current.title,
                    date: current.date,
                    url: current.url
                }
                articlesArr.push(newObj);

            });
            console.log(articlesArr);
            return articlesArr;

        });
    }
};

module.exports = helpers;