/**
 * Created by yupeng on 17/5/12.
 */

define(['backbone'],function(Backbone){

    var router = Backbone.Router.extend({

        routes: {
            "home": "home",
            "cate": "cate",
            "cart": "cart",
            "mine": "mine",
            "*actions":"defaultAction"
        },

        home: function() {
            require(['./modules/home/home.js'],function(home){
                home.render();
            })
        },

        cate: function() {
           require(['./modules/cate/cate.js'],function(cate){
           	cate.render();
           })
        },
        cart: function() {
            require(['./modules/cart/cart.js'],function(cart){
            	cart.render();
            })
        },
        mine: function() {
             require(['./modules/mine/mine.js'],function(mine){
            	mine.render();
            })
        },
        defaultAction:function(){
           location.hash="home";
        }

    });

    new router();

})