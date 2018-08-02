/*
 * Copyright 2018 Kaidan Gustave
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gulp = require('gulp');
const del = require('del');

const ghPages = 'shengaero.github.io';

const deleting = [
  `${ghPages}/**/*`,
  `!${ghPages}`,
  `!${ghPages}/.git`,
  `!${ghPages}/.git/**/*`,
  `!${ghPages}/CNAME`,
  `!${ghPages}/LICENSE`,
  `!${ghPages}/favicon.ico`,
  `!${ghPages}/service-worker.js`,
  `!${ghPages}/static`,
  `!${ghPages}/static/media`,
  `!${ghPages}/static/media/**`
];

gulp.task('check clean gh-pages', () => del(deleting, { dryRun: true }).then(paths =>
  console.log('Files and folders that would be deleted:\n', paths.join('\n')))
);

gulp.task('clean gh-pages', () => del(deleting));

gulp.task('stage gh-pages content', () =>
  gulp.src('build/**/*').pipe(gulp.dest('shengaero\.github\.io'), { end: true }));

gulp.task('default', gulp.series(['clean gh-pages', 'stage gh-pages content']));