# 🎨 Proyecto Chatbot sobre Colores (Angular + Node.js)

Este proyecto es un chatbot creado con **Angular** (frontend) y **Node.js + Express** (backend). El chatbot utiliza la **API de Groq** (modelo `llama-3.1-8b-instant`) y está especializado en **responder únicamente sobre temas relacionados con el color**: significados, combinaciones, psicología del color, armonías cromáticas, etc.

> El tema de especialización puede modificarse fácilmente editando el archivo `instrucciones.txt` ubicado en `server/instrucciones.txt`.

---

## 🚀 Tecnologías utilizadas

- 🎨 Frontend: Angular
- 🧠 Backend: Node.js + Express
- 🤖 API utilizada: Groq
- 🔐 Variables de entorno: `.env` (no se sube al repo)

---

## 🔐 Clave API y archivo `.env`

El archivo `.env` **no está incluido en el repositorio** por seguridad. Debes crearlo tú misma para que el chatbot funcione.

### ¿Cómo conseguir una API Key de Groq?
1. Ve a 👉 [https://console.groq.com/keys](https://console.groq.com/keys)
2. Regístrate o inicia sesión
3. Crea una nueva clave
4. Cópiala y guárdala en un archivo llamado `.env` dentro de la carpeta `server/`

Tu archivo .env debe verse así:
GROQ_API_KEY='Tu clave'
PORT=3001

---

## Ejecutar el proyecto localmente
Antes de ejecutar este proyecto se deben instalar algunas cosas:
- Instalar Node.JS -> https://nodejs.org/es
- Instalar Angular CLI -> npm install -g @angular/cli
- Instalar dependencias desde la raíz del proyecto -> npm install

Y para asegurar, aunque con npm install ya deberían estar:
- npm install express cors dotenv node-fetch

Ahora, para ejecutar el proyecto se debe hacer en dos pasos:
1. Ejecutar backend:
  - cd server
  - node server.js
2. Ejecutar frontend:
  - ng serve

Para ver el proyecto sigue el link que aparece después de ejecutar el frontend, se abrirá en tu navegador.

---

Desarrollado por Claudia Candelas.