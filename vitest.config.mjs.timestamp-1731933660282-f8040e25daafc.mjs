// vitest.config.mjs
import { defineConfig } from "file:///home/bewr/projects/correctiv/faktenforum/backend/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { viteSingleFile } from "file:///home/bewr/projects/correctiv/faktenforum/backend/node_modules/vite-plugin-singlefile/dist/esm/index.js";
import tsconfigPaths from "file:///home/bewr/projects/correctiv/faktenforum/backend/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "/home/bewr/projects/correctiv/faktenforum/backend";
var vitest_config_default = defineConfig({
  plugins: [viteSingleFile(), tsconfigPaths()],
  test: {
    globals: false,
    environment: "node",
    // Collect coverage
    coverage: {
      enabled: true,
      // Add equivalent settings to your Jest coverage configuration
      reporter: ["text", "json", "html"],
      exclude: ["index.ts", "**/node_modules/**", "dist"],
      // Set your threshold
      threshold: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0
      }
    },
    // Test files pattern
    include: ["**/src/**/__tests__/**/*.ts", "**/src/**/?(*.)+(spec|test).ts"],
    // Transform settings
    transformMode: {
      web: [/\.[jt]sx?$/]
    },
    // Module name mapper
    resolve: {
      alias: {
        "^~/(.*)$": resolve(__vite_injected_original_dirname, "./src/$1")
        // Add other path mappings if needed
      }
    }
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iZXdyL3Byb2plY3RzL2NvcnJlY3Rpdi9mYWt0ZW5mb3J1bS9iYWNrZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9iZXdyL3Byb2plY3RzL2NvcnJlY3Rpdi9mYWt0ZW5mb3J1bS9iYWNrZW5kL3ZpdGVzdC5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Jld3IvcHJvamVjdHMvY29ycmVjdGl2L2Zha3RlbmZvcnVtL2JhY2tlbmQvdml0ZXN0LmNvbmZpZy5tanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyB2aXRlU2luZ2xlRmlsZSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zaW5nbGVmaWxlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdml0ZVNpbmdsZUZpbGUoKSwgdHNjb25maWdQYXRocygpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IGZhbHNlLFxuICAgIGVudmlyb25tZW50OiBcIm5vZGVcIixcbiAgICAvLyBDb2xsZWN0IGNvdmVyYWdlXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvLyBBZGQgZXF1aXZhbGVudCBzZXR0aW5ncyB0byB5b3VyIEplc3QgY292ZXJhZ2UgY29uZmlndXJhdGlvblxuICAgICAgcmVwb3J0ZXI6IFtcInRleHRcIiwgXCJqc29uXCIsIFwiaHRtbFwiXSxcbiAgICAgIGV4Y2x1ZGU6IFtcImluZGV4LnRzXCIsIFwiKiovbm9kZV9tb2R1bGVzLyoqXCIsIFwiZGlzdFwiXSxcbiAgICAgIC8vIFNldCB5b3VyIHRocmVzaG9sZFxuICAgICAgdGhyZXNob2xkOiB7XG4gICAgICAgIHN0YXRlbWVudHM6IDAsXG4gICAgICAgIGJyYW5jaGVzOiAwLFxuICAgICAgICBmdW5jdGlvbnM6IDAsXG4gICAgICAgIGxpbmVzOiAwXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBUZXN0IGZpbGVzIHBhdHRlcm5cbiAgICBpbmNsdWRlOiBbXCIqKi9zcmMvKiovX190ZXN0c19fLyoqLyoudHNcIiwgXCIqKi9zcmMvKiovPygqLikrKHNwZWN8dGVzdCkudHNcIl0sXG4gICAgLy8gVHJhbnNmb3JtIHNldHRpbmdzXG4gICAgdHJhbnNmb3JtTW9kZToge1xuICAgICAgd2ViOiBbL1xcLltqdF1zeD8kL11cbiAgICB9LFxuICAgIC8vIE1vZHVsZSBuYW1lIG1hcHBlclxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiXn4vKC4qKSRcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvJDFcIilcbiAgICAgICAgLy8gQWRkIG90aGVyIHBhdGggbWFwcGluZ3MgaWYgbmVlZGVkXG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBb0I7QUFDeFcsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sbUJBQW1CO0FBSDFCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sd0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDM0MsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBO0FBQUEsSUFFYixVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUE7QUFBQSxNQUVULFVBQVUsQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLE1BQ2pDLFNBQVMsQ0FBQyxZQUFZLHNCQUFzQixNQUFNO0FBQUE7QUFBQSxNQUVsRCxXQUFXO0FBQUEsUUFDVCxZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsU0FBUyxDQUFDLCtCQUErQixnQ0FBZ0M7QUFBQTtBQUFBLElBRXpFLGVBQWU7QUFBQSxNQUNiLEtBQUssQ0FBQyxZQUFZO0FBQUEsSUFDcEI7QUFBQTtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsWUFBWSxRQUFRLGtDQUFXLFVBQVU7QUFBQTtBQUFBLE1BRTNDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
