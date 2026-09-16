import { defineConfig, defaultClientConditions } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { seedDesignPlugin } from '@seed-design/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    seedDesignPlugin({ colorMode: 'light-only' }),
  ],
  resolve: {
    // tsconfig의 seed-design/* 경로 alias 사용
    tsconfigPaths: true,
    // SEED 컴포넌트가 @layer로 감싼 CSS를 쓰도록 함 (Tailwind v4 cascade layer 우선순위)
    conditions: [...defaultClientConditions, 'seed-layered'],
  },
})
