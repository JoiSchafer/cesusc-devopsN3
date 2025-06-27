import eslintJs from '@eslint/js'

export default [
  {
    // Configuração base para todos os arquivos JS
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    plugins: {
      js: eslintJs
    },
    rules: {
      ...eslintJs.configs.recommended.rules
    }
  },
  {
    // Configuração específica para arquivos de teste
    files: ['**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        test: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly'
      }
    }
  }
]
