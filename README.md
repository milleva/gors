## GORS

### About

A background-displayed [web app](https://gors.herokuapp.com/) for the interactive play GORS.

Written in React.js. Only frontend. No custom backend system.
The app uses -.wav song files as background music. These are served from Amazon S3 and fetched by the browser in 
real time with https. These are CORS-requests (no backend).

### App URL

https://gors.herokuapp.com/


### AWS S3

The S3 bucket name is `gors-songs`, resides in the url `https://s3.amazonaws.com/gors-songs/` and is managed
by Evan Miller's personal AWS account (milleva). The idea is to eventually migrate them somewhere else.

### To run locally

You need some new versions of Node and npm.

1. clone this repository and `cd` into it.
2. npm install
3. npm start
