@echo off
echo 🚀 Starting Portfolio Hub...
echo.

echo 📦 Installing dependencies...
call npm run install:all

echo.
echo 🖥️  Starting servers...
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.

start "Portfolio Hub - Frontend" cmd /k "cd client && npm start"
start "Portfolio Hub - Backend" cmd /k "cd server && npm start"

echo ✅ Both servers are starting...
echo.
echo 🌐 Open http://localhost:3000 in your browser
pause 