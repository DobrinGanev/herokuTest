var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Hapi = require('hapi')
var yar = require('yar')

var Grant = require('grant-hapi')
var grant = new Grant()
var server = new Hapi.Server()
server.connection({
  port: process.env.PORT
})

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file('./views/index.html');
    }
  });
  server.route({
    method: 'GET',
    path: '/login',
    handler: function(request, reply) {
      reply.file('./views/login.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/assign',
    handler: function(request, reply) {
      reply('assign');
    }
  });
  server.route({
    method: 'GET',
    path: '/unassign',
    handler: function(request, reply) {
      reply('unassign');
    }
  });
  server.route({
    method: 'GET',
    path: '/create',
    handler: function(request, reply) {
      reply('create');
    }
  });
  server.route({
    method: 'GET',
    path: '/change',
    handler: function(request, reply) {
      reply('change');
    }
  });
  server.route({
    method: 'GET',
    path: '/upgrade',
    handler: function(request, reply) {
      reply('upgrade');
    }
  });
  server.route({
    method: 'GET',
    path: '/cancel',
    handler: function(request, reply) {
      reply('cancel');
    }
  });
  server.route({
    method: 'GET',
    path: '/status',
    handler: function(request, reply) {
      reply('status');
    }
  });
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
