<template>
  <h1>Login</h1>
    <router-link to="/login">Go to overview</router-link>
    <div @click="test">test</div>
</template>

<script>
export default {
    methods: {
        test() {
            console.log('test')
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
        }
    }
}
</script>