#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Hub Setup');
console.log('======================\n');

// Check if .env file exists in server directory
const envPath = path.join(__dirname, 'server', '.env');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file for server...');
  const envContent = `PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio-hub
NODE_ENV=development`;
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
} else {
  console.log('✅ .env file already exists');
}

console.log('\n📋 Setup Instructions:');
console.log('=====================');
console.log('1. Make sure MongoDB is running on your system');
console.log('2. Start the server: cd server && npm start');
console.log('3. Start the client: cd client && npm start');
console.log('4. Open http://localhost:3000 in your browser');
console.log('\n�� Happy coding!'); 