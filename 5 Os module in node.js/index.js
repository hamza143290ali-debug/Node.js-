const os=require('os'); 

/*
We can use the os module to get information about the operating system and the
hardware of the system. The os module provides a number of methods that can be used to 
get information about the operating system and the hardware of teh system.
*/

//This method reutrns on which platform the node.js application is running on
console.log("Platform:", os.platform()); 

//This method returns the architecture of the processor
console.log("Architecture:", os.arch()); 

//This method returns the hostname of the oeperating system
console.log("Hostname:", os.hostname()); 

//This method returns the total ram of the system in bytes
console.log("Total Memory:", os.totalmem()); 

//this method returns the free ram of the system in bytes
console.log("Free Memory:", os.freemem()); 

//this method returns the uptime of the system in seconds
console.log("Uptime:", os.uptime()); 

//this method returns the network interface of the system
// console.log("Network Interfaces:", os.networkInterfaces()); 

//this method returns the user information of the system
console.log("User information:", os.userInfo()); 