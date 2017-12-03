IF NOT EXIST js\build mkdir js\build
cmd /c npm install
cmd /c npm install -g browserify
copy node_modules\jquery\dist\jquery.min.js js\build\jquery.min.js
copy node_modules\moment\min\moment.min.js js\build\moment.min.js
copy node_modules\moment\locale\fr.js js\build\fr.js
cmd /c "browserify js\newsapi.js > js\build\newsapi_browserify.js"
rmdir /q /s node_modules
pause
