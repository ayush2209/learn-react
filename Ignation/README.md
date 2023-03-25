---------------------------------------- Class Notes ----------------------------------------

## Setup git from local to remote.
- git init
- git add .
- git commit / git push

## npm
- `npm` is not node package manager.
- it helps as repo for all the dependency.

## Package.json
- It is configuration file for npm.

## package.lock.json
- Configuration file for npm / app.

## Bundler
- `parcel` , `webpack` and `vite`.
- Helps to bundle the `file/code` (`html,js,css....`) to push into production mode.

## parcel into app - `npm i -D parcel`
- Creates a dev build
- Creates a `server`(localhots).
- Parcel is `refreshing` the app when some chnage detetcs. (`HMR: Hot Module Replacement`.)
- Parcel used f`ile watching algorithm` written in `c++`.
- Parcel is also doing `cashing for appilcation`.
- Parcles does i`mage optimazation` also which is such a big operaition.
- `Minification` of our file.
- Its a bulder which `bundle` the code, `compress` the file, remove all the `white spcae` from our code.
- `Diffrential Bundling`: When app is hosted, it supports to supoort older browser.
- Good error handling,suggestions.
- `Tree Shaking` : Removed unused code from our code.

## References: for parcel:
- https://parceljs.org/

## What is `npx` ?
Answer: It helps us to execute any dependecy/bundle.

## Consistent hashing?


---------------------------------------- Assignment ----------------------------------------

## `Parcel` on production.
 - We'll get an error in the below command as main is not required in package.json.
### _Syntax_
```sh
npx parcel build index.html
```

## Tree Shaking?
A: It statically analyzes the imports and exports of each module, and removes everything that isn't used.
Tree shaking even works across dynamic `import()` boundaries, shared bundles, and even across languages! If you use CSS modules, unused classes will be removed automatically.


## What is hot module repalcement?
A: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## What is browserlist and it's uses?
A: To give power to the appication to support older browser.
    - It need to be added in package.json file.
    - Accepts an list of array.
    - Syntex is below,
### _Syntax_
```sh
"browserlist" : [
    "last 2 chorme versions",
    "last 10 firefox versions"
    ]
```
- If we provide `last 2 versions` it means this is supported to all the browser but only last two versions.

## ^caret and ~tilde
A: Remember `Shiv` from `EFI`, We discussed and did many times to block shuch automactically version updarge to avoid unwanted size increment/or such unknowely production failure.
- It does not change our package.json file but upgarde package,lock.json file while building the code.

----
Ayush Anand
