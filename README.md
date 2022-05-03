Based on GatsbyJS V2 starter.

Designed to game Lighthouse's website scores.

# Installation

clone repo
use node ~v10 (nvm recommended for this)

yarn install

# To develop
yarn dev

# To build
yarn build

Currently the site it hosted on netlify, synced to listen and build when master of this repo is updated.

# Notes:
On build, it gets the last 5, >=4 star reviews from google reviews as json and adds them to page

# Gotchas:
* image library has some issues with different node versions
* a few dependences are out of date and a pain to update
* has one key which will probably be removed
* netlify needs a few environment variables to work:

GO_VERSION=1.15
SHARP_IGNORE_GLOBAL_LIBVIPS=true
