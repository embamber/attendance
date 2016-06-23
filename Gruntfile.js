/****************************************************************************************
*
*  @author Erin Bamberger
*  @version (.1)
*  @date (2015)
*
*  1.) COMMAND LINE REFERENCES ___________ @cmdLineRef
*  2.) CONCATENATION _____________________ @concatenation
*  3.) MINIFY/OPTIMIZE ___________________ @minifyOptimize
*  4.) BACKGROUND TASKS __________________ @backgroundTasks
*  5.) REGISTER TASKS ____________________ @registerTasks
*
*****************************************************************************************/

/*************************************************
 * COMMAND LINE REFERENCES             @cmdLineRef
 *
 * $ grunt 
 *   - runs default task which creates a lightweight
 *     static server
 *
 * $ grunt dev 
 *   - run while developing, this compiles LESS
 *
 * $ grunt test
 *   - this will run the tasks for test
 *
 * $ grunt production
 *   - this will run the tasks for production
 *
 *************************************************/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*************************************************
         * BACKGROUND TASKS               @backgroundTasks
         *************************************************/
        less: {
            compile: {
                options : {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files : {
                    'css/login.css': 'less/login.less',
                    'css/dashboard.css': 'less/dashboard.less'
                }
            }
        }
    });
    /*************************************************
     * LOAD TASKS                           @loadTasks
     *************************************************/
    grunt.loadNpmTasks('grunt-contrib-less');
    /*************************************************
     * REGISTER TASKS                   @registerTasks
     *************************************************/
    grunt.registerTask('dev', ['less']);
    grunt.registerTask('test',['less:test']);
    grunt.registerTask('production',['less:production']);
};