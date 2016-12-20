var axios = require("axios");

var helpers = {

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
            console.log(res.data.response.docs[0].web_url); //debug
            return res;
        });
    }
};

module.exports = helpers;