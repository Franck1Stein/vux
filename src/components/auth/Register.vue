<template>
  <div class="login-form">

    <div class="container">
      <div class="row">

        <form action="#" @submit.prevent>
          <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                class="login-input"
                v-model="name"
            >
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                class="login-input"
                v-model="email"
            >
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                class="login-input"
                v-model="password"
            >
          </div>

          <div class="form-group">
            <button type="button" @click="register" class="btn-submit">Create Account</button>
          </div>

        </form>

      </div>

    </div>

  </div>

</template>

<script>
// import { mapActions } from 'vuex';
export default {
  name: "Register",

  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
          .then(response => this.$router.push({name: 'login'}))
    }
  }
}
</script>

<style scoped>

</style>
