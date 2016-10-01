[![Website](https://img.shields.io/website-up-down-green-red/https/imgsrc-al.herokuapp.com%2F.svg?maxAge=2592000)](https://imgsrc-al.herokuapp.com/)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/DavOnGit/myown)
[![License](https://img.shields.io/cocoapods/l/AFNetworking.svg)](http://doge.mit-license.org)

# Image Search Abstraction Layer

This simple App use Bing Api to query image search and returns results as JSON.
It also remembers the last 10 query history.

- I can pass a string as a parameter and I will receive the JSON query response. Every search page contain 10 images metadata.
- I can view last 10 query history.

### Example usage:

Point your browser to the following addresses to seach "fuffy cat" images at page 3 (0 index based):

[https://imgsrc-al.herokuapp.com/api/imagesearch/fuffy%20catoffset=3](https://imgsrc-al.herokuapp.com/api/imagesearch/fuffy cat?offset=3)

Point your browser to the following addresses to get last 10 query history:

[https://imgsrc-al.herokuapp.com/api/latest/imagesearch](https://imgsrc-al.herokuapp.com/api/latest/imagesearch)

---

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/DavOnGit/isal.git # or clone your own fork
$ cd timestamp-microservice
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

or

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
$ heroku create
$ git push heroku master
$ heroku open
```