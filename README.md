# Electron Footprint app

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:krakenxiv/electron-footprint.git
# Go into the repository
cd word-trunctor
# Install dependencies
npm install
# Install the Packager
npm install -g electron-package
# Package the app
electron-packager --out ./out .
# Package the app and overwrite the existing version (be sure app is completely closed before running)
electron-packager --out ./out . --overwrite
```

Your app will be in an output folder called `out` in the project directory. Feel free to run it now!
