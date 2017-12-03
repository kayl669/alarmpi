#!/usr/bin/env python
# -*- coding: utf-8 -*-
import boto3
import io
import pygame

from aptts import alarmpi_tts


class trypolly(alarmpi_tts):
  def play(self, content, ramdrive='/mnt/ram/'):

    content = content.replace(u"\\".encode("utf8"), "")
    content = content.replace(u"'".encode("utf8"), "%27")

    if self.debug:
      print content.replace('.  ', "\n")

    count = 0
    text = ""
    for chunk in content.split('.  '):
      count += len(chunk) + 3
      if (count > 1500) :
        if(self.readMessage(text)!=True) :
            return False
        text = chunk
        count = len(chunk) + 3
      else:
        text += chunk + '.  '

    return self.readMessage(text)

  def readMessage(self, content):
    rval = True
    content = "<speak>" + content + "</speak>"
    try:
      polly = boto3.client('polly', region_name='eu-west-3')  # access amazon web service
      pollyResponse = polly.synthesize_speech(Text=content, OutputFormat='mp3', TextType="ssml", SampleRate='22050', VoiceId='Mathieu')

      pygame.mixer.init()
      pygame.init()  # this is needed for pygame.event.* and needs to be called after mixer.init() otherwise no sound is played

      with io.BytesIO() as f:  # use a memory stream
        f.write(pollyResponse['AudioStream'].read())  # read audiostream from polly
        f.seek(0)
        pygame.mixer.music.load(f)
        pygame.mixer.music.set_endevent(pygame.USEREVENT)
        pygame.event.set_allowed(pygame.USEREVENT)
        pygame.mixer.music.play()
        pygame.event.wait()  # play() is asynchronous. This wait forces the speaking to be finished before closing

        # while pygame.mixer.music.get_busy() == True:
        #     pass

    except Exception as e:
      print e
      rval = False
    return rval
