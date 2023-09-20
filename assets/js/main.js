const { createApp } = Vue

  createApp({
    data() {
      return {
        numberOfMail : 10,
        emailAdress : [],
      }
    },

    mounted(){
        for (let index = 0; index < this.numberOfMail; index++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
    
                console.log(response.data.response);
                this.emailAdress.push(response.data.response);            

            })
        }
    }
    }
  ).mount('#app')