build:
	hugo --minify

clean: 
	rm -r public && rm -r resources

run: 
	hugo server --disableFastRender -D

pull: 
	git pull && git submodule update --remote --merge