# bypass-cocon-with-frida

# pwn cocon.apk with frida framework 
A CTF Android apk called cocon.apk, and we need to decrypt the hash value (ctf flag).
we are going to install the apk file. If successful, android desktop will show a icon called com.co.con
then we Open the app, the main windows as follow, it says “Hello World, cocon!” and “KEY: Key is disable”:
If you want to know the app code structure, please use jadx to reverse the code.
View the code, 
we should modify int key_val = 0; to int key_val = 1;
