<template>
	<div class="login"></div>

	<h1>Login</h1>
	<router-link to="/">Go to overview</router-link>

	<hr />

	<form @submit.prevent="Login">
		<input type="text" placeholder="Email" v-model="email" />
		<input type="password" placeholder="Password" v-model="password" />
		<input type="submit" value="Log in" />
	</form>

	<router-link to="/register">Need an account? Register here.</router-link>
</template>

<script>
	import { ref } from "vue";
	import firebase from "firebase/app";
	import "firebase/auth";

	export default {
		setup() {
			const email = ref("");
			const password = ref("");

			const Login = () => {
				console.log("Logging in...");
				firebase
					.auth()
					.signInWithEmailAndPassword(email.value, password.value)
					.then((data) => console.log(data))
					.catch((err) => console.warn(err.message));
			};

			return {
				Login,
				email,
				password,
			};
		},
	};
</script>

<style lang="scss">
.login {
	// margin: 0 $margin;
	background: red;
	height: 200px;

	@include columns('margin-left', 2);
	@include columns('width', 2);
}
</style>