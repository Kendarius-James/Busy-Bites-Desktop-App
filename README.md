# Busy-Bites-Electron-App
Busy Bites is a recipe search application using the Spoonacular api. It is designed to search over 1000 recipes tailored to any lifestyle. Built using electron and react, this application can be run on any desktop computer making it a convenient way to search for your recipe needs.

<img width="1447" height="1140" alt="Busy Bites Home" src="https://github.com/user-attachments/assets/71216c36-80af-43f3-a289-b3f65fcd3c7e" />


# How to Install Application

## Linux Installation Instructions
### 1. Install node package manager
```
sudo apt install npm
```
### 2. Install react and react-dom
```
npm install react react-dom
```
#### If there is an issue with different node versions, install node version manager (nvm) with the following code.
```
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install --lts
nvm use --lts   
```
### 3. Build the react files 
```
cd '/recipe-app'
npm run build
cd ..
```
### 4. Install Electron 
