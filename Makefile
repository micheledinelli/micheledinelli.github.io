build:
	hugo --minify

clean: 
	rm -r public && rm -r resources

run: 
	hugo server --disableFastRender -D

IP := $(shell ifconfig | grep -Eo '192(\.[0-9]{1,3}){3}' | head -n1)

run-dev:
	hugo serve --bind=$(IP) --baseURL=http://$(IP)

pull: 
	git pull && git submodule update --remote --merge