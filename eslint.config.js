import { defineConfig } from "eslint-define-config";

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",           // если React
    "plugin:@typescript-eslint/recommended", // если TypeScript
    "plugin:prettier/recommended" 
  ],
  parser: "@typescript-eslint/parser",    // для поддержки TS
  parserOptions: {
    ecmaFeatures: {
      jsx: true,                         // если React
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
     "prettier/prettier": "error",// тут можно добавить свои правила ESLint
     "semi": ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});