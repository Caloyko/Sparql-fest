import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useRef } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { useTheme } from "../ThemeContext";

const ParticlesComponent = (props) => {
  const { isDarkMode } = useTheme();
  const particlesRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.loadOptions({
        particles: {
          color: { value: isDarkMode ? "#FFFFFF" : "#000000" },
          links: { color: isDarkMode ? "#FFFFFF" : "#000000" },
        },
      });
    }
  }, [isDarkMode]);

  return (
    <Particles
      id={props.id}
      init={(container) => (particlesRef.current = container)}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: { onClick: { enable: true, mode: "repulse" }, onHover: { enable: true, mode: "grab" } },
          modes: { push: { distance: 200, duration: 15 }, grab: { distance: 150 } },
        },
        particles: {
          color: { value: isDarkMode ? "#FFFFFF" : "#000000" },
          links: { color: isDarkMode ? "#FFFFFF" : "#000000", distance: 150, enable: true, opacity: 0.3, width: 1 },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: false },
          number: { density: { enable: true }, value: 150 },
          opacity: { value: 1.0 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
