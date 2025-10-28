# 🍽️ Busy Bites
Busy Bites is a recipe search desktop application designed to search over 4000 recipes tailored to any lifestyle. Built using Electron, React and the Spoonacular api; this application can be run on any desktop computer making it a convenient way to search for your recipe needs. 

<img width="900" height="600" alt="Busy Bites Home" src="https://github.com/user-attachments/assets/71216c36-80af-43f3-a289-b3f65fcd3c7e" />

---

# 🛠️Built With
- ⚛️ React
- 💻 Electron
- 🌐 HTML
- 🎨 CSS
- 📜 JavaScript
- 🟢 Node.js
- 🥗 Spoonacular API

---

# ✨ Application Features
- 🍲 **Search Over 4,000 Recipes:** Find dishes by name with ease.  
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
### 1. Click Link Named "Busy Bites v1.0.0"
<img width="422" height="757" alt="image" src="https://github.com/user-attachments/assets/53739a51-48e2-40f8-9596-c49d37767c7f" />

### 2. Download the .Zip File
<img width="1521" height="292" alt="image" src="https://github.com/user-attachments/assets/af0751c1-7349-4693-9a94-ba62db8f097b" />

⚠️ Note: When running the application on Windows from the .zip folder, you may see a warning that the software is from an unknown publisher. This occurs because the application has not been signed with a certificate from a trusted Certificate Authority (CA).

✅ You can select “Run anyway” to launch the app, or follow the installation instructions for Command Line to run the app through the command line, which avoids this pop-up entirely.

---

## Option 2. Command Line
### 1. Download the files
Download the Zip file or git clone below.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install Node Package Manager
Go to https://nodejs.org/en and install node.js. To verify successful installation, run the following commands below.
```
node -v
npm -v
```
### 3. Install React and React-dom
```
npm install react react-dom
```
### 4. Build the React Files 
Change into the recipe app directory and build the react files. Afterwards, change back to the previous directory.
```
cd '/recipe-app'
npm run build
cd ..
```
### 5. Install Electron 
```
npm install electron
```
### 6. Install Maker for Windows Distribution
```
npm install --save-dev @electron-forge/maker-squirrel
```
### 7. Create Executable
```
npm run make
```

---

## 🐧 Linux Installation Instructions
### 1. Download the Files
Download the Zip file or git clone below.
```
git clone https://github.com/Kendarius-James/Busy-Bites-Electron-App.git
```
### 2. Install Node Package Manager
```
sudo apt install npm
```
### 3. Install React and React-dom
```
npm install react react-dom
```
#### ⚠️ If there is an issue with different node versions, install node version manager (nvm) with the following code.
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
### 4. Build the React Files 
Change into the recipe app directory and build the react files. Afterwards, change back to the previous directory.
```
cd '/recipe-app'
npm run build
cd ..
```
### 5. Install Electron 
```
npm install electron
```
### 6. Install Maker for Chosen Distribution
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
- 📧 Email: [Contact Me](KendariusJames@protonmail.com)
- 🌐 Portfolio: [Kendarius James](https://kendarius-james.github.io/index.html)
- 🐙 GitHub: [@kendarius-james](https://github.com/kendarius-james)
