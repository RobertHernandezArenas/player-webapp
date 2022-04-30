<template>
	<nav class="menu">
		<!-- LOGO -->
		<div class="menu-container-logo">
			<img
				class="menu-container-logo__image"
				:src="data.logo.image"
				:alt="data.logo.alternative_text"
			/>

			<div class="menu-container-logo__namesite">
				<a class="menu-container-logo__link" :href="data.logo.link">
					<h1 v-if="hasTitle()" class="menu-container-logo__title">
						{{ data.logo.name }}
					</h1>
				</a>
				<span v-if="hasSlogan()" class="menu-container-logo__slogan">{{
					data.logo.slogan
				}}</span>
			</div>
		</div>

		<!-- BURGER BUTTON -->
		<div class="menu__burger" @click.prevent="menuFX">
			<div class="menu__strip menu__burger--strip">
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
			</div>
		</div>

		<!-- LINKS -->
		<ul class="menu__list">
			<li
				v-for="linky in data.navigation"
				:key="linky.id"
				class="menu__list--item progress-bar-fx"
			>
				<a :href="linky.href" class="menu__list--link">{{ linky.name }}</a>
			</li>

			<!-- SOCIAL ICON LINKS -->
			<div class="menu__list-social--container">
				<span class="menu__list-social--title">follow me</span>
				<ul class="menu__list-social">
					<li
						v-for="social in data.socialLogos"
						:key="social.id"
						class="menu__list-social--item"
					>
						<a href="#" class="menu__list-social--link">
							<img
								class="menu__list-social--icon"
								:src="social.logo"
								:alt="social.name"
						/></a>
					</li>
				</ul>
			</div>
		</ul>
	</nav>
</template>

<script setup>
import { ref /*reactive, toRefs, reactive, computed*/ } from "vue";
/** ****************************************************************************************** */
// REACTVE para declarar propiedades dentro de reactive tengo que abrir siempre un objeto y tener en cuenta
// que va aa ser reactivo a todos sus niveles , es decir que va a mutar y se modificara el mismo objeto ,
// para solucionar esto se debe hacer una copia del objeto y para hacer destructuring es recomendable usar [TOREFS(obj)]
// esto no pasa con [REF]

// Para acceder a los valores de [REF] tengo que usar su propiedad value [REF].value
const data = ref({
	logo: {
		link: "/",
		image: "./logo-w.png",
		name: "LQ10",
		alternative_text: "Logo Luis Quintero",
		slogan: "",
	},
	navigation: [
		{ name: "Home", href: "#" },
		{ name: "About me", href: "http://172.21.2.38:8080/" },
		{ name: "Hightlights", href: "#" },
		{ name: "Gallery", href: "#" },
		{ name: "Contact", href: "#" },
	],
	socialLogos: [
		{
			name: "facebook",
			logo: "./images/facebook.svg",
			link: "#",
		},
		{
			name: "instagram",
			logo: "./images/instagram.svg",
			link: "#",
		},
		{
			name: "youtube",
			logo: "./images/youtube.svg",
			link: "#",
		},
	],
});

const hasTitle = () => (data.value.logo.name.length > 0 ? true : false);
const hasSlogan = () => (data.value.logo.slogan.length > 0 ? true : false);

const menuFX = () => {
	let burger = document.querySelector(".menu__burger");
	let menuList = document.querySelector(".menu__list");
	let mobileMenuIsOpen = menuList.classList.toggle("menu__show");
	let barsBurger = document.querySelectorAll(".menu__bar");
	let bar1 = document.querySelector(".menu__bar:first-child");
	let bar2 = document.querySelector(".menu__bar:nth-child(2)");
	let bar3 = document.querySelector(".menu__bar:last-child");

	mobileMenuIsOpen
		? (burger.style.backgroundColor = "white")
		: barsBurger.forEach(bar => {
				bar.style.backgroundColor = "black";
				burger.style.backgroundColor = "white";
		  });
	bar1.classList.toggle("menu__bar1");
	bar2.classList.toggle("menu__bar2");
	bar3.classList.toggle("menu__bar3");
};

/** ****************************************************************************************** */
</script>

<style scoped>
.menu {
	display: flex;
	justify-content: space-between;
	background-color: black;
	padding: 16px 24px;
	max-height: 72px;
}

.menu-container-logo {
	display: flex;
	gap: 8px;
}
.menu-container-logo__link {
	display: block;
	text-decoration: none;
}
.menu-container-logo__image {
	object-fit: scale-down;
	width: 32px;
}
.menu-container-logo__link {
}
.menu-container-logo__namesite {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu-container-logo__title {
	color: white;
	font-family: "SF Pro Display";
	font-weight: 800;
	text-align: start;
}
.menu-container-logo__slogan {
	color: white;
	font-size: 14px;
}

/* :::::::::: BURGER BUTTON :::::::::: */
.menu__burger {
	width: 40px;
	border-radius: 2px;
	background-color: black;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.6s ease;
}
.menu__burger--strip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.7s ease;
}
.menu__strip .menu__bar {
	height: 4px;
	border-radius: 8px;
	background-color: white;
	margin: 2px;
	transition: all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 24px;
}
.menu__bar1 {
	background-color: yellow;
	transform: translateY(6px) rotate(45deg);
}
.menu__bar2 {
	opacity: 0;
}
.menu__bar3 {
	background-color: yellow;
	transform: translateY(-6px) rotate(-45deg);
}

/* :::::::::: LINKS :::::::::: */
.menu__list {
	align-items: center;
	background-color: black;
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: calc(100vh - 70px);
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	top: 70px;
	left: 0;
	right: 0;
	bottom: 0;
	transform: translateX(-100%);
	transition: opacity 0.65s ease-in-out;
	width: 100vw;
	padding-bottom: 70px;
	z-index: 99;
}
.menu__show {
	opacity: 1;
	transform: translateY(0%);
	transition: opacity 0.35s ease-in-out;
}
.menu__list--item {
	display: inline-block;
	height: 32px;
	border: 0;
	position: relative;
}
.menu__list--link:hover {
	color: yellow;
}
.menu__list--link {
	color: white;
	text-decoration: none;
}

/* :::::::::: PROGRESS BAR HOVER :::::::::: */
.progress-bar-fx:after {
	position: absolute;
	bottom: 0;
	left: 0;
	top: 100%;
	width: 0;
	height: 2px;
	background-color: yellow;
	display: block;
	content: "";
	transition: width 0.45s ease-in-out;
}
.progress-bar-fx:hover:after {
	width: 100%;
}
/* :::::::::: SOCIAL LINKS ICON :::::::::: */

.menu__list-social--container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 80px;
}
.menu__list-social--title {
	color: white;
}
.menu__list-social {
	display: flex;
	gap: 16px;
	list-style: none;
	margin: 16px;
}
.menu__list-social--item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu__list-social--icon {
	height: 24px;
	transform: scale(1, 1);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt="youtube"] {
	height: 32px;
}
.menu__list-social--icon[alt="facebook"]:hover,
.menu__list-social--icon[alt="instagram"]:hover,
.menu__list-social--icon[alt="youtube"]:hover {
	transform: scale(1.15, 1.15);
	transition: transform 0.35s ease-in;
}
.menu__list-social--icon[alt="facebook"]:hover {
	filter: invert(49%) sepia(44%) saturate(7496%) hue-rotate(218deg)
		brightness(91%) contrast(92%);
}

.menu__list-social--icon[alt="instagram"]:hover {
}
.menu__list-social--icon[alt="youtube"]:hover {
	filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
		saturate(1600%) contrast(1);
}
</style>
