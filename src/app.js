Vue.component('a3',{
    template :'<div> <p>thanks {{name}}</p> <button v-on:click="changeName">Change Name</button></div>',
    data:function(){
        return name='sammy';
    },
    methods:{
        changeName: function() {
            this.name='tanny';
            
            console.log(this.name);
            return this.name;
        }
    }
});
var a1=new Vue ({
    el:'#a1',
    data:{
        msg:'a1'
    },
    methods:{
        
    },
    computed:{
        hello:function(){
            return 'hello from a1 '+ this.msg;
        }
    }
   

});

var a2= new Vue({
    el:'#a2',

    data:{
        msg:'a2'
    },
    methods:{
        
        changeTitle:function(){
            a1.msg='msg changed of a1';
        }
    },
    computed:{
        hello:function(){
            return 'hello from a2 ';
        }
    }


    
});
a2.msg ="changed of a2";

