const NewsAPI = require('newsapi');
const newsAPI = new NewsAPI('NEWSAPIKEY');

(function() {
    'use strict';

    function fillNews(pos, news) {
        const newsCell = '#news' + pos + ' ';
        const title = $(newsCell + '.newsTitle');
        const desc = $(newsCell + '.newsDescription');
        const image = $(newsCell + '.newsImage');
        if (title.length) {
            title.html("<a href='" + news.url + "' target='_blank'>" + news.title.replace("\\", "") + "</a>");
        }
        if (desc.length) {
            desc.html("<a href='" + news.url + "' target='_blank'>" + news.description.replace("\\", "") + "</a>");
        }
        if (image.length) {
            image.html("<a href='" + news.url + "' target='_blank'><img src='" + news.urlToImage + "' height='100'/></a>")
        }
    }

    function refreshNews() {
        newsAPI.v2.topHeadlines({
            sources: 'google-news-fr',
        }).then(response => {
            for (let i = 0; i < 5; i++) {
                fillNews(i, response.articles[i]);
            }
            setTimeout(function() {
                for (let i = 0; i < 5; i++) {
                    fillNews(i, response.articles[5 + i]);
                }
            }, 30000);
        });
    }

    $(window).on('load', function() {
        setTimeout(refreshNews(), 0);
        setInterval(function() {
            refreshNews();
        }, 60000);
    });
}());
