export function readme() {
    var text = 
`Thank you for using the Domnio Script Builder!

------------ INSTRUCTIONS TO RUN THE CODE ----------------

You can run your code in different ways, in this file there will be instrunction to run it on repl.it and on your local machine.


-------- RUN ON REPL.IT

This is the easiest way to run the code.

1. Sign up / Log In into the site 'repl.it'
2. Create a new repl using template 'NodeJS'
3. Upload all the files that you've extracted before (you can ignore the 'package.json' file because replit automatically installs all the packages.
4. Once done, click 'Run' and your script should start.


-------- RUN ON YOU LOCAL MACHINE

This can be difficult for beginners, we recomend using replit if you don't understand this.

1. Install NodeJS and NPM (search tutorials if you don't know how)
2. Once done, open the terminal at the path where you extracted you script files.
3. In the terminal (make sure that you are at the right path!!) run 'npm i'  to install all the packages needed
4. After that, run 'npm start' and your script should start!

---
Note 1: You can delete the '.replit' file
Note 2: If you wanna start your script multiple times, there is no need to always run 'npm i', that command is only needed once.
> If you encounter errors like "MODULE_NOT_FOUND", update your 'package.json' file and run 'npm i'.

----------------------------------- NEED MORE HELP? ------------------------------------

Need more help? 

Join our Discord Server: https://domnio.tk/discord
Or contact us via e-mail: 


-----------------------------------------------

© Domnio 2022
`

return text
}