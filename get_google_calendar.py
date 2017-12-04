#!/bin/python
# -*- coding: utf-8 -*-
import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage
from apcontent import alarmpi_content

import datetime

SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'alarmpi'

class google_calendar(alarmpi_content):
  def get_credentials(self):
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'alarmpi-calendar-service.json')
    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        print 'Run google_calendar.py to set up credentials'
    return credentials

  def build(self):
    """Shows basic usage of the Google Calendar API.

    Creates a Google Calendar API service object and outputs a list of the next
    10 events on the user's calendar.
    """
    credentials = self.get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('calendar', 'v3', http=http)
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
    eod = (datetime.datetime(
        year=datetime.datetime.utcnow().year,
        month=datetime.datetime.utcnow().month,
        day=datetime.datetime.utcnow().day
    ) + datetime.timedelta(hours=24, microseconds=-1)).isoformat() + 'Z'
    eventsResult = service.events().list(
        calendarId=self.sconfig['calendar_id'], timeMin=now, timeMax=eod, singleEvents=True, orderBy='startTime').execute()
    events = eventsResult.get('items', [])

    if not events:
        message = self.sconfig['empty_message']
    else:
        message = self.sconfig['start_message'].replace("NUMBER_EVENTS", str(len(events)))

    for event in events:
        message += unicode(event[self.sconfig['detail_event_field']]).encode("utf8") + '.  '

    if self.debug:
        print message

    self.content = message
