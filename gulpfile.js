/// <binding Clean='clean_all' ProjectOpened='watch_client, watch_smith_framework' />
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });