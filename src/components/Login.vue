<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            
            <input type="email" v-model="email" placeholder="username/email" required />
          </div>
          <div class="input-group">
            
            <input type="password" v-model="password" placeholder="Enter your password" required />
          </div>
          <a href="employee-page">Login</a>
        </form>
        <div class="social-login">
          <p>Connect with social media:</p>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fab fa-google"></i></a>
          </div>
        </div>
        <div class="forgot-register">
          <p><a href="#" class="forgot-password">Forgot password?</a></p>
          <p>Don't have an account? <a href="/register" class="register-link">Register now</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Add your login logic here
        console.log('Logging in with', this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #acd0df;
  }
  
  .login-form {
    background-color: #acd0df;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
  }
  
  .input-group {
    margin-bottom: 15px;
    border-radius: 5px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  input::placeholder {
    color: #888; /* Optional: Customize the placeholder color */
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(87, 171, 204);
  }
  
  .social-login {
    text-align: center;
    margin: 15px 0;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
  }
  
  .icon {
    margin: 0 10px;
    color: blue;
    font-size: 24px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Set width and height for circular effect */
    height: 40px;
    border: 1px solid blue; /* Solid blue border */
    border-radius: 5px; /* Make it circular */
    transition: background-color 0.3s;
  }
  
  .icon:hover {
    background-color: rgba(0, 0, 255, 0.1); /* Optional: Change background color on hover */
  }
  
  .forgot-register {
    text-align: center;
  }
  
  .forgot-password,
  .register-link {
    color: blue;
    text-decoration: underline;
  }
  </style>
  