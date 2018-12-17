# MyBib-koa

[MyBib](https://www.mybib.com) is a fast, free, and easy-to-use bibliography generator for the web (desktop, laptop, and mobile).

**MyBib-koa** is the web backend component of MyBib, built with Koa 2 and sqlite3 on nodejs.

## Build Setup

Copy the built dist folders from [MyBib-ui](https://github.com/mybibhq/mybib-ui) and [MyBib-ui-mobile](https://github.com/mybibhq/mybib-ui-mobile) into src/static/apps.

Clone the [CSL repo](https://github.com/citation-style-language/styles), and update the path to it in the root index.ts file. 

Clone and run Zotero's [citeproc-js server](https://github.com/zotero/citeproc-js-server).

``` bash
# install dependencies
npm install

# serve 
npm run dev

Open your browser to http://localhost:3000

```
## Other relevant components
MyBib-koa is just one of a few components that make MyBib work. Here are the others:
 - [MyBib-ui](https://github.com/mybibhq/mybib-ui)
 - [MyBib-ui-mobile](https://github.com/mybibhq/mybib-ui-mobile)
 - [MyBib-browser](https://github.com/mybibhq/mybib-browser)