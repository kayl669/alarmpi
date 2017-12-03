#!/usr/bin/env python
# -*- coding: utf-8 -*-
import subprocess
import time

from apeffect import alarmpi_effect

class tv(alarmpi_effect):
  def __init__(self, stype, sconfig, debug,main):
    alarmpi_effect.__init__(self, stype, sconfig, debug,main)
    self.delay = int(self.sconfig['delay'])

  def begin(self):
    print subprocess.call ('echo "on 0" | cec-client -s -d 1', shell=True)
    print subprocess.call ('echo "as" | cec-client -s -d 1', shell=True)
    time.sleep(self.delay)

  def end(self):
    time.sleep(self.delay)
    print subprocess.call ('echo "standby 0" | cec-client -s -d 1', shell=True)

