module.exports = function( grunt ) {


    grunt.config.set( 'open', {

        server_index: {
            path: 'http://localhost:<%= config.server.port %>'
        },

        test_page: {
            path: 'http://localhost:<%= config.server.port %>/test'
        },

        host: {
            path: 'http://<%= config.deploy.host %>'
        }

    } )

}