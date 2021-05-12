<template>
	<router-view></router-view>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import firebase from "firebase/app";
import "firebase/auth";

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

		onMounted(() => {
			const appHeight = () => {
				const doc = document.documentElement;
				doc.style.setProperty(
					"--app-height",
					`${window.innerHeight}px`
				);
			};
			window.addEventListener("resize", appHeight);
			appHeight();
		});
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
	font-family: "Nunito", sans-serif;
}
</style>
