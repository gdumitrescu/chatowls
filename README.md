# ChatOwls application by [HackOwls](https://github.com/koding/global.hackathon/blob/master/Teams/HackOwls/ABOUT.md)

#### Koding Global Virtual Hackathon's Submission

### Description

[![Koding Hackathon](images/badge.png?raw=true "Koding Hackathon")](https://koding.com/Hackathon)

The idea was to create an app to allow users to write messages in their language of choice and have those messages sent to the recipient and translated in the recipient's language of choice.

For example, you would write a message in your language of choice (i.e your native language) and the message will be sent to your friend and translated for your friend, in his/her own langauge of choice (i.e her/his native language).

In summary, the application will allow people who do not speak the same language to still be able to communicate.
Additionally, using interactive data visualization we would indicate the source and the destination of a message. Interactive data visualization inspired by [Norse - IPViking Live](http://map.ipviking.com/)
With this premise, we believe the application would address theme #5 and #1.

### Screenshots

- Login Page
[![Koding Hackathon](images/HackOwls-ChatOwls-LoginPage.png?raw=true "Koding Hackathon")](https://koding.com/Hackathon)

- Chat Rooms
[![Koding Hackathon](images/HackOwls-ChatOwls-ChatRooms.png?raw=true "Koding Hackathon")](https://koding.com/Hackathon)


### APIs used

- Yandex Translate API
- Firebase Real-Time API


#### Development

[![Build Status](https://drone.io/github.com/HackOwls/chatowls/status.png)](https://drone.io/github.com/HackOwls/chatowls/latest) [![Coverage Status](https://img.shields.io/coveralls/HackOwls/chatowls.svg)](https://coveralls.io/r/HackOwls/chatowls)

[![Stories in Ready](https://badge.waffle.io/HackOwls/chatowls.png?label=ready&title=Ready)](https://waffle.io/HackOwls/chatowls) [![Stories in Progress](https://badge.waffle.io/HackOwls/chatowls.png?label=doing&title=Doing)](https://waffle.io/HackOwls/chatowls)

[![Throughput Graph](https://graphs.waffle.io/HackOwls/chatowls/throughput.svg)](https://waffle.io/HackOwls/chatowls/metrics)


#### Commit Messages Guidelines
- Header: e.g. There were the following issues with your Pull Request
- Subject length: 72 (the maximum length of the first line of the commit)
- Subject format: `%{type}(%{scope}): %{description}`
- The commit message `fix(user): ensure email is required` would match `type: fix`, `scope: user`, `description: ensure email is required`
- Valid types: valid` %{type}` values, e.g. chore, feat, refactor
- Body length: 72

#### Usage

- `$ npm install -g foundation-cli bower gulp karma-cli`
- `$ bundle install`
- `$ npm install`
- `$ bower install`
- `$ npm start`
