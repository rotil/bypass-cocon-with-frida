Java.perform(function(){
    console.log("\nco detection bypass with Frida");
    var Attack = Java.use("coc.on.cocon");
    console.log("\nHijacking coc.on.cocon function in Attack class");


    Attack.show_key.implementation = function(key_val){
        console.log("\nInside the show_key function");
		var my_new_key = this.show_key();
		console.log("Found key_val before: "+this.key_val.value);
		this.key_val.value=1;
		console.log("Found key_val affter : "+this.key_val.value);
		console.log("the key  is : ("+ my_new_key + ")");
		key_val = "whatever i want to show in KEY";
        return key_val;
    };

});


//frida -Uf coc.on -l co.js --no-pause