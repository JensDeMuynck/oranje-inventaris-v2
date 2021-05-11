<template>
	<div class="login">
		<div class="login__wrapper">
			<h1 class="login__title">Log in</h1>

			<form @submit.prevent="Login" class="login__form">
				<div class="login__inputs">
					<input
						class="login__input login__email"
						type="email"
						placeholder="Email"
						v-model="email"
						pattern=".*\S.*"
						required
					/>
					<input
						class="login__input login__password"
						type="password"
						placeholder="Password"
						v-model="password"
						pattern=".*\S.*"
						required
					/>
				</div>

				<div class="login__options">
					<label class="login__remember-me"
						>Ingelogd blijven?
						<input type="checkbox" v-model="rememberMe" checked="checked"/>
						<span class="checkmark"></span>
					</label>
					<div class="login__forgot-password" @click="forgotPassword">
						Wachtwoord vergeten?
					</div>
				</div>

				<button class="login__submit">
					<Icon name="arrow-right" class="login__submit-svg" />
				</button>
			</form>

			<router-link to="/register" class="login__register"
				>Vraag een nieuw account aan.</router-link
			>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
	setup() {
		const email = ref("");
		const password = ref("");
		const rememberMe = ref(false);

		const Login = () => {
			console.log("Logging in...");

			const persistence = rememberMe.value ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.NONE;

			firebase
				.auth()
				.setPersistence(persistence)

			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.then((data) => console.log(data))
				.catch((err) => console.warn(err.message));
		};

		const forgotPassword = () => {
			if (!email.value) {
				console.log('no email')
				return
			}

			firebase.auth().sendPasswordResetEmail(email.value)
				.then(() => {
					console.log('email sent')
				})
				.catch(err => {
					console.warn(err.message)
				});
		}

		return {
			Login,
			forgotPassword,
			email,
			password,
			rememberMe,
		};
	},
};
</script>

<style lang="scss">
.login {
	background: url("src/assets/svg/logo-small.svg"), $color-orange-neutral;
	background-position: center -15%;
	background-repeat: no-repeat;
	height: var(--app-height);

	display: flex;
	align-items: flex-end;
}

.login__wrapper {
	background: $color-white;
	width: 100%;
	height: 70%;
	border-top-left-radius: calc(#{$offset} + #{$columnWidth});
	padding: 0 calc(#{$offset} + #{$columnWidth});
	padding-top: calc(#{$columnWidth} * 2);

	display: flex;
	flex-direction: column;
}

.login__title {
	font-size: 2.4em;
	margin-bottom: 1em;
	font-weight: 300;
}

.login__form {
	display: flex;
	flex-direction: column;
}

.login__input {
	width: 100%;
	font-size: 1.6rem;
	font-weight: 300;
	padding: 0.5em 0;
	color: $color-black;
	outline: none;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid rgba($color: $color-black, $alpha: 0.5);
	font-family: "Nunito", sans-serif;
	transition: all 0.2s;

	&:focus {
		border-color: rgba($color: $color-orange-neutral, $alpha: 1);
	}

	&:valid {
		border-color: rgba($color: $color-orange-neutral, $alpha: 1);
	}

	&::placeholder {
		color: rgba($color: $color-black, $alpha: 0.5);
	}

	&:first-child {
		margin-bottom: 1em;
	}
}

.login__options {
	font-size: 1.2em;
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: underline;
}

.login__submit {
	background: linear-gradient(to bottom right, $color-orange-accent, $color-orange-neutral);
	border: 0;
	outline: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	border-radius: 5rem;
	align-self: flex-end;
	margin: 5rem 0 1rem;
}

.login__submit-svg {
	color: $color-white;
}

.login__register {
	margin-top: auto;
	align-self: center;
	font-size: 1.2rem;
	margin-bottom: 2.5em;
	color: $color-black;
	font-weight: 300;
}

/* ---- custom checkbox ----*/
.login__remember-me {
	display: inline-block;
	position: relative;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	padding-left: 2rem;
}

/* Hide the browser's default checkbox */
.login__remember-me input {
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
}

/* Create a custom checkbox */
.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.5rem;
	width: 1.5rem;
	background-color: $color-orange-light;
	border-radius: 0.4em;
	border: 1px solid $color-black;
}

/* When the checkbox is checked, add a blue background */
.login__remember-me input:checked ~ .checkmark {
	background-color: $color-orange-neutral;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

/* Show the checkmark when checked */
.login__remember-me input:checked ~ .checkmark:after {
	display: block;
}

/* Style the checkmark/indicator */
.login__remember-me .checkmark:after {
	left: 25%;
	top: 50%;
	width: 0.3rem;
	height: 0.6rem;
	border: solid $color-black;
	border-width: 0 2px 2px 0;
	-webkit-transform: rotate(45deg) translate(-50%, -50%);
	-ms-transform: rotate(45deg) translate(-50%, -50%);
	transform: rotate(45deg) translate(-50%, -50%);
}
</style>