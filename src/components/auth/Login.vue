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

      this.$store.dispatch('auth/login', {
        username,
        password
      })

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Logging in...'
      })        
    },

    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>