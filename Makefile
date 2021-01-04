NPM := npm
VENDOR_DIR := assets/vendor/
SCSS_VENDOR_DIR := _sass/vendor/
JEKYLL := jekyll

install:
	$(NPM) install

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	mkdir -p $(SCSS_VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
	cp node_modules/popper.js/dist/umd/popper.min.js $(VENDOR_DIR)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(VENDOR_DIR)
	cp -R node_modules/bootstrap/scss $(SCSS_VENDOR_DIR)bootstrap
	cp -R node_modules/animatewithsass $(SCSS_VENDOR_DIR)animatewithsass


build: install
	$(JEKYLL) build

serve: install
	JEKYLL_ENV=production $(JEKYLL) serve --livereload