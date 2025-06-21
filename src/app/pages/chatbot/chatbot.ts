/* ¿CÓMO FUNCIONA ESTE ARCHIVO? 

Este archivo se encarga de enviar los mensajes de forma visual, guarda los mensajes desde el input que escribe el usuario
y los manda usando el método POST al backend que interactúa con la API para generar la respuesta.

*/

// AfterViewInit: para ejecutar código cuando el HTML ya está cargado en pantalla.
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})

export class Chatbot implements AfterViewInit {

  // Método para cuando el componente ya ha cargado su HTML
  ngAfterViewInit() {

    // Elementos en el HTML
    const caja = document.getElementById("chat-mensajes")!;
    const mensaje = document.getElementById("input-mensaje") as HTMLInputElement;
    const enviar = document.getElementById("boton-enviar")!;

    // Función al enviar un mensaje
    const sendMessage = async () => {
      const mensajeUsuario = mensaje.value.trim();
      if (!mensajeUsuario) return;

      // Añade el mensaje y limpia el input
      appendMessage("Tú", mensajeUsuario);
      mensaje.value = "";

      try {
        // Llama al backend para enviar el mensaje
        const response = await fetch("http://localhost:3001/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: mensajeUsuario }), // Aquí se envía
        });

        const data = await response.json(); // Recibimos la respuesta

        // Se muestra la respuesta
        appendMessage("IA", data.reply);
        
        // Error por si falla la API (por consola y al usuario)
      } catch (error) {
        console.error("Error en la solicitud:", error);
        appendMessage("IA", "Error al obtener respuesta...");
      }
    };

    // Este evento se usa para añadir mensajes visualmente al chat
    const appendMessage = (sender: string, message: string) => {
      const mensajeCreado = document.createElement("p"); // Crea un párrafo
      mensajeCreado.innerHTML = `<strong>${sender}:</strong> ${message}<br><hr>`; // Prepara el HTML
      caja.appendChild(mensajeCreado); // Lo muestra
      caja.scrollTop = caja.scrollHeight; // Cuando ya se necesita hacer scroll en la conversación, se hace automático
    };

    // Este evento salta al pulsar el botón de envío
    enviar.addEventListener("click", sendMessage);
    mensaje.addEventListener("keypress", (event) => {
      // Esto es para que también funcione con la opción Enter del teclado!!
      if ((event as KeyboardEvent).key === "Enter") {
        sendMessage();
      }
    });
  }
}