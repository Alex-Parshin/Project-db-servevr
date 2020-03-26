let Vue = require("vue");
let App = require("./app.vue");
let VueRouter = require("vue-router");
let Gallery = require("./gallery.vue");
let Item = require("./item.vue");
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
    {path: "/",component:Gallery},
    {path: "/items/:index",component:Item},
 ]
 });
let vm = new Vue({
el:"#root",
router:router,
render: function(creatElement){
return creatElement(App);
}
});
//router.start(Vue.extend({}),"#root");

