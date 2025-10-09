# Busy Bites
Busy Bites is a recipe search desktop application designed to search over 4000 recipes tailored to any lifestyle. Built using Electron, React and the Spoonacular api; this application can be run on any desktop computer making it a convenient way to search for your recipe needs. 

<img width="900" height="600" alt="Busy Bites Home" src="https://github.com/user-attachments/assets/71216c36-80af-43f3-a289-b3f65fcd3c7e" />

# Built With
- React
- Electron
- HTML
- CSS
- JavaScript
- Node.js
- Spoonacular API

# License
Modified MIT License – Non-Commercial Use Only (MIT-NC)
Copyright (c) 2025 Kendarius James

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to use,
copy, modify, merge, publish, and distribute copies of the Software for
non-commercial purposes only, subject to the following conditions:

1. **Non-Commercial Use Only**

   The Software and derivative works may be used for non-commercial purposes only.
   “Non-commercial” means any use that is not primarily intended for or directed
   toward commercial advantage or monetary compensation.

   Examples of prohibited commercial uses include, but are not limited to:
     - Selling the Software or derivative works;
     - Including the Software or derivative works in a paid product or service;
     - Using the Software in connection with advertising, sponsorships, or
       affiliate marketing;
     - Any activity that generates direct revenue from use of the Software.
   
3. **Attribution**

   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software and derivative works.

4. **Trademarks and Branding**

   This license does not grant permission to use any trade names, trademarks,
   service marks, or logos associated with the author or project.

5. **Warranty Disclaimer**

   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

6. **License Summary**

   In summary:
   - You may use, copy, modify, and share this Software freely for non-commercial purposes.
   - You must provide attribution to the original author.
   - You may not use this Software or its derivatives for commercial purposes
     of any kind.

# Application Features
- **Search Over 4,000 Recipes:** Find dishes by name with ease.  
- **Filter by Meal Type:** Narrow down options based on breakfast, lunch, dinner, or more.  
- **Exclude Allergy Ingredients:** Remove recipes containing allergens for safer cooking.  
- **Refine by Cookware:** Discover recipes that match the tools in your kitchen.  
- **Set Time Limits:** Search for recipes based on the time you have available.  
- **Ingredient-Based Search:** Find meals you can make with what’s already in your pantry.  
- **User Feedback at a Glance:** Read summaries of what other users think of each dish.  
- **Step-by-Step Instructions:** Follow detailed guides and time estimates for every recipe.

# How to Install Application

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


# How to Use Busy Bites
### 1. Go to Spoonscular Website and Create an Account
<img width="900" height="600" alt="Spoonacular Dashboard" src="https://github.com/user-attachments/assets/64b3a4fe-9c3a-46c0-8ee7-809c3d5de8a9" />


### Once you created your account, you will insert your api key in the field below and agree to Terms of Service and Privacy Policy.


<img width="900" height="700" alt="API Key Input" src="https://github.com/user-attachments/assets/5336b136-6c05-411a-9a98-d65d215f5550" />

### 2. Filter by Recipe
In the following fields below, filter by Meal Name, Meal Type, Diet Restrictions, Cookware, Planning Time, and Ingredients. Every Field is required except Meal Name and Ingredients.

<img width="900" height="600" alt="Busy Bites Filled" src="https://github.com/user-attachments/assets/55fd0af3-f090-4575-9db5-73e22b7ff1d0" />

### 3. Select Choosen Recipe
Once the search is complete, choose your desired recipe from the list.

<img width="900" height="600" alt="Filtered Recipe Results" src="https://github.com/user-attachments/assets/3ca2a5ce-fad0-4e63-a52d-30519e687657" />

### 4. Follow the Recipe
Individual results of each recipe will vary. Once then application finished retreving the choosen recipe, it will return a estimate prep and cook time, serving amount, diets, an ingredient list, a summary, and steps to cook the dish.

<img width="900" height="600" alt="Hamburger-Result-1" src="https://github.com/user-attachments/assets/15f35081-444c-4ead-86ef-3b539c6b5e3c" />

<img width="900" height="600" alt="Hamburger-Result-2" src="https://github.com/user-attachments/assets/4b7a785d-8c36-41cc-9fcb-18a14ca81093" />

<img width="900" height="600" alt="Hamburger-Result-3" src="https://github.com/user-attachments/assets/4d674031-7a20-4067-ba21-485c300ffee1" />


## Acknowledgments
- Recipe data provided by Spoonacular API
- Home Screen photo by Brooke Cagle on Unsplash


## Author
**Kendarius James**  
📧 Email: KendariusJames@protonmail.com

🌐 Portfolio: [Kendarius James](https://kendarius-james.github.io/index.html)

🐙 GitHub: [@kendarius-james](https://github.com/kendarius-james)
