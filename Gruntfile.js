module.exports = function(grunt) {

	grunt.initConfig({
	
	copy: {
		projeto: {
			expand: true,
			cwd: "dist/img",
			src: "**/*.{png,jpg,gif}",
			dest: "dist/img"
		}
	},
	clean: ["dist"]	
	useminPrepare: {
		html: ["dist/**/*.html"]
	},
	usermin: {
		html: ["dist/**/*.html"]
	}

	});

	grunt.registerTask("minifica", ["useminPrepare", "usemin", "concat", "uglify", "cssmin", "imagemin"]);

	

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-usemin");

	grunt.registerTask("default", ["clean", "copy", "minifica"]);
}
