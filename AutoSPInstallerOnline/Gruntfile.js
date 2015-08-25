/// <binding BeforeBuild='build' ProjectOpened='dev' />
module.exports = function (grunt) {    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        watch: {
            scripts: {
                files: ['App/*.ts', 'App/Services/*.ts', 'App/Controllers/*.ts', 'Scripts/ConfigModel*.js', 'Gruntfile.js'],
                tasks: ['jshint','tslint', 'typescript'],
                options: {
                    spawn: false
                }
            }
        },
        typescript: {
            base: {
                src: ['App/*.ts', 'App/Services/*.ts', 'App/Controllers/*.ts'],
                dest: 'Scripts',
                options: {
                    module: 'amd', //or commonjs 
                    target: 'es5', //or es3 
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ['App/*.ts', 'App/Services/*.ts', 'App/Controllers/*.ts']
            }
        },
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    console: true,
                    module: true,
                    document: true,
                    angular: true,
                    Jsonix: true,
                    DISQUS: true,
                    alert: true,
                    vkbeautify: true,
                    FileReader: true,
                    ConfigModel: true
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/javascript/APP.js',
                dest: 'public/javascript/APP.min.js'
            }
        }
    });
    
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-typescript');

    // Default task(s).
    grunt.registerTask('build', ['jshint','tslint','typescript']);
    grunt.registerTask('dev', ['watch']);
};