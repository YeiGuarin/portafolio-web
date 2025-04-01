"use client"; // 

import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <section className="w-full max-w-4xl p-6 bg-transparent shadow-md mt-6 relative z-10 flex items-center">
            <div className="text-justify flex-1">
              <h2 className="text-2xl font-semibold">Sobre Mí</h2>
              <p className="mt-2">
                Soy Ingeniera en Sistemas y Computación con experiencia en desarrollo de software utilizando <strong>Java, Python y C#</strong>, y competente en la gestión de bases de datos <strong>SQL/MySQL</strong>. Además, poseo conocimientos en arquitecturas de software, programación orientada a objetos, prácticas de código limpio y principios de diseño <strong>SOLID</strong>.
              </p>
              <p className="mt-2">
                Demuestro un fuerte compromiso con el aprendizaje continuo y el crecimiento técnico, con un enfoque en la entrega de soluciones eficientes y escalables. Me apasiona enfrentar desafíos técnicos y diseñar soluciones innovadoras que optimicen el rendimiento y la eficiencia de las aplicaciones.
              </p>
            </div>
            <img 
              src="/FotoPerfil.jpeg" 
              alt="Mi foto" 
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 shadow-lg ml-6"
            />
          </section>
        );
      case "projects":
        return (
          <section className="w-full max-w-4xl p-6 bg-transparent shadow-md mt-6 relative z-10">
            <h2 className="text-2xl font-semibold">Proyectos</h2>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="md:w-2/3 text-justify"> {/* Texto justificado aquí */}
                <h3 className="text-xl font-semibold">Automatización IoT con MicroPython y MQTT</h3>
                <p className="mt-2">
                  Desarrollé un sistema IoT para controlar dispositivos de manera remota utilizando <strong>MicroPython</strong> en un microcontrolador ESP32. El sistema se comunica a través del protocolo <strong>MQTT</strong>, permitiendo la interacción en tiempo real con un bot de Telegram para enviar comandos y recibir respuestas.
                </p>
                <p className="mt-2">
                  Implementé una arquitectura <strong>publicador-suscriptor</strong> para garantizar una comunicación eficiente y escalable. Además, integré una base de datos <strong>PostgreSQL</strong> para almacenar registros de actividad y facilitar el monitoreo y análisis de datos.
                </p>
                <p className="mt-2">
                  Este proyecto demostró mi capacidad para integrar hardware y software, así como mi habilidad para diseñar soluciones robustas y escalables en el ámbito de IoT.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center items-center">
                <video controls className="w-full h-auto max-w-full rounded-lg shadow-lg">
                  <source src="/videoProyectoIoT.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </div>
          </section>
        );
      case "contributions":
        return (
          <section className="w-full max-w-4xl p-6 bg-transparent shadow-md mt-6 relative z-10 text-justify">
            <h2 className="text-2xl font-semibold">Impactos y Contribuciones</h2>
            <p className="mt-2">
              <strong>El Impacto Social de la Programación en la Educación Infantil</strong>
            </p>
            <p className="mt-2">
              En un mundo cada vez más digitalizado, la programación se ha convertido en una habilidad fundamental que no solo impulsa la innovación tecnológica, sino que también desarrolla el pensamiento lógico y la capacidad de resolución de problemas desde una edad temprana. Enseñar a los niños a programar no solo los prepara para el futuro laboral, sino que también fomenta su creatividad y les brinda herramientas para comprender mejor el entorno tecnológico que los rodea.
            </p>
            <p className="mt-2">
              Un ejemplo cercano y personal de este impacto es el caso de mi hijo, quien a sus 10 años ha desarrollado ya dos videojuegos utilizando Scratch. Desde pequeño, he buscado inculcarle el gusto por la programación, no solo como una herramienta técnica, sino como una forma de expresión y desarrollo intelectual. A través de la creación de sus propios juegos, ha aprendido conceptos esenciales de lógica, matemáticas y diseño, además de fortalecer habilidades como la paciencia y la perseverancia.
            </p>
            <p className="mt-2">
              Este tipo de aprendizaje temprano no solo beneficia a los niños a nivel individual, sino que también tiene un impacto social significativo. Un niño que aprende a programar desde pequeño desarrolla una mentalidad innovadora y resolutiva, cualidades esenciales en un mundo en constante cambio. Además, la programación promueve la inclusión, al permitir que cualquier persona con acceso a una computadora pueda crear y compartir sus ideas con el mundo.
            </p>
            <p className="mt-2">
              Fomentar la enseñanza de la programación desde la infancia es una inversión en el futuro. No se trata solo de formar futuros desarrolladores de software, sino de preparar a ciudadanos capaces de entender y transformar la tecnología en beneficio de la sociedad. Al compartir mi experiencia con mi hijo, espero inspirar a más padres y educadores a acercar a los niños a este fascinante mundo, donde las posibilidades son infinitas y el impacto puede ser trascendental.
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Juliana Guarin | Desarrolladora de Software</title>
        <meta name="description" content="Portafolio profesional" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black relative">
        <div className="absolute inset-0 bg-[url('/Fondo_PortafolioWeb.jpg')] bg-cover bg-center opacity-50"></div>
        <header className="w-full p-6 bg-transparent shadow-md relative z-10">
          <h1 className="text-3xl font-bold text-center">Juliana Guarin | Desarrolladora de Software</h1>
          <nav className="flex justify-center mt-4">
            <button 
              className={`mx-4 px-4 py-2 ${activeSection === "about" ? "bg-gray-600 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveSection("about")}
            >
              Sobre Mí
            </button>
            <button 
              className={`mx-4 px-4 py-2 ${activeSection === "projects" ? "bg-gray-600 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveSection("projects")}
            >
              Proyectos
            </button>
            <button 
              className={`mx-4 px-4 py-2 ${activeSection === "contributions" ? "bg-gray-600 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveSection("contributions")}
            >
              Impactos y Contribuciones
            </button>
          </nav>
        </header>
        {renderSection()}
        <section className="w-full max-w-4xl p-6 bg-transparent shadow-md mt-6 relative z-10 text-justify">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p className="mt-2">Puedes contactarme en <a href="mailto:YeimyJ.Guarin@gmail.com" className="text-blue-400">YeimyJ.Guarin@gmail.com</a></p>
        </section>
      </main>
    </>
  );
}