const { createApp } = Vue

  createApp({
    data() {
      return {
        emailAdress : [],
      }
    },

    mounted(){
        for (let index = 0; index < 10; index++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
    
                console.log(response.data.response);
                this.emailAdress.push(response.data.response);            

            })
        }
    }
    }
  ).mount('#app')