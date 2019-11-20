<template>
<v-app>
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="8" md="8" style="padding:0px">
                    <v-card>
                        <v-row>
                            <v-col cols="6">
                                <div class="header">
                                    <div id= "title">
                                        Sign In to Continue
                                    </div>
                                    <div id=tagline>
                                        Pengembangan Aplikasi Web
                                    </div>
                                    <div class="form">
                                        <v-text-field v-model="form.email" label="Email" outlined height=50>
                                        </v-text-field>
                                        <v-text-field v-model="form.password" label="Password" type="password" outlined height=50>
                                        </v-text-field>
                                        <v-checkbox v-model="checkbox">
                                            <template v-slot:label>
                                                <div>
                                                Forgot Password?
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on }">
                                                        <a target="_blank" href="http://vuetifyjs.com" @click.stop v-on="on">
                                                            Click here to continue
                                                        </a>
                                                        </template>
                                                    </v-tooltip>
                                                </div>
                                            </template>
                                        </v-checkbox>
                                        <v-btn @click="login()" height="40" block color="info" class="elevation-0">SIGN IN NOW</v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="6" md="6" style="padding:0px">
                                <v-img :src="require('@/assets/a.svg')"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    data(){
        return{
            form: {
                email: null,
                password: null,
            },
             user : new FormData
        }
       
    },
    methods:{
        login(){
            var url = this.$apiUrl+'/auth'
            this.user = new FormData()
            this.user.append('email', this.form.email);
            this.user.append('password', this.form.password);
            this.$http.post(url,this.user).then(response =>{
                if(!!response.data.token){
                    localStorage.setItem('token',response.data.token)
                    this.$router.push({name: 'UserController'})
                }else{
                    alert('Gagal Login')
                }
            })
        }
    }
}
</script>

<style>
.header{
    margin-left: 55px;
    margin-top: 64px;
}
.form{
    margin-top: 64px;
    margin-bottom: 64px;
    margin-right: 55px;
}
#title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
}
#tagline{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
}
</style>