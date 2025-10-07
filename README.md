# Busy Bites
Busy Bites is a recipe search desktop application designed to search over 4000 recipes tailored to any lifestyle. Built using Electron, React and the Spoonacular api, this application can be run on any desktop computer making it a convenient way to search for your recipe needs. 

<img width="1447" height="1140" alt="Busy Bites Home" src="https://github.com/user-attachments/assets/71216c36-80af-43f3-a289-b3f65fcd3c7e" />


# How to Install Application

## Linux Installation Instructions
### 1. Download the files
Download the Zip file or git clone below.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install node package manager
```
sudo apt install npm
```
### 3. Install react and react-dom
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
### 4. Build the react files 
```
cd '/recipe-app'
npm run build
cd ..
```
### 5. Install Electron 
```
npm install electron
```
### 6. Install Maker for Chosen Distributiom
#### Creates .deb packages (Debian, Ubuntu).
```
npm install --save-dev @electron-forge/maker-deb 
```
#### Creates .rpm packages (Fedora, CentOS).
```
npm install --save-dev @electron-forge/maker-rpm
```
#### Creates an AppImage.
```
npm install --save-dev @electron-forge/maker-appimage
```
### 7. Create executable
```
npm run make
```

## Windows Installation Instructions
### 1. Download the files
Download the Zip file or git clone below.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install node package manager
```
sudo apt install npm
```
### 3. Install react and react-dom
```
npm install react react-dom
```
### 4. Build the react files 
```
cd '/recipe-app'
npm run build
cd ..
```
### 5. Install Electron 
```
npm install electron
```
### 6. Install Maker for Windows Distributiom
```
npm install --save-dev @electron-forge/maker-squirrel
```
### 7. Create executable
```
npm run make
```
