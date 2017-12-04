#!/usr/bin/env python
import subprocess
import feedparser
import alsaaudio

from apcontent import alarmpi_content

class npr(alarmpi_content):
  def begin(self, ramdrive='/mnt/ram/'):
    m = alsaaudio.Mixer("PCM") # alsaaudio.mixers = ["PCM"] for me.
    print alsaaudio.mixers
    print m.getvolume()
    m.setvolume(100) # Or whatever
    print m.getvolume()
    play = self.sconfig['player'] + ' wakeup.mp3'
    print subprocess.call (play, shell=True)
    return True

  def end(self, ramdrive='/mnt/ram/'):
    play = self.sconfig['player'] + ' wakeup.mp3'
    print subprocess.call (play, shell=True)
    return True
