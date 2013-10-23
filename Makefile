all:  public/polymer public/build.js

public/polymer:
	-ln -s bower_components/polymer public/polymer

public/build.js: client.js
	browserify -t brfs ./client.js > public/build.js
