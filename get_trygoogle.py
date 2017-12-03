#!/usr/bin/env python
# -*- coding: utf-8 -*-
import subprocess
import textwrap
import urllib

from aptts import alarmpi_tts

class trygoogle(alarmpi_tts):
  def play(self, content, ramdrive='/mnt/ram/'):
    rval = True
    # Google voice only accepts 100 characters or less, so split into chunks
    shorts = []

    gturl = 'http://' + \
            self.sconfig['host'] + \
            self.sconfig['path'] + \
            '&tl=' + \
            self.sconfig['lang']

    gtclient = '&client=' + self.sconfig['client']

    head = self.sconfig['head']
    tail = self.sconfig['tail']

    print content
    print "---------------------"
    try :
        content = content.replace(u"%".encode("utf8"), "%25")
        # content = content.replace(u" ".encode("utf8"), "%20")
        # content = content.replace(u"!".encode("utf8"), "%21")
        content = content.replace(u"\"".encode("utf8"), "%22")
        # content = content.replace(u"#".encode("utf8"), "%23")
        # content = content.replace(u"$".encode("utf8"), "%24")
        # content = content.replace(u"&".encode("utf8"), "%26")
        content = content.replace(u"'".encode("utf8"), "%27")
        # content = content.replace(u"(".encode("utf8"), "%28")
        # content = content.replace(u")".encode("utf8"), "%29")
        content = content.replace(u"*".encode("utf8"), "%2A")
        # content = content.replace(u"+".encode("utf8"), "%2B")
        # content = content.replace(u",".encode("utf8"), "%2C")
        # content = content.replace(u"-".encode("utf8"), "%2D")
        content = content.replace(u".".encode("utf8"), "%2E")
        content = content.replace(u"/".encode("utf8"), "%2F")
        # content = content.replace(u":".encode("utf8"), "%3A")
        # content = content.replace(u";".encode("utf8"), "%3B")
        content = content.replace(u"<".encode("utf8"), "%3C")
        content = content.replace(u"=".encode("utf8"), "%3D")
        content = content.replace(u">".encode("utf8"), "%3E")
        content = content.replace(u"?".encode("utf8"), "%3F")
        content = content.replace(u"@".encode("utf8"), "%40")
        content = content.replace(u"[".encode("utf8"), "%5B")
        content = content.replace(u"\\".encode("utf8"), "")
        content = content.replace(u"]".encode("utf8"), "%5D")
        content = content.replace(u"^".encode("utf8"), "%5E")
        # content = content.replace(u"_".encode("utf8"), "%5F")
        # content = content.replace(u"`".encode("utf8"), "%60")
        # content = content.replace(u"{".encode("utf8"), "%7B")
        # content = content.replace(u"|".encode("utf8"), "%7C")
        # content = content.replace(u"}".encode("utf8"), "%7D")
        content = content.replace(u"~".encode("utf8"), "%7E")
        content = content.replace(u"¢".encode("utf8"), "%A2")
        content = content.replace(u"£".encode("utf8"), "%A3")
        content = content.replace(u"¥".encode("utf8"), "%A5")
        content = content.replace(u"|".encode("utf8"), "%A6")
        content = content.replace(u"§".encode("utf8"), "%A7")
        content = content.replace(u"«".encode("utf8"), "%AB")
        content = content.replace(u"¬".encode("utf8"), "%AC")
        content = content.replace(u"¯".encode("utf8"), "%AD")
        content = content.replace(u"º".encode("utf8"), "%B0")
        content = content.replace(u"±".encode("utf8"), "%B1")
        content = content.replace(u"ª".encode("utf8"), "%B2")
        # content = content.replace(u",".encode("utf8"), "%B4")
        content = content.replace(u"µ".encode("utf8"), "%B5")
        content = content.replace(u"»".encode("utf8"), "%BB")
        content = content.replace(u"¼".encode("utf8"), "%BC")
        content = content.replace(u"½".encode("utf8"), "%BD")
        content = content.replace(u"¿".encode("utf8"), "%BF")
        content = content.replace(u"À".encode("utf8"), "%C0")
        content = content.replace(u"Á".encode("utf8"), "%C1")
        content = content.replace(u"Â".encode("utf8"), "%C2")
        content = content.replace(u"Ã".encode("utf8"), "%C3")
        content = content.replace(u"Ä".encode("utf8"), "%C4")
        content = content.replace(u"Å".encode("utf8"), "%C5")
        content = content.replace(u"Æ".encode("utf8"), "%C6")
        content = content.replace(u"Ç".encode("utf8"), "%C7")
        content = content.replace(u"È".encode("utf8"), "%C8")
        content = content.replace(u"É".encode("utf8"), "%C9")
        content = content.replace(u"Ê".encode("utf8"), "%CA")
        content = content.replace(u"Ë".encode("utf8"), "%CB")
        content = content.replace(u"Ì".encode("utf8"), "%CC")
        content = content.replace(u"Í".encode("utf8"), "%CD")
        content = content.replace(u"Î".encode("utf8"), "%CE")
        content = content.replace(u"Ï".encode("utf8"), "%CF")
        content = content.replace(u"Ð".encode("utf8"), "%D0")
        content = content.replace(u"Ñ".encode("utf8"), "%D1")
        content = content.replace(u"Ò".encode("utf8"), "%D2")
        content = content.replace(u"Ó".encode("utf8"), "%D3")
        content = content.replace(u"Ô".encode("utf8"), "%D4")
        content = content.replace(u"Õ".encode("utf8"), "%D5")
        content = content.replace(u"Ö".encode("utf8"), "%D6")
        content = content.replace(u"Ø".encode("utf8"), "%D8")
        content = content.replace(u"Ù".encode("utf8"), "%D9")
        content = content.replace(u"Ú".encode("utf8"), "%DA")
        content = content.replace(u"Û".encode("utf8"), "%DB")
        content = content.replace(u"Ü".encode("utf8"), "%DC")
        content = content.replace(u"Ý".encode("utf8"), "%DD")
        content = content.replace(u"Þ".encode("utf8"), "%DE")
        content = content.replace(u"ß".encode("utf8"), "%DF")
        content = content.replace(u"à".encode("utf8"), "%E0")
        content = content.replace(u"á".encode("utf8"), "%E1")
        content = content.replace(u"â".encode("utf8"), "%E2")
        content = content.replace(u"ã".encode("utf8"), "%E3")
        content = content.replace(u"ä".encode("utf8"), "%E4")
        content = content.replace(u"å".encode("utf8"), "%E5")
        content = content.replace(u"æ".encode("utf8"), "%E6")
        content = content.replace(u"ç".encode("utf8"), "%E7")
        content = content.replace(u"è".encode("utf8"), "%E8")
        content = content.replace(u"é".encode("utf8"), "%E9")
        content = content.replace(u"ê".encode("utf8"), "%EA")
        content = content.replace(u"ë".encode("utf8"), "%EB")
        content = content.replace(u"ì".encode("utf8"), "%EC")
        content = content.replace(u"í".encode("utf8"), "%ED")
        content = content.replace(u"î".encode("utf8"), "%EE")
        content = content.replace(u"ï".encode("utf8"), "%EF")
        content = content.replace(u"ð".encode("utf8"), "%F0")
        content = content.replace(u"ñ".encode("utf8"), "%F1")
        content = content.replace(u"ò".encode("utf8"), "%F2")
        content = content.replace(u"ó".encode("utf8"), "%F3")
        content = content.replace(u"ô".encode("utf8"), "%F4")
        content = content.replace(u"õ".encode("utf8"), "%F5")
        content = content.replace(u"ö".encode("utf8"), "%F6")
        content = content.replace(u"÷".encode("utf8"), "%F7")
        content = content.replace(u"°".encode("utf8"), "%F8")
        content = content.replace(u"ù".encode("utf8"), "%F9")
        content = content.replace(u"ú".encode("utf8"), "%FA")
        content = content.replace(u"û".encode("utf8"), "%FB")
        content = content.replace(u"ü".encode("utf8"), "%FC")
        content = content.replace(u"ý".encode("utf8"), "%FD")
        content = content.replace(u"þ".encode("utf8"), "%FE")
        content = content.replace(u"ÿ".encode("utf8"), "%FF")
        # content = content.replace("'", "")
        # content = content.replace(u"ç".encode("utf8"), "c")
        # content = content.replace(u"é".encode("utf8"), "e")
        # content = content.replace(u"ê".encode("utf8"), "e")
        # content = content.replace(u"è".encode("utf8"), "e")
        # content = content.replace(u"ë".encode("utf8"), "e")
        # content = content.replace(u"o".encode("utf8"), "o")
        # content = content.replace(u"ô".encode("utf8"), "o")
        # content = content.replace(u"ö".encode("utf8"), "o")
        # content = content.replace(u"œ".encode("utf8"), "oe")
        # content = content.replace(u"À".encode("utf8"), "a")
        # content = content.replace(u"à".encode("utf8"), "a")
        # content = content.replace(u"â".encode("utf8"), "a")
        # content = content.replace(u"ä".encode("utf8"), "a")
        # content = content.replace(u'’'.encode("utf8"), "")
        # content = content.replace('\\', "")
        # content = content.replace(u"«".encode("utf8"), "")
        # content = content.replace(u"»".encode("utf8"), "")
        # content = content.replace(u"…".encode("utf8"), "...  ")
        # content = content.replace(u"\ ".encode("utf8"), "")
    except Exception as e:
        print e
    print content
    print "---------------------"

    for chunk in content.split('.  '):
      shorts.extend(textwrap.wrap(chunk, 100))

    count = 0
    play = 'Unassigned'
    # Send shorts to Google and return mp3s
    try:
      wrap = "mp3wrap " + ramdrive + "output.mp3"
      for sentence in shorts:
        print "sentence=\""+sentence+"\""

        dest = ramdrive + str(count).zfill(2) + str(tail)
        wrap += " " + dest
        sendthis = sentence.join([' "' +
                                  gturl +
                                  '&q=',
                                  gtclient +
                                  '" -O ' +
                                  dest])

        st = head + sendthis
        print st
        subprocess.call (st, shell=True)
        count = count + 1

      subprocess.call (wrap, shell=True)
      # Play the mp3s returned
      play = self.sconfig['player'] + ' ' + ramdrive + "output_MP3WRAP.mp3"
      if self.debug:
        print 'Calling "' + play + '"'
      subprocess.call (play, shell=True)
    except:
      rval = False

    # Cleanup any mp3 files created in this directory.
    rmcmd = 'rm -f ' + ramdrive + '*' + tail
    if self.debug:
      print 'cleaning up now'
      print rmcmd
    subprocess.call (rmcmd, shell=True)
    return rval
