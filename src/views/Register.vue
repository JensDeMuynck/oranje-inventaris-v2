<template>
  <div class="register">
		<div class="register__wrapper">
			<h1 class="register__title">Nieuw account</h1>

			<form @submit.prevent="Register" class="register__form">
				<div class="register__inputs">
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

				<button class="register__submit">
					Registreer
					<Icon name="arrow-right" class="register__submit-svg" />
				</button>
			</form>

			<router-link to="/login" class="register__login"
				>Log in met een bestaand account.</router-link
			>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => console.log(user))
        .catch(err => console.warn(err.message))
    }

    return {
      Register,
      name,
      email,
      password
    }
  }
}
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
}

.register__form {
	display: flex;
	flex-direction: column;
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
	background: linear-gradient(to bottom right, $color-orange-accent, $color-orange-neutral);
	border: 0;
	outline: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.7em 0 1em;
	height: 5rem;
	border-radius: 5rem;
	align-self: flex-end;
	margin: 5rem 0 1rem;
	color: $color-white;
	font-size: 2rem;
	font-family: 'Nunito', sans-serif;
	font-weight: 300;
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
}
</style>