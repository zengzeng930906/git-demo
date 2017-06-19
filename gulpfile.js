/*
* @Author: 夏本增
* @Date:   2017-06-19 12:47:35
* @Last Modified time: 2017-06-19 13:49:33
* gulp主文件，用于注册任务
*/

'use strict';
//载入gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

//注册一个任务
gulp.task('copy',function() {
	//当gulp执行say任务时自动执行该函数
	// console.log('Hello World');
	// 合并 压缩之类的操作
	// 复制文件
	//gulp.src 取一个文件
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'))//将此处需要的操作传递进去
});

gulp.task('dist',function() {
	//监视
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/styles/*.less',['style']);
});

gulp.task('style',function() {
	gulp.src("src/styles/*.less")
		.pipe(less())//编译 该环节过后就是css格式
		.pipe(cssnano())//压缩
		.pipe(gulp.dest('dist/css'));
});


