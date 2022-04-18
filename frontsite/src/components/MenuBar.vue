<template>
   <nav class="menu">
		<!-- LOGO -->
		<div class="menu__logo">
			<a class="menu__logo--link" :href="logo.link">
				<img
					:src="logo.image"
					:alt="logo.alternative_text"
					class="menu__logo--img"
				/>
				<h1 class="menu__logo--title">{{ logo.name }}</h1>
                    <!-- <span>{{logo.slogan}}</span> -->
			</a>
		</div>
		<!-- END LOGO -->

          <!-- BURGER BUTTON -->
		<div @click="menu" class="menu__burger">
			<div class="menu__strip menu__burger--strip">
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
			</div>
		</div>
		<!-- END BURGER BUTTON -->


          <!-- LINKS -->
		<ul class="menu__list">
			<li
				v-for="linky in links"
				:key="linky.id"
				class="menu__list--item progress-bar-fx"
			>
				<a :href="linky.href" class="menu__list--link">{{ linky.name }}</a>
			</li>
			<!-- END LINKS -->

			<!-- SOCIAL ICON LINKS -->
			<div class="menu__list-social--container">
				<span class="menu__list-social--title">follow me</span>
				<ul class="menu__list-social">
					<li
						v-for="social in socialLogos"
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
			<!-- END SOCIAL ICON LINKS -->
		</ul>
		<!-- END LINKS -->
		
	</nav>
</template>

<script setup>
import { ref, toRefs, reactive, computed } from 'vue';
/** ****************************************************************************************** */
// REACTVE para declarar propiedades dentro de reactive tengo que abrir siempre un objeto y tener en cuenta 
// que va aa ser reactivo a todos sus niveles , es decir que va a mutar y se modificara el mismo objeto , 
// para solucionar esto se debe hacer una copia del objeto y para hacer destructuring es recomendable usar [TOREFS(obj)]
// esto no pasa con [REF]

// Para acceder a los valores de [REF] tengo que usar su propiedad value [REF].value
const logo = ref({
     link: '/',
     image:"./logo.png",
     name: 'Luis Quintero',
     slogan: 'Descripción de la web aquí',
     alternative_text: 'Ah caray!'
});


const hasTitle = () => (!(logo.value.name.match(/^\s/g) || logo.value.name.length <= 0));

const menu = () => {
  const burger = document.querySelector('.menu__burger');
  const menuList = document.querySelector('.menu__list');
  const mobileMenuIsOpen = menuList.classList.toggle('menu__show');
  const barsBurger = document.querySelectorAll('.menu__bar');
  const bar1 = document.querySelector('.menu__bar:first-child');
  const bar2 = document.querySelector('.menu__bar:nth-child(2)');
  const bar3 = document.querySelector('.menu__bar:last-child');

  mobileMenuIsOpen
    ? barsBurger.forEach((bar) => {
      // bar.style.backgroundColor = "red";
      burger.style.backgroundColor = 'var(--themeColor)';
      // burger.style.borderRadius = "50%";
    })
    : barsBurger.forEach((bar) => {
      bar.style.backgroundColor = 'var(--darkColor)';
      burger.style.backgroundColor = 'var(--themeColor)';
    });
  bar1.classList.toggle('menu__bar1');
  bar2.classList.toggle('menu__bar2');
  bar3.classList.toggle('menu__bar3');
};
/*const menuProps = reactive({
  image: require('../../public/logoluiscara.png'),
  description: 'Logo de la Web',
  icon: [
    {
      name: 'closeButton',
      image: require('../../public/x-square-fill.svg'),
    },
    {
      name: 'facebook',
      image: require('../../public/facebook.svg'),
      link: '#',
    },
    {
      name: 'instagram',
      image: require('../../public/instagram.svg'),
      link: '#',
    },
    {
      name: 'youtube',
      image: require('../../public/youtube.svg'),
      link: '#',
    },
  ],
  links: [
    { name: 'Home', href: '#' },
    { name: 'About me', href: 'http://172.21.2.38:8080/' },
    { name: 'Hightlights', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  showTitle: true,
});



*/
/** ****************************************************************************************** */
</script>

<style scoped>

.menu {
	display: flex;
	align-items: center;
	background: var(--darkColor);
	height: 80px;
	justify-content: space-around;
	width: 100vw;
	border-bottom: 0.5px solid var(--themeColor);
}

/* :::::::::: LOGO :::::::::: */
.menu__logo {
	align-items: center;
	display: flex;
	justify-content: center;
}
.menu__logo--img {
	height: 40px;
}
.menu__logo--link {
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--white);
	text-decoration: none;
	gap: 16px;
	width: 100%;
}
.menu__logo--title {
	/* display: none; */
	font-size: 40px;
	text-align: center;
	color: white;
	font-family: "Built Titling Rg", sans-serif;
	font-weight: normal;
	font-style: normal;
	letter-spacing: 1px;
}

/* :::::::::: BURGER BUTTON :::::::::: */
.menu__burger {
	width: 32px;
	height: 32px;
	border-radius: 2px;
	background-color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}
.menu__burger--strip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}
.menu__strip .menu__bar {
	height: 2px;
	border-radius: 8px;
	background-color: var(--darkColor);
	margin: 2px;
	transition: all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 16px;
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
	background-color: var(--darkColor);
	background: url("../assets/landingpage_bg1.jpg");
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: calc(100vh - 80px);
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	top: 80px;
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
	color: var(--themeColor);
}
.menu__list--link {
	color: var(--white);
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
	background-color: var(--themeColor);
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

/* :::::::::: MEDIA QUERIES :::::::::: */
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1024px) {
}
@media only screen and (min-width: 1200px) {
}
</style>
