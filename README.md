# Soulets!

Este sitio se terminó de desarrollar (versión 1.0) el 21/09/2021. Su finalidad es la de brindar la posibilidad a una empresa como en este caso Soulets, comercializar sus productos mediante la toma de órdenes de pedido.

# Link video proceso de compra

https://drive.google.com/file/d/1GvqNeEke_QTBLbfO8SJjKRLwhGhxyipo/view?usp=sharing

# Tecnologías usadas

<ul>
	<li> HTML</li>
	<li> CSS, SCSS</li>
	<li>JavaScript</li>
	<li>React.JS</li>
	<li>Bootstrap</li>
	<li>Firebase</li>
<ul>

## Estructura del sitio

Programado en React JS. Posee un router encerrado en el context CartState (CartContext), de esta forma todos los componentes que se encuentran en el router tienen acceso. El router por su parte tiene un switch donde se encuentran todas las rutas, menos el NavBar y el Footer que se encuentran un nivel más arriba, esto hace que independientemente en la sección que te encuentres siempre los veas y se importan en un sólo componente.


## Home

Esta sección sólo posee el Slider y el catálogo, donde se encuentran todos los productos.

## ListCategories

Este componente muestra las categorías de los productos. Llama a firebase y los muestra mediante un map

## Categories
Categories es un componente que muestra todos los productos referidos a una categoría en especial


## Item

En esta parte, se muestra los detalles del producto seleccionado. Se muestra un contador donde elegis la cantidad solicitada para ordenar y detalles propios del producto, como el peso, colores, etc.


## Cart
Una vez que elegiste los productos a ordenar se habilita esta sección donde se muestran los productos en el carrito, allí podes seguir comprando (te redirige al catálogo) o finalizar y realizar el pedido completando el formulario con los datos requeridos


## Nosotros

Una pequeña reseña de la historia ficticia de la empresa

## Preguntas frecuentes
En esta sección se responden unas preguntas, mediante el mapeo de un array con objeto que posee pregunta y respuesta


## NotFound

En la última línea del router se encuentra este componente que muestra este error.

# Componentes importantes

## CartState

En este componente se crean dos estados, state y productSelected. En state se graba continuamente los productos que selecciona el usuario, su cantidad, precio, etc. y se lo pasa a "cart" en el sessionStorage. productSelected nos servirá luego para identificar cuando un producto es seleccionado o no y actualizar mediante useEffect los productos en el "cart"

## ItemDetailContainer

Este componente recibe tres props. Titulo, donde muestra "Catálogo de productos" en el home o la categoría cuando se lo llama en categories; Dato, que pasa el array con el listado de productos a mostrar y <i>mostrarCount</i> que se le pasa "si" o "no" para que en el producto se muestre o no el contador.

## ItemDetail - ItemCount

Este componente recibe de ItemDetailContainer la información del producto a mostrar en el catálogo. Y debajo importa a ItemCount, que según la prop si es "si" se muestra y "no" lo oculta para que no se muestre en el catálogo y sí se muestre en la sección de Item. ItemCount es el componente que hace que se agreguen productos al carrito o no, mediante los buttons. Recibe el context y actualiza state y el sessionStorage.

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
