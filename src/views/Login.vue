<template>
  <h1>Login</h1>
  <router-link to="/">Go to overview</router-link>
  <div @click="vueRouterTest">test vue router</div>
  <div class="scss-test" @click="vuexTest">test vuex</div>

  <hr />

  <form @submit.prevent="Login">
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="submit" value="Log in" />
  </form>

  <router-link to="/register">Need an account? Register here.</router-link>
</template>

<script>
import { ref } from "vue";
import firebase from 'firebase';

export default {
    setup() {
        const email = ref("")
        const password = ref("")

        const Login = () => {
            console.log('Logging in...');
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
        }

        return {
            Login,
            email,
            password
        }

    },
    methods: {
        vueRouterTest() {
            console.log("test");
            setTimeout(() => {
                this.$router.push("/");
            }, 2000);
        },
        vuexTest() {
            console.log(this.$store.state.user.user);
        }
    }
};
</script>

<style lang="scss">
.scss-test {
  background: $color-red;
}
</style>