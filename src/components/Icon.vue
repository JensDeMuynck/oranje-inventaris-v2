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

	<svg
		v-if="name === 'info'"
		:class="classname"
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="12" cy="12" r="10" class="info__circle"></circle>
		<line x1="12" y1="16" x2="12" y2="12"></line>
		<line x1="12" y1="8" x2="12.01" y2="8"></line>
	</svg>

	<svg
		v-if="name === 'plus'"
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
		<line x1="12" y1="5" x2="12" y2="19"></line>
		<line x1="5" y1="12" x2="19" y2="12"></line>
	</svg>

	<svg
		v-if="name === 'search'"
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
		class="feather feather-search"
	>
		<circle cx="11" cy="11" r="8"></circle>
		<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
	</svg>

	<svg
		v-if="name === 'settings'"
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
		class="feather feather-settings"
	>
		<circle cx="12" cy="12" r="3"></circle>
		<path
			d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
		></path>
	</svg>

	<svg
		v-if="name === 'upload'"
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
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
		<polyline points="17 8 12 3 7 8"></polyline>
		<line x1="12" y1="3" x2="12" y2="15"></line>
	</svg>

	<svg
		v-if="name === 'signout'"
		:class="classname"
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
		enable-background="new 0 0 24 24"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M0,0h24v24H0V0z" fill="none" />
		<path
			d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
		/>
	</svg>
</template>

<script>
export default {
	props: ["name", "classname"],
};
</script>
