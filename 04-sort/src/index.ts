console.log('Hey yo! How\'s going?');
//* separate ts file in to src solder, js file into build folder to organize the file structure
//* for TS file
//* $ tsc --> to compile if the tsconfig.json created and have rootDir && outDir director setup
//* $ tsc -w --> to auto-compile if tsconfig.json exist

//* for Node package.json file
//* $ npm init -y --> to generate the package.json file
//* install nodemon --> to rerun node everytime the file changed
//* install concurrently --> to run multiple scripts at the same time just using one single command EX:   "start": "concurrently npm:start:*"
//* $ npm start --> to run "start:build" and "start:run" same time