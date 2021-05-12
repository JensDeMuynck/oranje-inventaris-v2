<template>
	<div class="register">
		<div class="register__wrapper">
			<h1 class="register__title" ref="registerTitle">Nieuw account</h1>

			<form @submit.prevent="Register" class="register__form">
				<div class="register__inputs" ref="registerInputs">
					<input
						class="register__input register__name"
						type="text"
						placeholder="Naam"
						v-model="name"
						pattern=".*\S.*"
						required
					/>
					<input
						class="register__input register__email"
						type="email"
						placeholder="Email"
						v-model="email"
						pattern=".*\S.*"
						required
					/>
					<input
						class="register__input register__password"
						type="password"
						placeholder="Wachtwoord"
						v-model="password"
						pattern=".*\S.*"
						required
					/>
				</div>

				<button class="register__submit" ref="registerSubmit">
					Registreer
					<Icon name="arrow-right" class="register__submit-svg" />
				</button>
			</form>

			<div class="register__login" @click="GoToLogin" ref="registerLogin">
				Log in met een bestaand account.
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "vue-router";

export default {
	setup() {
		const email = ref("");
		const password = ref("");

		const Register = () => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.then((user) => console.log(user))
				.catch((err) => console.warn(err.message));
		};

		/* ----- CUSTOM PAGE TRANSITION ----- */
		const router = useRouter();

		let registerSubmit = ref(null);
		let registerLogin = ref(null);
		let registerTitle = ref(null);
		let registerInputs = ref(null);

		// -- enter state
		onMounted(() => {
			let transitions = [
				registerSubmit.value,
				registerLogin.value,
				registerTitle.value,
				registerInputs.value,
			];

			transitions.forEach((el) => {
				el.classList.add("transition-state-enter");
			});

			setTimeout(() => {
				transitions.forEach((el) => {
					el.classList.remove("transition-state-enter");
				});
			}, 500);
		});

		// -- leave state
		const GoToLogin = () => {
			let transitions = [
				registerSubmit.value,
				registerLogin.value,
				registerTitle.value,
				registerInputs.value,
			];

			transitions.forEach((el) => {
				el.classList.add("transition-state-leave");
			});

			setTimeout(() => {
				router.push({
					name: "Login",
				});
			}, 550);
		};

		/* ----- END CUSTOM PAGE TRANSITION ----- */

		return {
			Register,
			name,
			email,
			password,
			GoToLogin,
			registerSubmit,
			registerLogin,
			registerTitle,
			registerInputs,
		};
	},
};
</script>

<style lang="scss">
.register {
	background: url("src/assets/svg/logo-small.svg"), $color-orange-neutral;
	background-position: center -15%;
	background-repeat: no-repeat;
	height: var(--app-height);

	display: flex;
	align-items: flex-end;
}

.register__wrapper {
	background: $color-white;
	width: 100%;
	height: 70%;
	border-top-left-radius: calc(#{$offset} + #{$columnWidth});
	padding: 0 calc(#{$offset} + #{$columnWidth});
	padding-top: calc(#{$columnWidth} * 2);

	display: flex;
	flex-direction: column;
}

.register__title {
	font-size: 2.4em;
	margin-bottom: 1em;
	font-weight: 300;

	&.transition-state-enter {
		animation: 0.3s $animate-fast-slow 0s 1 normal both running slide-left;
	}
	&.transition-state-leave {
		animation: 0.3s $animate-slow-fast 0s 1 reverse both running slide-left;
	}
}

.register__form {
	display: flex;
	flex-direction: column;
}

.register__inputs {
	&.transition-state-enter {
		animation: 0.3s $animate-fast-slow 0.1s 1 normal both running slide-left;
	}
	&.transition-state-leave {
		animation: 0.3s $animate-slow-fast 0.1s 1 reverse both running slide-left;
	}
}

.register__input {
	width: 100%;
	font-size: 1.6rem;
	font-weight: 300;
	padding: 0.4em 0;
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

	&:not(:last-child) {
		margin-bottom: 1em;
	}
}

.register__options {
	font-size: 1.2em;
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: underline;
}

.register__submit {
	background: linear-gradient(
		to bottom right,
		$color-orange-accent,
		$color-orange-neutral
	);
	border: 0;
	outline: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.7em 0 1em;
	min-height: 5rem; //FIXME: 'height' doesnt work on IOS
	height: 5rem;
	border-radius: 5rem;
	align-self: flex-end;
	margin: 5rem 0 1rem;
	color: $color-white;
	font-size: 2rem;
	font-family: "Nunito", sans-serif;
	font-weight: 300;

	&.transition-state-enter {
		animation: 0.3s $animate-fast-slow 0s 1 normal both running scale-down;
	}
	&.transition-state-leave {
		animation: 0.3s $animate-slow-fast 0s 1 reverse both running scale-down;
	}
}

.register__submit-svg {
	margin-left: 0.5em;
}

.register__login {
	margin-top: auto;
	align-self: center;
	font-size: 1.2rem;
	margin-bottom: 2.5em;
	color: $color-black;
	font-weight: 300;
	text-decoration: underline;

	&.transition-state-enter {
		animation: 0.3s $animate-fast-slow 0s 1 normal both running slide-down;
	}
	&.transition-state-leave {
		animation: 0.3s $animate-slow-fast 0s 1 reverse both running slide-down;
	}
}
</style>