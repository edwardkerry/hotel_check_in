Hotelligence
===================

[![Stories in Ready](https://badge.waffle.io/Wynndow/hotel_check_in.png?label=ready&title=Ready)](https://waffle.io/Wynndow/hotel_check_in)
[![Build Status](https://travis-ci.org/Wynndow/hotel_check_in.svg?branch=master)](https://travis-ci.org/Wynndow/hotel_check_in)

```
Checking into a hotel is a slow, archaic and tedious process.
```

Overview
-------
- This is our solution to Makers Academy Final Project, built in two weeks.
- Team Hotelligence are:  [Chris Wynne](https://github.com/wynndow), [Ed Kerry](https://github.com/edwardkerry),[Gimi Qehaja](https://github.com/gimi-q) and [Richard Moss](https://github.com/ric9176).
- Hotelligence has two parts: a web app and an iOS/Android phone app.
- The web app was built using Angular.js, jQuery and Bootstrap for the front end, and Firebase for the backend and database.
- The mobile app uses Cordova and Ionic to make use of our existing code-base on Smartphones.
- Both apps have real-time interaction with bluetooth beacons.

Installation instructions
-----
- Clone the repository to your local machine and change into the directory
```
$ git clone https://github.com/edwardkerry/hotel_check_in
$ cd hotel_check_in
```
- Run Node Package Manager to install required packages `$ npm install`

- Launch the server `$ npm start`

- Visit `localhost://8080/app/index.html`

Using the app
-----
- The app has two user types, guests and hotel
- Hotel users may log-in and view a dashboard of real-time guest information from the database
- Guests may register and take a photo of themselves with their identification documents, using their webcam. This will save time during check-in.
- To further speed-up check-in, guests may download the mobile app.
- Upon entering 70 metres of the hotel, the guest will receive a welcome push-notification including room details.
- As guests make contact with the beacon, the hotel dashboard is updated to inform staff they have arrived and present their photo credentials so staff may welcome them by name.
- Hotelligence aims to make hotel check-in a quicker, easier and more personal experience.

Guest User Stories
-----
```
As a hotel booker
So I can check in
I want to receive instructions on automating check-in

As a hotel booker
So I can save time at check-in
I want to deal with my paperwork before arrival

As a hotel guest
So I can be given my room key
I want the hotel to know I have arrived

As a hotel guest
So I can arrive at a convenient time
I want to know when my room is ready for me

As a hotel guest
So I know what to do next
I would like to receive a personal message on arrival
```

Hotel User Stories
-----
```
As a hotelier
So I can use the service
I want to sign up for it

As a hotelier
So I can auto check-in guests
I want to receive their documents before arrival

As a hotelier
So my guests receive a personal service
I want my staff to see their details when they arrive

As a hotelier
So my guests receive a personal service
I want to give them their room as soon as possible

As a hotelier
So I can review hotel activity
I want to view reports of guest bookings, check-ins

As a hotelier
So I can tell guests about my services
I want to push information to their devices
```
