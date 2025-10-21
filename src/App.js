import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PALETA = {
  azulMarino: "#1B263B",
  azulCelesteApagado: "#68BBA4",
  celestePetroleo: "#69A5B1",
  grisAzulado: "#838A9C",
  grisCemento: "#D1D5D8",
  blancoFrio: "#F5F8FA",
  amarilloOro: "#D3A748",
  negro: "#000000",
  verdeAprobado: "#4ee89a",
  rojoRechazado: "#D32F2F",
};

export default function App() {
  const [estado, setEstado] = useState("pendiente"); // pendiente | aprobado | rechazado
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const mensajes = {
    pendiente: {
      titulo: "Vínculo pendiente de aprobación",
      texto:
        "Vínculo con Olivia en proceso de evaluación por el Ministerio de Vínculos.",
      color: PALETA.negro,
    },
    aprobado: {
      titulo: "Vínculo aprobado ✅",
      texto:
        "Vínculo con Félix Galeano aprobado por el Ministerio de Vínculos.",
      color: PALETA.verdeAprobado,
    },
    rechazado: {
      titulo: "Estado de vínculo con Olivia = CRÍTICO ❌",
      texto: "Solicitud rechazada por el Ministerio de Vínculos.",
      color: PALETA.rojoRechazado,
    },
  };

  if (showIntro) {
    return (
      <div
        style={{
          backgroundColor: PALETA.azulMarino,
          color: PALETA.blancoFrio,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Montserrat, sans-serif",
          flexDirection: "column",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "2.5rem", textAlign: "center" }}
        >
          Bienvenido al Ministerio de Vínculos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ marginTop: 16, color: PALETA.celestePetroleo }}
        >
          Cargando estado de los vínculos...
        </motion.p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: PALETA.azulMarino,
        color: PALETA.blancoFrio,
        minHeight: "100vh",
        fontFamily: "Montserrat, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: `2px solid ${PALETA.grisAzulado}`,
        }}
      >
        <div>
          <h1 style={{ margin: 0, color: PALETA.azulCelesteApagado }}>
            Ministerio de Vínculos
          </h1>
          <small style={{ color: PALETA.celestePetroleo }}>
            Estado Argentino
          </small>
        </div>
        {/* Bandera Argentina */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              backgroundColor: "#75AADB",
              width: 60,
              height: 12,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              backgroundColor: "#F5F8FA",
              width: 60,
              height: 12,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              backgroundColor: "#75AADB",
              width: 60,
              height: 12,
              borderRadius: 2,
            }}
          />
        </div>
      </header>

      {/* Main */}
      <main
        style={{
          flex: 1,
          display: "flex",
          padding: 24,
        }}
      >
        {/* Panel fijo de estados */}
        <aside
          style={{
            width: 200,
            backgroundColor: PALETA.grisCemento,
            borderRadius: 12,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <h3 style={{ color: PALETA.azulCelesteApagado, marginBottom: 8 }}>
            Control de vínculos
          </h3>
          {["pendiente", "aprobado", "rechazado"].map((e) => (
            <motion.div
              key={e}
              style={{
                backgroundColor:
                  estado === e ? mensajes[e].color : PALETA.grisAzulado,
                color: estado === e ? PALETA.blancoFrio : PALETA.blancoFrio,
                padding: "10px",
                borderRadius: 8,
                textAlign: "center",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEstado(e)}
            >
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </motion.div>
          ))}
        </aside>

        {/* Contenido */}
        <section
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: PALETA.grisAzulado,
              borderRadius: 12,
              padding: 36,
              textAlign: "center",
              maxWidth: 500,
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ color: mensajes[estado].color, fontSize: "2rem" }}>
              {mensajes[estado].titulo}
            </h2>
            <p style={{ color: PALETA.negro, marginTop: 12 }}>
              {mensajes[estado].texto}
            </p>
          </motion.div>
        </section>
      </main>

      <footer
        style={{
          padding: 12,
          textAlign: "center",
          borderTop: `1px solid ${PALETA.grisAzulado}`,
          color: PALETA.celestePetroleo,
        }}
      >
        Ministerio de Vínculos · Demo
      </footer>
    </div>
  );
}
