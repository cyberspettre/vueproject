<template>
  <nav class="navbar">
    <ul class="nav-links">
      <!-- Left Side: Logo -->
      <li class="left-section">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          <img :src="logo" alt="Logo" class="logo" />
        </router-link>
      </li>

      <!-- Center Section: Products, About Us, Contact -->
      <li class="center-section">
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/about-us" class="nav-link">About Us</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </li>

      <!-- Right Side: Login, Sign Up, and Cart -->
      <li class="right-section">
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/signup" class="nav-link">Sign Up</router-link>
        <router-link to="/cart" class="nav-link">
          <i class="fas fa-shopping-cart"></i> Cart
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png';

export default {
  name: 'NavBar',
  setup() {
    const logoUrl = ref(logo);

    return { logo: logoUrl };
  },
  mounted() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
}

.nav-links {
  display: flex;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-left: -30px;
}

.center-section {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.right-section {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  padding: 14px 20px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #575757;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    background-color: #333;
  }

  .left-section,
  .center-section,
  .right-section {
    width: 100%;
    justify-content: space-between;
  }

  .nav-link {
    padding: 10px;
    width: 100%;
    text-align: left;
  }
}
</style>
