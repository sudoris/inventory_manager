<template>
  <q-page class="flex flex-center">
    <div class="login-wrapper">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <Login />
          </q-tab-panel>

          <q-tab-panel name="register">
            <Register />
          </q-tab-panel>     
        </q-tab-panels>
      </q-card>
    </div>
    
  </q-page>
</template>

<script>
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'

export default {
  name: 'PageAuth',
  components: {
    Login,
    Register 
  },
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  min-width: 90%;
}

@media screen and (min-width: 600px) {
  .login-wrapper {
    min-width: 45%;
  }
}
</style>
