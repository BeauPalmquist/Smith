/// <binding AfterBuild='default' Clean='clean_all' ProjectOpened='watch' />
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });