#!/bin/bash

if command -v eslint &> /dev/null
then
  eslint --fix .
fi

if command -v stylelint &> /dev/null
then
  stylelint --allow-empty-input --fix '**/src/**/*.{css,scss}' --ignore-pattern '**/node_modules/**' --ignore-pattern '**/build/**' --ignore-pattern '**/dist/**'
fi