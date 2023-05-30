#!/usr/bin/env bash

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@github.com:Allengl/gulu-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://allengl.github.io/gulu-ui-website/index.html
