#!/bin/bash

if command -v eslint &> /dev/null
then
  eslint --fix --ext .tsx,.ts,.jsx,.js .
fi

if command -v stylelint &> /dev/null
then
  stylelint --allow-empty-input --fix './**/*.scss'
fi