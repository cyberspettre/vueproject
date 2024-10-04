<template>
    <div class="home-page">
      <h1>Welcome to our bakery!</h1>
      <p>Delicious treats made fresh daily.</p>
      <!-- Add more content as needed -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height of the viewport */
    color: rgb(255, 255, 255); /* Text color, adjust as needed */
    text-align: center;
    background-image: url('@/assets/images/bakery.JPEG'); /* Path to your background image */
    background-size: cover; /* Cover the whole page */
    background-position: center; /* Center the background image */
  }
  </style>
  