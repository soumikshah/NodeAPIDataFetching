var app = require('./app');
var yargs = require( 'yargs');
var fs = require('http');


var flags = yargs.usage('$0: Usage node cli.js')
  .options( 'help',{
    alias: 'help option',
    describe: 'Display help'
  })
  .options( 'math',{
    alias: 'Math Operations',
    type: 'math',
    describe: 'Display Math facts'
  })
  .options( 'trivia',{
    alias: 'Trivia operations',
    type: 'trivia',
    describe: 'Display Math trivia about particular number.'
  })
  .options('date',{
    alias: 'Date fact',
    type: 'date',
    describe: 'Display the date of the fact or the year of the fact. '
  })
  .options('save',{
    alias: ' Save file',
    describe: 'Save the file.'
  })
  .argv;



if(flags.help){
  yargs.showHelp();
}
else {
  app.run(flags);
}
