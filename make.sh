#!/bin/bash

echo "Generating docs..."

# Bundle docs into zero-dependency HTML file
npx redoc-cli bundle ./swagger/sample.yaml && \
mkdir dist && \
mv redoc-static.html ./dist/index.html && \
echo "Changed name from redoc-static.html to index.html" && \
echo -e "\nDone!"
