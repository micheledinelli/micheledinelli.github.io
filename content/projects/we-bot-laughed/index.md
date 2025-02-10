---
title: "we-bot-laughed"
description: "Telegram bot that notifies you when the latest one piece chapter is published"
date: 2025-01-21
summary: Telegram bot that notifies you when the latest one piece chapter is published
showHero: true
heroStyle: background
tags: ["go"]
---

Since I've been a One Piece fan since forever, I'd like to be notified as soon as new chapters come out.
There are sure other websites and bots that do this, but I wanted to try it myself.

The bot is built using Go and a library that wraps Telegram bot APIs to keep it simple.
It supports only two command `/start` and `/stop`.
When it starts it stores the chat id on a database. It periodically scrapes data to find out wether
a new chapter is out and notifies all chat ids that it stored.
When it stops it deletes the chat id from the database.

To keep track of the upcoming chapter number the bot saves the result of the scrape when successfull.
For example chapter number `1136` comes out, the bot scrapes and obtains the chapter from internet, sends
notifications to the users and finally updates the chapter number in the database to `1137`. Then it starts scraping
every couple of hourse for chapter 1137.

When the bot starts it also shares the latest chapter scraped, so you don't miss a single one!

For this project I could only afford a free tier [MongoDB Atlas](https://www.mongodb.com/) but I honestly don't expect that much traffic going on.

Repository on [`GitHub`](https://github.com/micheledinelli/we-bot-laughed)

{{< github repo="micheledinelli/we-bot-laughed" >}}
