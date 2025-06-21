/**
 * 
 * TODOS LOS COMENTARIOS DE ESTE ARCHIVO HAN SIDO GENERADOS POR IA
 * 
 * ============================================ EXPLICACIÓN GENERAL ============================================
 * 
 * Este archivo crea un servidor en Node.js usando el framework Express.
 * Su función es recibir mensajes del usuario desde el frontend, enviarlos a la API de Groq y devolver la respuesta.
 *
 * TECNOLOGÍAS / MÓDULOS USADOS:
 * 
 * - express: Framework para crear servidores web de forma rápida y sencilla.
 * - cors: Middleware que permite que el frontend y backend se comuniquen aunque estén en distintos puertos o dominios.
 * - dotenv: Permite cargar variables privadas desde un archivo `.env`, como la API key, para mayor seguridad.
 * - node-fetch: Librería para hacer peticiones HTTP desde el backend.
 * - fs: Módulo nativo de Node.js para trabajar con archivos (leer texto, etc).
 * 
 * CONCEPTOS CLAVE:
 * 
 * ▸ Middleware:
 *   Son funciones intermedias que se ejecutan entre que el servidor recibe una solicitud y envía la respuesta. Por ejemplo:
 *   - `cors()` permite el acceso entre dominios.
 *   - `express.json()` convierte automáticamente el cuerpo de la petición
 *     (body) en un objeto JSON que podemos leer fácilmente en `req.body`.
 * 
 * ▸ Método POST:
 *   Se usa para enviar datos desde el cliente al servidor. En este caso, el cliente envía el mensaje del usuario en una petición POST.
 * 
 * ▸ JSON:
 *   Es un formato de datos ligero que usamos para intercambiar información. En este servidor, todo se comunica en formato JSON.
 * 
 * ============================================================================================================
 */


// Importar módulos
import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';

// Cargar variables de .env
dotenv.config();
// Crear app de express
const app = express();
// Definir puerto desde el .env o, por defecto, el 3000
const PORT = process.env.PORT || 3000;
// Leer archivo de instrucciones del chatbot
const instruccionesChat = fs.readFileSync('./instrucciones.txt', 'utf-8');

// Middleware para permitir cors
app.use(cors());
// Middleware para aceptar JSON en las peticiones
app.use(express.json());

// Ruta POST para recibir mensajes del frontend
app.post('/api/chat', async (req, res) => {
    const { message } = req.body; // Extraemos el mensaje del cuerpo de la petición

    // Validamos que haya mensaje
    if (!message) {
        return res.status(400).json({ error: 'El mensaje es requerido' });
    }

    try {
        // Hacemos la petición a la API de Groq
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                // Usamos la API key guardada en .env
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant', // Modelo utilizado
                messages: [
                    {
                        role: 'system',
                        content: instruccionesChat // Instrucciones del sistema (límites de conversación)
                    },
                    {
                        role: 'user',
                        content: message // Mensaje del usuario
                    }
                ]
            })
        });

        // Si hay un error en la respuesta (por ejemplo, mala API key)
        if (!response.ok) {
            const errorText = await response.text(); // Intentamos leer el error como texto
            console.error('Respuesta de la API con error:\n', errorText); // Lo mostramos en consola
            return res.status(500).json({ error: 'Error desde la API Groq', detalle: errorText });
        }

        // Convertimos la respuesta a JSON
        const data = await response.json();

        // Devolvemos la respuesta al frontend
        res.json({ reply: data.choices?.[0]?.message?.content || "No se obtuvo respuesta" });

    } catch (error) {
        // Si hay algún error en todo el proceso, lo capturamos aquí
        console.error('Error en la solicitud:', error.message || error);
        res.status(500).json({ error: 'Error al procesar la solicitud', detalle: error.message || error });
    }
});

// Arrancamos el servidor y mostramos un mensaje en consola
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});