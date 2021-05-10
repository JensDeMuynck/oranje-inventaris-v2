<template>
  <h1>Login</h1>
    <router-link to="/">Go to overview</router-link>
    <div @click="vueRouterTest">test vue router</div>
    <div class="scss-test" @click="vuexTest">test vuex</div>
</template>

<script>
export default {
    methods: {
        vueRouterTest() {
            console.log('test')
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
        },
        vuexTest() {
            console.log(this.$store.state.user.user)
        },
    }
}
</script>

<style lang="scss">
.scss-test {
    background: $color-red;
}
</style>