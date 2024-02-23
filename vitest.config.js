import { defineConfig } from "vite";
import { resolve } from "path";
import { viteSingleFile } from "vite-plugin-singlefile";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
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
        "^~/(.*)$": resolve(__dirname, "./src/$1")
        // Add other path mappings if needed
      }
    }
  }
});
