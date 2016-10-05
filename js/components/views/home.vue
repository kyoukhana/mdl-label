<template>
    <h1>Home</h1>
    <p>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="name" name="name"  v-model="user.name">
        <label class="mdl-textfield__label" for="name">Name:</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="lastname" lastname="lastname"  v-model="user.lastname">
        <label class="mdl-textfield__label" for="lastname">lastname:</label>
    </div>

    </p>
</template>

<script>
    export default{

        data: function () {
            return {
                user: {
                    name: 'Kevin',
                    lastname:'Test'
                }
            }
        },

        methods:{
            changeUser:function(){
                this.user.name=' Kevin';
            }
        },

        ready: function (){
            this.changeUser();
        }


    }
</script>