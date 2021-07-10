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

    <q-toggle v-model="accept" label="I accept the license and terms" />

    <div>
      <q-btn label="Login" type="submit" color="primary"/>
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: null,
      password: null,
      accept: false
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Activation link sent to your email.'
        })
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