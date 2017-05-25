#!/usr/bin/node

var mime = require('mime');
var fs = require('fs');
var path = require('path');

var filename = process.argv[2];
var basename = path.basename(filename);
var mimeType = mime.lookup(filename);
var base64 = fs.readFileSync(filename).toString('base64');
var template = fs.readFileSync(path.join(__dirname, 'data-uri.template'), 'utf8');

var output =
  template
    .replace(/<FILENAME>/g, basename)
    .replace(/<MIME>/g, mimeType)
    .replace(/<BASE64>/g, base64);

var outputFilename =
  path.join(
    path.dirname(filename),
    path.basename(filename, path.extname(filename)) + '.scss'
  );

fs.writeFileSync(outputFilename, output)