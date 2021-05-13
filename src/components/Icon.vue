<template>
	<svg
		v-if="name === 'arrow-right'"
		:class="classname"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<line x1="5" y1="12" x2="19" y2="12"></line>
		<polyline points="12 5 19 12 12 19"></polyline>
	</svg>

	<svg
		v-if="name === 'go-back'"
		:class="classname"
		width="100%"
		height="100%"
		viewBox="0 0 38 67"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
	>
		<path
			d="M36.28,59.554l-26.221,-26.221c0,0 26.221,-26.22 26.221,-26.22c1.626,-1.626 1.626,-4.267 -0,-5.893c-1.626,-1.626 -4.267,-1.626 -5.893,0l-29.167,29.167c-1.627,1.627 -1.627,4.265 0,5.893l29.167,29.166c1.626,1.626 4.267,1.626 5.893,0c1.626,-1.626 1.626,-4.266 -0,-5.892Z"
		/>
	</svg>

	<svg
		v-if="name === 'menu'"
		:class="classname"
		width="100%"
		height="100%"
		viewBox="0 0 84 59"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
	>
		<path
			d="M4.167,33.333l75,0c2.299,0 4.166,-1.867 4.166,-4.166c0,-2.3 -1.867,-4.167 -4.166,-4.167l-75,0c-2.3,-0 -4.167,1.867 -4.167,4.167c-0,2.299 1.867,4.166 4.167,4.166Z"
		/>
		<path
			d="M4.167,8.333l75,0c2.299,0 4.166,-1.867 4.166,-4.166c0,-2.3 -1.867,-4.167 -4.166,-4.167l-75,0c-2.3,-0 -4.167,1.867 -4.167,4.167c-0,2.299 1.867,4.166 4.167,4.166Z"
		/>
		<path
			d="M4.167,58.333l75,0c2.299,0 4.166,-1.867 4.166,-4.166c0,-2.3 -1.867,-4.167 -4.166,-4.167l-75,0c-2.3,0 -4.167,1.867 -4.167,4.167c0,2.299 1.867,4.166 4.167,4.166Z"
		/>
	</svg>
</template>

<script>
export default {
	props: ["name", "classname"],
};
</script>
