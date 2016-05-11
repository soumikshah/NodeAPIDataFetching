var fs = require('http');
var filesys = require('fs');
var yargs = require('yargs');
var a ='';
var b = '';
var c = '';
var d = '';
//console.log(yargs.argv.trivia);
module.exports.run = function(flags) {
  var fileApp = new Math(flags);
  fileApp.init();
};

function Math(flags) {
  this.flags = flags;
}

Math.prototype.init = function() {
  if (this.flags.math) {
    this.math();
  }
  if (this.flags.trivia) {
    this.trivia();
  }
  if (this.flags.date){
    this.date();
  }
  if (this.flags.save){
    this.save();
  }
};

Math.prototype.save = function(){

//console.log(process.argv[2]);
if(yargs.argv.math){
  filesys.exists('data.json',function(exists){
  fs.get('http://numbersapi.com/'+yargs.argv.math+'/math?json', function(res) {
    var body = '';
    res.on('data', function(data) {
      body += data;
      //console.log('BODY' + data);
    });

    res.on('end', function() {
  //body = JSON.stringify(body,null,2);
//  body +=sys;
   //var dataString = sys.join(",");

    //  filesys.writeFileSync('data.json', body , 'utf-8');
      //filesys.writeFile("fss.json",sys,'utf8',2);
      if(exists){
        filesys.appendFile('data.json',','+body,function(err){
          if(err) throw err;
          console.log("Data to be appended to a file has been appended");
        })
      }else if(!exists){
        filesys.writeFileSync('data.json',body, 'utf-8',3);
      }
      console.log(body);
    });

  }).on('error', function(err) {
    console.log('Error: ' + err);
  });

  });
}
if(yargs.argv.trivia){
  filesys.exists('data.json',function(exists){
  fs.get('http://numbersapi.com/'+yargs.argv.trivia+'/trivia?json', function(res) {
    var body = '';
    res.on('data', function(data) {
      body += data;
      //console.log('BODY' + data);
    });

    res.on('end', function() {
  var sys = JSON.stringify(body);
   //var dataString = sys.join(",");

    //  filesys.writeFileSync('data.json', body , 'utf-8');
      //filesys.writeFile("fss.json",sys,'utf8',2);
      if(exists){
        filesys.appendFile('data.json',','+body,function(err){
          if(err) throw err;
          console.log("Data to be appended to a file has been appended");
        })
      }else if(!exists){
        filesys.writeFileSync('data.json',body, 'utf-8',3);
      }
      console.log(body);
    });

  }).on('error', function(err) {
    console.log('Error: ' + err);
  });

  });
}
if(yargs.argv.date){
  filesys.exists('data.json',function(exists){
  fs.get('http://numbersapi.com/'+yargs.argv.date+'?json', function(res) {
    var body = '';
    res.on('data', function(data) {
      body += data;
      //console.log('BODY' + data);
    });

    res.on('end', function() {
  var sys = JSON.stringify(body);
   //var dataString = sys.join(",");

    //  filesys.writeFileSync('data.json', body , 'utf-8');
      //filesys.writeFile("fss.json",sys,'utf8',2);
      if(exists){
        filesys.appendFile('data.json',','+body,function(err){
          if(err) throw err;
          console.log("Data to be appended to a file has been appended");
        })
      }else if(!exists){
        filesys.writeFileSync('data.json',body, 'utf-8',3);

      }
  //    console.log(body);
    });

  }).on('error', function(err) {
//    console.log('Error: ' + err);
  });

  });

}
//  fs.get('http://numbersapi.com/'+yargs.argv.math+'/math?json', function(res) {
    //console.log('Response ' + res.statusCode);

      }

Math.prototype.date = function (){
  for(var i = 0; i <  yargs.argv.date.length ; i ++){
  if(yargs.argv.date[i] == '/' ){
    //console.log(yargs.argv);
    fs.get('http://numbersapi.com/'+yargs.argv.date+'/date', function(res) {
      //console.log('Response ' + res.statusCode);

      var body = '';
      res.on('data', function(data) {
        body += data;
        //console.log('BODY' + data);
      });

      res.on('end', function() {
        c = body;
        console.log('date: '+body);
      });

    }).on('error', function(err) {
      console.log('Error: ' + err);
    });
  }
}
fs.get('http://numbersapi.com/'+yargs.argv.date+'/year', function(res) {
  //console.log('Response ' + res.statusCode);

  var body = '';
  res.on('data', function(data) {
    body += data;
    //console.log('BODY' + data);
  });

  res.on('end', function() {
    module.exports.d = body;
    console.log('year: '+body);
  });
}).on('error', function(err) {
  console.log('Error: ' + err);
  });
};

Math.prototype.math = function () {

  fs.get('http://numbersapi.com/'+yargs.argv.math + '/math', function(res) {
    //console.log('Response ' + res.statusCode);

    var body = '';
    res.on('data', function(data) {
      body += data;
      //console.log('BODY' + data);
    });

    res.on('end', function() {
      a = body;
      console.log('math: '+body);
    });

  }).on('error', function(err) {
    console.log('Error: ' + err);
  });

};


Math.prototype.trivia = function () {
  fs.get('http://numbersapi.com/'+yargs.argv.trivia, function(res) {
    //console.log('Response ' + res.statusCode);

    var body = '';
    res.on('data', function(data) {
      body += data;
      //console.log('BODY' + data);
    });

    res.on('end', function() {
      b = body;
      console.log('trivia: '+body);
    });

  }).on('error', function(err) {
    console.log('Error: ' + err);
  });

};
