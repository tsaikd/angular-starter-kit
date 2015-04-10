# AngularJS Starter Kit

[![Dependency Status](https://david-dm.org/tsaikd/angular-starter-kit.png)](https://david-dm.org/tsaikd/angular-starter-kit)
[![devDependency Status](https://david-dm.org/tsaikd/angular-starter-kit/dev-status.png)](https://david-dm.org/tsaikd/angular-starter-kit#info=devDependencies)

Demo: http://tsaikd.github.io/angular-starter-kit

### Features

* Optimize HTML, Javascript, CSS, and AngularJS Template
* Develop in livereload
* Pure front-end web app
* Source web page can run without compile

### Directory Layout

```
.
├── /lib/                         # 3rd-party libraries and utilities for web page
├── /node_modules/                # 3rd-party libraries and utilities for development
├── /public/                      # The folder for compiled output
├── /src/                         # The source code of the application
│   ├── /config/                  # App config scripts
│   ├── /directive/               # AngularJS directives
│   ├── /route/                   # angular-ui-router templates
│   ├── /service/                 # AngularJS services
│   └── /angular-template.tmp.js  # AngularJS template compiled temporary output
├── .bowerrc                      # Configuration file for bower
├── .gitignore                    # Configuration file for git
├── bower.json                    # Configuration file for bower
├── gulpfile.js                   # Configuration file for automated builds
├── index.html                    # First compiled web page
├── index.src.html                # First web page source
└── package.json                  # The list of 3rd party libraries and utilities
```

### Getting Started

Just [fork](https://github.com/tsaikd/angular-starter-kit/fork) the repo and start hacking:

```shell
git clone -o upstream https://github.com/tsaikd/angular-starter-kit.git MyApp
cd MyApp
npm install -g gulp           # Install Gulp task runner globally
npm install -g bower          # Install Bower binary globally
npm run init                  # Run init task, it will execute: npm install && bower install && gulp build
```

### How to Build

```shell
gulp build
```

### How to Deploy

* Just remove files you do not want to keep, e.g.
	* src/
	* index.src.html

### How to Develop with livereload

```shell
gulp dev
```

* Open browser to http://localhost:9000/index.src.html if in development
* Open browser to http://localhost:9000/index.html if in deploy preview

### How to Add bower package (e.g. angular-material)

* Use bower command to install new packages

```shell
bower install angular-material --save
```

* Add packages in all pages (e.g. index.src.html)

```patch
  <!-- build:css public/index.min.css -->
+ <link rel="stylesheet" href="lib/angular-material/angular-material.css">
  <link rel="stylesheet" href="src/route/index.css">
  <!-- endbuild -->
```

```patch
  <!-- build:js public/index.min.js -->
  <script src="lib/angular/angular.js"></script>
  <script src="lib/angular-ui-router/release/angular-ui-router.js"></script>
+ <script src="lib/angular-material/angular-material.js"></script>

  ...

  <!-- endbuild -->
```

### How to Remove bower package (e.g. angular-ui-router)

* Remove associated code
	* bower.json
	* index.src.html
		* and check all other web pages
* Remove files
	* lib/angular-ui-router/
	* src/route/
	* src/config/route.js
* Rebuild with gulp

### How to Add new web page (e.g. page2.html)

* Create web page source file

```shell
touch page2.src.html
```

* Add web page to gulpfile.js

```patch
	// list all pages
	pages = [
+		"page2",
		"index"
	];
```

* Rebuild with gulp

### How to Update npm and bower packages

* **WARNING** git commit before updating

```shell
gulp up
```
