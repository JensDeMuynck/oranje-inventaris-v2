<template>
  <router-view></router-view>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
	setup() {
		const router = useRouter();
		const route = useRoute();
		
		onBeforeMount(() => {
			firebase.auth().onAuthStateChanged((user) => {
				if (!user) {
					router.replace("/login");
				} else if (["/login", "/register"].includes(route.path)) {
					router.replace("/");
				}
			});
		});
	},
};
</script>

<style>
</style>
