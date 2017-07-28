# Electron Footprint app

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository into local dir
git clone git@github.com:krakenxiv/electron-footprint.git
# OPTIONAL- FOR Creating a new project- Create a new empty repo in github and then:
git remote set-url origin git@github.com:GIT_USERNAME/GIT_NEW_REPONAME.git
# Go into the repository
cd electron-footprint
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
