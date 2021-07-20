<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >
    <q-input
      filled
      v-model="username"
      label="Username or email *"      
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Please enter a valid username or email']"
    />

    <q-input
      filled
      type="password"
      v-model="password"
      label="Password *"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Please enter your password'        
      ]"
    />  

    <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

    <div class="row">
      <q-space />
      <q-btn label="Register" type="submit" color="primary"/>
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'Register',
  data () {
    return {
      username: null,
      password: null,
      // accept: false
    }
  },
  methods: {
    onSubmit () {
      const username = this.username
      const password = this.password

      if (username && password) {
        this.$store.dispatch('auth/register', {username, password}) 
          .then(res => {
            console.log(res)
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: `User ${username} created.`
            })
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Failed to create new user',
              icon: 'report_problem'
            })
          })   
      } else {     
        console.log('missing required params')            
      }
    },

    onReset () {
      this.username = null
      this.password = null
      this.accept = false
    }
  }
}
</script>