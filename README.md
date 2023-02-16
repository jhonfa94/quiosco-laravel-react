# ☕ FreshCoffee

Proyecto de implementación de un quiosco para la toma de pedidos de los clientes, a través de una aplicación desarrollada con tecnologías modernas como  [Reactjs](https://reactjs.org/) y [Laravel](https://laravel.com/)

## 🟥 Laravel
* Framework para realizar el backend de la aplicación, en el cual a través de la generación de APIs se integra con la comunicación del Frontend para realizar las funcionalidades con el modelo de negocio de la base de datos. 
> ***🚀 Deploy Backend:***

**1.** Ingresar al directorio del proyecto: **cd laravel-quiosco**

**2.** Instalar las dependencias del framework: **composer install**

**3.** Generar archivo .env a partir del .env.example: **cp .env.example .env**

**4.** Generar llave: **php artisan key:generate**

**5.** Configurar credenciales de base de datos en el archivo **.env**

**6.** Ejecutar las migraciones y seeders: **php artisan migrate:fresh --seed**

**7.** Iniciar el servidor: **php artisan serve**

***



## 🔵 Reactjs
* Librería para generar las interacciones del usuario y realizar los consumos de la API creada con Laravel y gestionar todo el estado de la aplicación. Para este caso se integra Tailwindcss para el manejo de los estilos de aplicación y de los componentes que se tiene.
> ***🚀 Deploy Fronted***

**1.** Ingresar al directorio del proyecto: **cd react-quiosco**

**2.** Instalar las dependencias del framework: **npm install**

**3.** Crear el archivo **.env.local** y asignarle el valor de **VITE_API_URL=servidor-api** ejemplo: **VITE_API_URL=http://localhost:8000**

**4.** - Modo desarrollo: **npm run dev**

**5.** - Modo produccion: **npm run build**


***


> ### 💻 Link del curso
➡[Laravel 9 - Crea Aplicaciones y Sitios Web con PHP 8 y MVC](https://www.udemy.com/course/curso-laravel-crea-aplicaciones-y-sitios-web-con-php-y-mvc/?couponCode=FEB2023)

***

> ### 👨‍💻Sitio oficial: Juan De la torre - Código Con Juan
➡[codigoconjuan.com](https://codigoconjuan.com/)


