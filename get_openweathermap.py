#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import urllib

from apcontent import alarmpi_content


class openweathermap(alarmpi_content):
    def build(self):
        try:
            weather_url = "https://" + \
                          self.sconfig["host"] + \
                          self.sconfig["path"] + \
                          self.sconfig["location"] + \
                          self.sconfig["pathtail"]
            weather_api = urllib.urlopen(weather_url)
            response = weather_api.read()
            response_dictionary = json.loads(response)

            current = str(round(response_dictionary['main']['temp'], 1)).replace(".", ",")
            current_low = str(round(response_dictionary['main']['temp_min'], 1)).replace(".", ",")
            current_high = str(round(response_dictionary['main']['temp_max'], 1)).replace(".", ",")
            conditions = "\"" + response_dictionary['weather'][0]['description'].encode('utf8') + "\""

            weather_openweathermap = 'Le temps pour aujourd\'hui est ' + conditions + '.  La température est de ' + str(current) + '° variant entre ' + str(
                current_low) + ' et ' + str(current_high) + '°.  '
        except Exception as e:
            print(e)
            weather_openweathermap = u'Impossible de récupérer la meteo sur openweathermap.  '.encode('utf-8')
        if self.debug:
            print weather_openweathermap

        self.content = weather_openweathermap
