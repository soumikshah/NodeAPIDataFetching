var http= require('http');
//var app = require(./app);
var yargs = require( ' yargs ');

var flags = yargs.usage('$0: Usage node homework3.js')
  .options( 'h',{
    alias: 'help',
    describe: 'Display help'
  })
  .argv;

if(flags.help){
  yargs.showHelp();
}else{
  app.run(flags);
}
http.get('http://numbersapi.com/42',function (res){
  console.log('response' + res.statusCode);
  var body = '';
  res.on('data',function(data){
    body += data;
    //It prints data with body.
    //console.log('Body : '+data);

  });
  res.on('end',function(){
    console.log(body);
  });
}).on('error',function(err){
  console.log('Error: '+err);
});
