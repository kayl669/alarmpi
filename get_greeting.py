#!/bin/python
# -*- coding: utf-8 -*-
import time
import unicodedata

month = {1: 'Janvier', 2: 'Fevrier', 3: 'Mars', 4: 'Avril', 5: 'Mai', 6: 'Juin', 7: 'Juillet', 8: 'Aout', 9: 'Septembre', 10: 'Octobre', 11: 'Novembre',
         12: 'Decembre'}
days = {0: 'Dimanche', 1: 'Lundi', 2: 'Mardi', 3: 'Mercredi', 4: 'Jeudi', 5: 'Vendredi', 6: 'Samedi'}

from apcontent import alarmpi_content

class greeting(alarmpi_content):
  def build(self):
    now = days[int(time.strftime("%w"))] + " " + time.strftime("%d") + " " + month[int(time.strftime("%m"))] + ', il est ' + time.strftime(" %H:%M")

    if int(time.strftime("%H")) < 12:
      period = 'Bonjour'
    if int(time.strftime("%H")) >= 12:
      period = u'Bonne après-midi'.encode('utf8')
    if int(time.strftime("%H")) >= 17:
      period = 'Bonsoir'

    # reads out good morning + my name
    gmt = period + ', '

    # reads date and time
    day = ' nous sommes le ' + now + '.  '

    greeting = gmt + self.sconfig['name'] + ", " + day

    if self.debug:
      print greeting

    self.content = greeting
