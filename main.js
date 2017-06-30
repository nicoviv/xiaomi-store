/**
 * Created by yupeng on 17/5/12.
 */

require.config({
    baseUrl:'',
    paths:{
        jquery:'./lib/jquery',
        backbone:'./lib/backbone',
        underscore:'./lib/underscore',
        css:'./lib/css',
        text:'./lib/text'
    }
})

require(['jquery','backbone','./router'],function($,Backbone){

    Backbone.history.start();
})