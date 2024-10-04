<template>
  <div class="employee-page">
    <!-- Inline Navbar Section -->
    <nav class="navbar">
      <ul class="nav-links">
        <!-- Left Side: Home and Welcome Message -->
        <li class="left-section">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
          <small class="welcome-text">Welcome, {{ employeeName }}</small>
        </li>

        <!-- Center Section: Schedule -->
        <li class="center-section">
          <router-link v-if="isEmployee" to="/schedule" class="nav-link">Schedule</router-link>
        </li>

        <!-- Right Side: Inventory, Search Bar, Cart, and Settings -->
        <li class="right-section">
          <div class="dropdown">
            <button class="dropbtn">Inventory</button>
            <div class="dropdown-content">
              <router-link to="/ingredients">Ingredients</router-link>
              <router-link to="/recipe">Recipe</router-link>
              <router-link to="/sales">Sales</router-link>
            </div>
          </div>

          <!-- Search Bar with Icon -->
          <div class="search-section">
            <input
              type="text"
              placeholder="Search..."
              v-model="searchQuery"
              class="search-input"
            />
            <button @click="handleSearch" class="search-button">
              <i class="fas fa-search"></i> <!-- Search Icon -->
            </button>
          </div>

          <router-link to="/cart" class="nav-link">
            <i class="fas fa-shopping-cart"></i> Cart
          </router-link>
          <router-link to="/settings" class="nav-link">
            <i class="fas fa-cog"></i> Settings
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Page Header -->
    <header>
      <h1>Hello, {{ employeeName }}</h1>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png'; // Update path to your logo

export default {
  name: 'EmployeePage',
  data() {
    return {
      employeeName: 'Employee Name', // Can be fetched dynamically
    };
  },
  setup() {
    const logoUrl = ref(logo);
    const isEmployee = ref(true); // Adjust employee status logic as needed
    const searchQuery = ref(''); // For the search input

    // Handle search logic
    const handleSearch = () => {
      console.log('Search for:', searchQuery.value);
    };

    return { logo: logoUrl, isEmployee, searchQuery, handleSearch };
  },
  mounted() {
    // Dynamically load FontAwesome icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
  },
};
</script>

<style scoped>
.employee-page {
  padding: 20px;
}

/* Navbar Styles */
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
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
}

.welcome-text {
  margin-left: 10px;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.center-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #dadada;
  padding: 14px 20px;
  font-size: 16px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav-link {
  padding: 14px 20px;
  text-decoration: none;
  color: #000;
}

.nav-link:hover {
  background-color: #575757;
}

/* Search Section */
.search-section {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  border-radius: 4px;
}

.search-button {
  padding: 6px 10px;
  background-color: #ff9933;
  border-radius: 4px;
  color: #000;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #e68a00;
}

header h1 {
  margin-top: 20px;
}
</style>
