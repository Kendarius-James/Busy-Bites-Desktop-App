# 🍽️ Busy Bites
Busy Bites is a recipe search desktop application designed to search over 5000 recipes tailored to any lifestyle. Built using Electron, React and the Spoonacular api; this application can be run on any desktop computer making it a convenient way to search for your recipe needs. 

<img width="900" height="600" alt="Busy Bites Home" src="https://github.com/user-attachments/assets/71216c36-80af-43f3-a289-b3f65fcd3c7e" />

---

# 🛠️Built With
- ⚛️ React
- 💻 Electron
- 🌐 HTML
- 🎨 CSS
- 📜 JavaScript
- ⚡Vite
- 🟢 Node.js
- 🥗 Spoonacular API

---

# ✨ Application Features
- 🍲 **Search Over 5,000 Recipes:** Find dishes by name with ease.  
- 🥞 **Filter by Meal Type:** Narrow down options based on breakfast, lunch, dinner, or more.  
- 🚫 **Exclude Allergy Ingredients:** Remove recipes containing allergens for safer cooking.  
- 🍳 **Refine by Cookware:** Discover recipes that match the tools in your kitchen.  
- ⏱️ **Set Time Limits:** Search for recipes based on the time you have available.  
- 🥕 **Ingredient-Based Search:** Find meals you can make with what’s already in your pantry.  
- ⭐ **User Feedback at a Glance:** Read summaries of what other users think of each dish.  
- 📖 **Step-by-Step Instructions:** Follow detailed guides and time estimates for every recipe.

---

# 📄 License
This project is licensed under a **Modified MIT License – Non-Commercial Useage Only (MIT-NC)**.  

**License Summary**
- ✅ You may **use, copy, modify, and share** this software freely for **non-commercial purposes**.
- ✍️ You must **give attribution** to the original author.
- 🚫 You may **not use any logos, trademarks, or branding** associated with the author or project.
- 💰 You may **not use this software or its derivatives for commercial purposes** of any kind.

See [LICENSE](./LICENSE) for full legal details.

---

# 💿 Installation Instructions

## 🪟 Windows Installation Instructions
## Option 1. Releases
### 1. Click Link Named "Busy Bites v2.0.0"
<img width="450" height="786" alt="image" src="https://github.com/user-attachments/assets/3d1bf441-7f78-4fd7-8383-32be7b0593d6" />

### 2. Download the .Zip File
<img width="1505" height="267" alt="image" src="https://github.com/user-attachments/assets/9813823c-9b80-4586-9a24-12036471b2da" />

⚠️ Note: When running the application on Windows from the .zip folder, you may see a warning that the software is from an unknown publisher. This occurs because the application has not been signed with a certificate from a trusted Certificate Authority (CA).

✅ You can select “Run anyway” to launch the app, or follow the installation instructions for Command Line to run the app through the command line, which avoids this pop-up entirely.

---

## Option 2. Command Line
### 1. Download the files
Download the Zip file or git clone below.
#### a. Click Code and then click download zip folder for source files.

<img width="507" height="461" alt="image" src="https://github.com/user-attachments/assets/6eeb32b8-4904-4675-95e9-bc6977430861" />

#### b. In terminal use git clone to clone the repository.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install Node Package Manager
Go to https://nodejs.org/en and install node.js for any version in between 20.19+ and 22.12+ to be compatible with the Vite dependency. To verify successful installation, run the following commands below inside the Busy-Bites-Electron-App directory.
```
node -v
npm -v
```
To change into the recipe-app directory using the terminal, see the example below.
```
cd .\Busy-Bites-Electron-App\
cd .\recipe-app\
```
### 3. Install React, React-dom, and Vite
Change into the react directory and install react and react-dom. Afterwards change back into the recipe-app directory.
```
cd '.\react\'
npm run install
cd ..
```
### 4. Install Electron 
Change into the electron directory and install electron. Afterwards change back into the recipe-app directory.
```
cd '.\electron\
npm run install
cd ..
```
### 5. Install Electron Forge
Inside of the recipe-app directory, install electron-forge.
```
npm run install
```
### 6. Build the React Files 
Remaining inside the recipe-app directory, build the react files. 
```
npm run build
```
### 7. Create the Executable
Remaining inside the recipe-app directory, use npm make to create the executable. This step may take a while.
```
npm run make
```

---

## 🐧 Linux Installation Instructions (Ubuntu)
## Option 1. Releases
### 1. Click Link Named "Busy Bites v2.0.0"
<img width="450" height="786" alt="image" src="https://github.com/user-attachments/assets/3d1bf441-7f78-4fd7-8383-32be7b0593d6" />

