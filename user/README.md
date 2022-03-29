<h1 align="center">
	<img alt="Logo" src=".gitlab/assets/logo.png" width="200px" />
</h1>

<h3 align="center">
  Bazza Cargas
</h3>

<p align="center">
  Codificar's Shipping App is perfect for you who want to create a smart and functional logistics platform.
</p>
<p align="center">
  <a href="https://www.linkedin.com/company/codificar/mycompany/">
    <img alt="Language" src="https://img.shields.io/badge/%20Language-%20Javascript-yellow">
  </a>

  <a href="https://www.linkedin.com/company/codificar/mycompany/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-%20Codificar-gree">
  </a>

  <a href="https://www.linkedin.com/company/codificar/mycompany/">
    <img alt="Repo size" src="https://img.shields.io/badge/repo%20size-%202,3 MB-blue">
  </a>

  <a href="https://www.linkedin.com/company/codificar/mycompany/">
    <img alt="Gitlab last commit" src="https://img.shields.io/badge/last%20commit-%20july 2021-green">
  </a>

  <a href="https://www.linkedin.com/company/codificar/mycompany/">
    <img alt="Repository issues" src="https://img.shields.io/badge/%20issues-%200-red">
  </a>

  <a href="">
    <img alt="License" src="https://img.shields.io/badge/%20License-%20MIT-blue">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

<p style="font-weight: bold;">
  With the generation and success of App Uber, the demand for this type of app turned into a gold rush. The Uber model connects you to the professional who wants to find just one touch on the screen and is expandable to all market niches.
  In this case, the freight script is dedicated to an important function: the organization of logistics services.
  Regardless of the size of your need, you'll be able to organize and control its consequences with a simple and complete application. The Cargo and Shipping App has all the tools for success.
</p>

To see the *api*, click here: [PROJECT_NAME Rest API]()</br>
To see the *web client*, click here: [PROJECT_NAME Web]()

<br>

# 📦 Folder structure
A brief explanation about the file structure of our project, and a little bit of detail about the meaning of each file. You can check out the representation of the structure below, along with some explanations in each section.


## 📂 Api

<p>
We will use axios to communicate with the backend. This is where all the axios configuration files will be.

- The `interceptor` will intercept all requests that are made from our axios client to the server.
- The `request.ts` file is where the instantiation of our `axios` configuration takes place.
- The `index` folder exports everything we need from our api folder.
</p>

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📂interceptor
 ┃ ┃ ┗ 📜isSuccess.ts
 ┃ ┣ 📂user
 ┃ ┃ ┗ 📜user.api.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜request.ts
```

## 📂 Assets
<p>
  This is where all the fonts, images and icons that we will be using during our application will be.

  - The `index` folder exports everything we need from our assets folder.
</p>

```bash
📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┣ 📂svg
 ┃ ┗ 📜index.ts
```

## 📂 Components

<p>
Due to the nature of React components, we have a folder just for individual components that will be used throughout the application.

- The `index` file of our components folder will load and export all the components that were created in our folder.

</p>

```bash
📦src
 ┣ 📂components
 ┃ ┗ 📜index.ts
```

## 📂 Locale
<p>
 The locale folder is where we will create the configuration for our application to change the language according to the device's locale identification and among other functions. No text is written directly in our graphical interface, we need to have its translation for both languages ​​and access them through the locale.
</p>

```bash
📦src
 ┣ 📂locale
 ┃ ┣ 📂translation
 ┃ ┃ ┣ 📜en.json
 ┃ ┃ ┗ 📜pt-BR.json
```


## 📂 Modules
<p>
</p>

```bash
📦src
 ┣ 📂modules
 ┃ ┗ 📜index.ts
