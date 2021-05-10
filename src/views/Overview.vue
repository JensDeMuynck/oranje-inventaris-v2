<template>
  <h1>Overview</h1>
  <router-link to="/login">Go to login</router-link>
  <button @click="Logout">Log out</button>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from 'firebase';

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
}
</script>