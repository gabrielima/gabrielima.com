const functions = require('firebase-functions');
const next = require('next');
const express = require('express');

var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev, conf: { distDir: 'next' } });
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  return app.prepare()
    .then(() => {
      const server = express()

      server.get('/post/:slug', (req, res) => {
        const actualPage = '/post'
        const queryParams = { slug: req.params.slug }
        app.render(req, res, actualPage, queryParams)
      })

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
});