<template>
	<h1>Overview</h1>
	<router-link to="/login">Go to login</router-link>
	<button @click="Logout">Log out</button>
      
	<main class="container">
		<div @click="Transition" class="banner"></div>
	
		<div class="spacer"></div>
	
		<h1>Andere speelpleinen</h1>

		<div @click="Transition" class="banner"></div>
		<div @click="Transition" class="banner"></div>
		<div @click="Transition" class="banner"></div>
		<div @click="Transition" class="banner"></div>
		<div @click="Transition" class="banner"></div>
	</main>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
	setup() {
		const Logout = () => {
			firebase
				.auth()
				.signOut()
				.then(() => console.log('Signed out succesfully'))
				.catch(err => console.warn(err.message))
		}

		return {
			Logout
		}
	},
	methods: {
		Transition(e) {
			let el = e.target
			console.log(el)

			let { top, left } = el.getBoundingClientRect() 

			el.style.transform = `translate(-${left}px, -${top}px)`
			el.style.width = '100vw'

            setTimeout(() => {
                this.$router.push("/toys");
            }, 500);
		}
	}
}
</script>

<style>
.banner {
	height: 100px;
	background: lightblue;
	margin-bottom: 1em;
    transition: all 0.5s;
}
</style>