<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <input type="text" v-model="fullName" placeholder="First and Last Name" required />
          </div>
          <div class="input-group">
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Register</button>
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
          <p><a href="/ChangePassword" class="forgot-password">Change password</a></p>
          <p>Already have an account? <a href="/login" class="register-link">Login now</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleRegister() {
        // Add your registration logic here
        console.log('Registering with', this.fullName, this.email, this.password);
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
  