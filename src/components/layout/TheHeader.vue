<template>
	<header>
		<nav>
			<the-logo></the-logo>
			<ul>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li><router-link to="/blog">Artiles</router-link></li>
			</ul>
			<div>Search</div>
		</nav>
	</header>
</template>

<style scoped>
header {
	width: 100%;
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1f2023;
}

a {
	text-decoration: none;
	border-bottom: 2px solid transparent;
	color: #1f2023;
	letter-spacing: 0.25rem;
	text-indent: 0.25rem;
	text-align: center;
	display: block;
	transition: 0.2s;
}

a:active,
a:hover,
a.router-link-active {
	border-bottom: 4px solid #ffd73e;
}

nav {
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

ul {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

li {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 200;
}
</style>
