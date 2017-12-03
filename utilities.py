#!/usr/bin/env python
#-*- coding: utf-8 -*-
# Script for universal utilities
# Strips symbols before sending to TTS Agent
def stripSymbols(s):
    s = s.replace("&",' et ').strip()
    s = s.replace("%",' pourcent ').strip()
    s = s.replace("-",' ').strip()
    s = s.replace("*",' etoile ').strip()
    s = s.replace("#",' diese ').strip()
    s = s.replace("@",' arobase ').strip()
    s = s.replace("'",'').strip()
    return s
