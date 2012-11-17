#!/usr/bin/env node


var program = require('commander');

program
  .version('0.0.1')
  .option('-m, --maxissues [total]', 'Specify the max number of issues you want to analyse starting from the most recent. Maxium of 100. [total]', 'total');

var issues = require('./lib/issues');
program
 .command('issues <repo>')
 .description('Grabs useful information about the repos issues')
 .action(function(repo){
   issues.getInfo(repo, program.maxissues);
 });


program.parse(process.argv);