```

## 📂 Navigation
<p>
 The application uses 'react navigation' for navigation. If you need material to know how react navigation works, read a little in the docs.

 - Our routes are in the route file enumerated by the enumerator.
</p>

```bash
📦src
 ┣ 📂navigation
 ┃ ┣ 📂stacks
 ┃ ┃ ┣ 📜drawer.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📜actions.ts
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜routes.ts
```


## 📂 Screens
<p>
 The screens folder is where our application canvas components are located. It's important to remember that our screens need to use our 'ScreenWrapper' component, as they are the ones that will wrap the smaller components.

- `<screen name>.tsx` to write our screen
- The `index.tsx` file needs to be in the screen file to export our screen.
- Our screen style needs to be separate from the component file.
</p>

```bash
 ┣ 📂screens
 ┃ ┣ 📂Home
 ┃ ┣ 📂Invoice
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┗ 📜Login.spec.tsx
 ┃ ┣ 📂Onboarding
 ┃ ┃ ┣ 📂Address
 ┃ ┃ ┣ 📂InfoEnterprise
 ┃ ┃ ┣ 📂InfoPerson
 ┃ ┃ ┗ 📂NewRegister
 ┃ ┣ 📂RecoverPassword
 ┃ ┗ 📜index.ts
```


## 📂 Services
<p>
Services that are being used by our application. Services can be external or internal.

Services being used:
- AsyncStorage

</p>

```bash
📦src
 ┣ 📂services
 ┃ ┣ 📂storage
 ┃ ┃ ┣ 📜keys.ts
 ┃ ┃ ┗ 📜storage.service.ts
 ┃ ┗ 📜index.ts
```


## 📂 Stores
<p>
</p>

```bash
📦src
 ┣ 📂stores
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜user.store.ts
```

## 📂 Themes
<p>
Folder with application theme settings such as fonts, colors, themes, spacing, etc. Any theme used by the application must be entered and used from here. The prototype of the application the theme is based on comes from Figma.
</p>

```bash
📦src
 ┣ 📂theme
 ┃ ┣ 📂whiteLabelTheme
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜whiteLabel.ts
 ┃ ┣ 📜colors.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜radius.ts
 ┃ ┣ 📜spacings.ts
 ┃ ┗ 📜typography.ts
```


## 📂 Utils
<p>
Utilities folder for useful service configurations and implementations for our application.

- Config
  - External Service Settings
- Entities
  - Entities used to represent application errors
- Enums
  - Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
- Helpers
  - Files used to get variant of iphone fonts, themes and settings.
- Hooks
  -  Hooks are a new addition to React 16.8. They allow you to use React's state and other features without writing a class.
- Types
  - All custom types used by the application.
</p>

```bash
📦src
 ┣ 📂utils
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜reactotron.ts
 ┃ ┣ 📂entities
 ┃ ┣ 📂enums
 ┃ ┣ 📂helpers
 ┃ ┣ 📂hooks
 ┃ ┣ 📂types
 ┃ ┗ 📜index.ts
 ┗ 📜index.tsx
```

# 🚀 Technologies

Technologies we use during application development.

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Mobx](https://mobx.js.org/README.html)
- [Polished](https://polished.js.org/)
- [Formik](https://formik.org/docs/guides/react-native)
- [Lodash](https://www.npmjs.com/package/lodash)


## 💻 Getting started

### Requirements to run the project

- [React Native](https://react-native.rocketseat.dev/android/windows)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Npm](https://www.npmjs.com/)

*Clone the project from Gitlab and access the folder*

```bash
$ git clone https://git.codificar.com.br/fretes/user.git && cd user
```

*Follow the steps below*

```bash
# Install the dependencies
$ yarn or npm install

# Be sure the file 'src/services/api.ts' have the IP to your API

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android

# If you are going to emulate with ios, run this command
$ yarn ios
```

## 🤔 How to contribute

- [Guide Merge Request](https://projetos.codificar.com.br/login?back_url=https%3A%2F%2Fprojetos.codificar.com.br%2Fprojects%2Fifood-clone%2Fwiki%2FGuia_Merge_Request)


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜
