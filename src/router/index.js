import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import EmployeePage from '@/components/EmployeePage.vue';
import Schedule from '@/components/Schedule.vue';
import Inventory from '@/components/Inventory.vue';
import Recipe from '@/components/Recipe.vue';
import Ingredients from '@/components/Ingredients.vue'; // New component
import Sales from '@/components/Sales.vue'; // New component
import ProfileSettings from '@/components/ProfileSettings.vue';
import AdminRequest from '@/components/AdminRequest.vue';
import Login from '@/components/Login.vue'; 
import Register from '@/components/Register.vue';
import ChangePassword from '@/components/ChangePassword.vue';
import settings from '@/components/Settings.vue';
import AdminPage from '@/components/AdminPage.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/employee-page', component: EmployeePage },
  { path: '/schedule', component: Schedule },
  { path: '/inventory', component: Inventory },
  { path: '/ingredients', component: Ingredients }, // New route
  { path: '/recipe', component: Recipe },
  { path: '/sales', component: Sales }, // New route
  { path: '/profile', component: ProfileSettings },
  { path: '/admin-request', component: AdminRequest },
  { path: '/login', component: Login }, 
  { path: '/Register', component: Register},
  { path: '/ChangePassword', component: ChangePassword},
  { path: '/settings', component: settings},
  { path: '/adminpage', component: AdminPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