### 2. Download the .Zip File
<img width="1505" height="267" alt="image" src="https://github.com/user-attachments/assets/f4666188-11e9-456b-81e0-f8d1a1c32c2d" />

## Option 2. Command Line
### 1. Download the Files
Download the Zip file or git clone below.
#### a. Click Code and then click download zip folder for source files.

<img width="507" height="461" alt="image" src="https://github.com/user-attachments/assets/6eeb32b8-4904-4675-95e9-bc6977430861" />

#### b. In terminal use git clone to clone the repository.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install Node Package Manager
Inside the Busy-Bites-Electron-App directory, install the Node package manager.
```
sudo apt install npm
```
To verify successful installation, run the following commands below.
```
node -v
npm -v
```
Note it is recommended for the Node versions to be in between 20.19+ and 22.12+ to be compatible with the Vite dependency. 
#### ⚠️ If there is an issue with different node versions or an issue with installing react, install node version manager (nvm) with the following code to adjust versions.
Installs Client URL (curl), which is used to transfer data to or from a server using URLs.
```
sudo apt install curl
```
Installs node version manager (nvm)
```
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install --lts
nvm use --lts   
```

### 3. Install React, React-dom, and Vite
Change into the react directory and install react and react-dom. Afterwards change back into the recipe-app directory.
```
cd recipe-app/
cd react/
npm run install
cd ..
```
### 4. Install Electron 
Change into the electron directory and install electron. Afterwards change back into the recipe-app directory.
```
cd 'electron/
npm run install
cd ..
```
### 5. Install Electron Forge
Inside of the recipe-app directory, install electron-forge.
```
npm run install
```
### 6. Build the React Files 
Remaining inside the recipe app directory, build the react files.
```
npm run build
```
### 5. Install Electron 
After building the React Files, remaining inside the Busy-Bites-Electron-App directory and install Electron.
```
npm install electron
```
### 7. Create the Executable
Remaining inside the recipe-app directory, use npm make to create the executable. This step may take a while.
```
npm run make
```
---

# 🧑‍🍳 How to Use Busy Bites
### 1. Go to Spoonacular Website and Create an Account
<img width="900" height="600" alt="Spoonacular Dashboard" src="https://github.com/user-attachments/assets/64b3a4fe-9c3a-46c0-8ee7-809c3d5de8a9" />


### Once you created your account, you will insert your api key in the field below and agree to the Terms of Service and Privacy Policy.


<img width="900" height="700" alt="API Key Input" src="https://github.com/user-attachments/assets/5336b136-6c05-411a-9a98-d65d215f5550" />

### 2. Filter by Recipe
In the following fields below, filter by:
  - 🍽️ Meal Name
  - 🥗 Meal Type
  - ❌ Diet Restrictions
  - 🍳 Cookware
  - ⏱️ Planning Time
  - 🥕 Ingredients 

All fields are required except Meal Name and Ingredients.

<img width="900" height="600" alt="Busy Bites Filled" src="https://github.com/user-attachments/assets/55fd0af3-f090-4575-9db5-73e22b7ff1d0" />

### 3. Select Your Chosen Recipe
Once the search is complete, choose your desired recipe from the list.

<img width="900" height="600" alt="Filtered Recipe Results" src="https://github.com/user-attachments/assets/3ca2a5ce-fad0-4e63-a52d-30519e687657" />

### 4. Follow the Recipe
Individual results of each recipe will vary. Once the application finish retrieving your chosen recipe, it will return:
- ⏲️ Estimated prep and cook time
- 🍽️ Serving amount
- 🥗 Diets
- 📝 Ingredient list
- 📖 Summary and cooking steps

<img width="900" height="600" alt="Hamburger-Result-1" src="https://github.com/user-attachments/assets/15f35081-444c-4ead-86ef-3b539c6b5e3c" />

<img width="900" height="600" alt="Hamburger-Result-2" src="https://github.com/user-attachments/assets/4b7a785d-8c36-41cc-9fcb-18a14ca81093" />

<img width="900" height="600" alt="Hamburger-Result-3" src="https://github.com/user-attachments/assets/4d674031-7a20-4067-ba21-485c300ffee1" />

---

## 🙏 Acknowledgments
- 🥗 Recipe data provided by **Spoonacular API**
- 📸 Home Screen photo by **Brooke Cagle** on **Unsplash**

## ✉️ Contact
- 🌐 Portfolio: [Kendarius James](https://kendarius-james.github.io/index.html)
- 🐙 GitHub: [@kendarius-james](https://github.com/kendarius-james)
