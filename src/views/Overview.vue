<template>
	<Header title='Speelpleinen'/>
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

			let { top, left } = el.getBoundingClientRect()
			
			let header = document.querySelector('.header');
			let headerHeight = window.getComputedStyle(header).height;
			let topOffset = parseInt(headerHeight) - 30;

			el.style.zIndex = '1'
			el.style.transform = `translate(-${left}px, -${top - topOffset}px)`
			el.style.width = '100vw'

            setTimeout(() => {
                this.$router.push("/toys");
            }, 500);
		}
	}
}
</script>

<style lang="scss">
.container {
	width: 80vw;
	margin: 0 auto;
}
.banner {
	height: 150px;
	background: lightblue;
	margin-bottom: 3em;
    transition: all 0.5s $animate-ease;
    width: 100%;
}
</style>