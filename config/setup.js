global.chai = require('chai');
chai.use(require('chai-http'));
global.expect = chai.expect;
global.addContext = require('mochawesome/addContext');
global.testDataList = require(`../data/testData.json`);
const {expect }= require("chai");
global.addContext = require("mochawesome/addContext");



