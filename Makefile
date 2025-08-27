build:
	hugo --minify

clean: 
	rm -r public && rm -r resources

run: 
	hugo server --disableFastRender -D

pull: 
	git pull && git submodule update --remote --merge

# push: pull
# 	git submodule update --remote --merge
# 	git add . && git commit -m "Update" && git push