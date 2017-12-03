#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests

from apcontent import alarmpi_content


class news(alarmpi_content):
    def build(self):
        try:
            rss_url = 'https://' + self.sconfig['host'] + self.sconfig['path']
            rss = requests.get(rss_url).json()

            newsfeed = ""
            for article in rss['articles']:
                if article['description'] != '':
                    newsfeed += unicode(article['title']).encode("utf8") + '.  ' + unicode(article['description']).encode("utf8") + '  '

            news = 'Et maintenant, Les dernieres histoires depuis Google.  ' + newsfeed
        except Exception as e:
            print e
            news = 'Impossible de lire Google News'

        if self.debug:
            print news.replace('.  ', "\n")

        self.content = news
