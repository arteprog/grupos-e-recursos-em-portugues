# toolbox 

Some tested-and-true tools for creative code (mostly p5js). [view wishlist](https://www.notion.so/Toolbox-wishlist-0c1faba79f9a42238cf56c79022bc3d8)

## replaceString.js

replaces one string with another ([example](https://www.nonlinear.nyc/replace/))

1. define scope to watch. default is class `.replaceString`
1. import `replaceString.js` on your code
1. call it: `replaceString('initialString', 'finalString', 'target');` where:
	1. `initialString` is the string you want to replace
	1. `finalString` is the string you want to change it to
	1. `target` is optional, in case you want to watch a different element (default: `.replaceString`)

## Grid.js

canvas grid
column only, regular grid only 

## Install as a submodule

Go to the folder on your project you want to add toolbox folder (for instance, `_includes/` if you use jekyll), then run `git submodule add https://github.com/nonlinear/toolbox.git toolbox`

## Troubleshoot: jekyll submodule + githubpages

Github generates jekyll server-side, and submodule breaks because it renames folder with commit. Jekyll is meant to be client-side, so there's a way to prevent github from rebuilding it server-side:

1. force jekyll to generate flat blog on `docs/` folder, instead of default `_site/` by adding `destination: docs` on `config.yml`
1. push changes
1. on github settings, tell githubpages to point to `docs/` folder instead