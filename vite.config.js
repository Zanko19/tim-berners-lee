// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration spécifique au développement
  server: {
    port: 3000, // Le port sur lequel votre serveur de développement sera exécuté
  },
  
  // Configuration spécifique à la production (pour la génération du build)
  build: {
    outDir: 'dist', // Le répertoire de sortie pour les fichiers de production générés
    // Autres options de configuration de production ici...
  },
  
  // Autres options de configuration de Vite, plugins, etc.
  // Par exemple, si vous utilisez Vue.js :
  plugins: [
    // vue(),
    // Autres plugins ici...
  ],
});
