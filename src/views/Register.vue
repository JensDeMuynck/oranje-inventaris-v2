<template>
  <div class="register">
      Register
  </div>

  <form @submit.prevent="Register">
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="submit" value="Register" />
  </form>
</template>

<script>
import { ref } from "vue";
import firebase from 'firebase';

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => console.log(user))
        .catch(err => console.warn(err.message))
    }

    return {
      Register,
      email,
      password
    }
  }
}
</script>

<style>

</style>