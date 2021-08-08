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
      autocomplete="current-password"
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
      autocomplete="current-password"
    />  

    <div class="row">
      <q-space />
      <q-btn label="Login" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      const username = this.username
      const password = this.password

      if (username && password) {
        this.$store.dispatch('auth/login', {
          username,
          password
        })
          .then(res => {
            if (res === false) {
              throw new Error('login failed')
            }
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: `Logged in as ${username}`
            })                                           
          })
          .then(res => {
            console.log(this.$route.query.from || '/')
            this.$router.replace(this.$route.query.from || '/')
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Login failed',
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
    }
  }
}
</script>