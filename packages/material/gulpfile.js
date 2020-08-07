"use strict";

const gulp = require("gulp");
const taskHelper = require("../theme-tasks/gulpfile").taskHelper;

taskHelper.exportTasksToGulpInstance(gulp);
