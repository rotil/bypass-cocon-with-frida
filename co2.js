
 Java.perform(function(){
     console.log("\nco detection bypass with Frida");

var attack = Java.use("coc.on.cocon");
attack.onCreate.overload("android.os.Bundle").implementation = function(key_val) {
	console.log(" key_val befor onCreate load: "+this.key_val.value);
	  this.key_val.value=1;
	  this.onCreate.overload("android.os.Bundle").call(this,key_val);
	  console.log("key_val after onCreate load: "+this.key_val.value);
	  console.log("Found instance: "+this.key_val.value);
	};

});
//frida -U -f coc.on -l co3.js --no-paus
