
function helloWorld() {
  return "Hello world!";
}

// var DDPClient = require("ddp");
//
// var ddpclient = new DDPClient({
//   // All properties optional, defaults shown
//   host : "localhost",
//   port : 3000,
//   ssl  : false,
//   autoReconnect : true,
//   autoReconnectTimer : 500,
//   maintainCollections : true,
//   ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
//   // uses the SockJs protocol to create the connection
//   // this still uses websockets, but allows to get the benefits
//   // from projects like meteorhacks:cluster
//   // (for load balancing and service discovery)
//   // do not use `path` option when you are using useSockJs
//   useSockJs: true,
//   // Use a full url instead of a set of `host`, `port` and `ssl`
//   // do not set `useSockJs` option if `url` is used
//   url: 'wss://example.com/websocket'
// });

/*
 * Connect to the Meteor Server
 */


// setTimeout(
//     function(){
// ddpclient.connect(function(error, wasReconnect) {
//   // If autoReconnect is true, this callback will be invoked each time
//   // a server connection is re-established
//   if (error) {
//     console.log('DDP connection error!');
//     return;
//   }
//
//   if (wasReconnect) {
//     console.log('Reestablishment of a connection.');
//   }
//
// });
// }, 5000);




describe("UC testing", function() {

    // beforeAll(function(done){
    //
    //     ddpclient.connect(function(error, wasReconnect) {
    //       // If autoReconnect is true, this callback will be invoked each time
    //       // a server connection is re-established
    //       if (error) {
    //         console.log('DDP connection error!');
    //         done();
    //
    //       }
    //
    //       if (wasReconnect) {
    //         console.log('Reestablishment of a connection.');
    //       }
    //       console.log('connected!');
    //       done();
    //
    //     });
    // });



  it("says hello", function() {
      console.log("hello world");



            // ddpclient.call('log',
            //         ["info", "its from test node"],            // parameters to send to Meteor Method
            //       function (err, result) {   // callback which returns the method call results
            //         console.log('called function, result: ' + result);
            //         done();
            //       },
            //       function () {              // callback which fires when server has finished
            //         console.log('updated');  // sending any updated documents as a result of
            //         console.log(ddpclient.collections.vans);  // calling this method
            //         done();
            //       }
            // );


        





    expect(helloWorld()).toEqual("Hello world!");
  });
});
