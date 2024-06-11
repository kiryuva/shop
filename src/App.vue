<template>
	<div class="wrapper">
		<header class="header">
			<NavBar />
		</header>
	<RouterView/>

	</div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
* {
	margin: 0;
	padding: 0;
	font-family: 'Montserrat';
}
select {
	background: none;
	outline: none;
	border: none;
}
body {
	background: rgb(160, 160, 160);
}
li {
	list-style: none;
}
a {
	text-decoration: none;
}
input,
button {
	background: none;
	outline: none;
	border: none;
	transition: 0.5s;
}

.container {
	width: 100%;
	max-width: 1140px;
	margin: 0 auto;
	
}
.wrapper {
	overflow-y: hidden;
}
</style>
