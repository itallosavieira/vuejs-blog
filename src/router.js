import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from './pages/about/AboutMe.vue'
import ArticlesList from './pages/blog/ArticlesList.vue'
import ArticlePost from './pages/blog/ArticlePost.vue'
import ProjectsList from './pages/projects/ProjectsList.vue'
import ProjectDetail from './pages/projects/ProjectDetail.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/about' },
		{ path: '/about', component: AboutMe },
		{ path: '/blog', component: ArticlesList },
		{ path: '/blog/:id', component: ArticlePost },
		{ path: '/projects', component: ProjectsList },
		{ path: '/projects/:id', component: ProjectDetail },
		{ path: '/:notFound(.*)', component: NotFound }
	]
});

export default router
