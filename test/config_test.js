/*!
 * node-hbase-client - test/config_test.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var config = {
  zookeeper: {
    quorum: "10.64.12.228"
  },  // logger: console,
  logger: {
    warn: function () {},
    info: function () {},
    error: function () {},
  },
  rpcTimeout: 40000,
};

module.exports = config;
