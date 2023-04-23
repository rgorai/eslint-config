#!/bin/bash

eslint --fix --ext .tsx,.ts,.jsx,.js .
stylelint --allow-empty-input --fix './**/*.scss'
