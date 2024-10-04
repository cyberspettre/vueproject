<template>
  <div id="app">
    <!-- Conditionally render the navbar based on route -->
    <NavBar v-if="shouldShowNavbar" />
    <router-view />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue'; // Make sure computed is imported
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();

    // Only show the navbar on specific routes, or hide it on certain ones
    const shouldShowNavbar = computed(() => {
      // List of routes where the navbar should NOT be shown
      const hiddenRoutes = ['/employee-page', '/login', '/register', '/settings', '/schedule', '/ingredients', '/recipe',]; // Add any other routes here
      return !hiddenRoutes.includes(route.path); // Show navbar if current route is not in the hiddenRoutes array
    });

    return {
      shouldShowNavbar,
    };
  },
};
</script>
