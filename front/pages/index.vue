<template>
    <div>
      <section>
        <h2><nuxt-link to="/adocoes">Adoções</nuxt-link></h2>
        <img class="imgsection" src="/components/assets/img/TechPaws1.png" />
      </section>
      <section>
        <h2><nuxt-link to="/doacoes">Nos Ajude</nuxt-link></h2>
        <img class="imgsection" src="/components/assets/img/TechPaws1.png" />
      </section>
      <section>
        <h2><nuxt-link to="/voluntariado">Seja um Voluntário</nuxt-link></h2>
        <img class="imgsection" src="/components/assets/img/TechPaws1.png" />
        <button @click="carregarDados">Carregar Dados</button>
      </section>
    </div>
  </template>
  
  <script>
import { get } from '../src/Api2';

export default {
  methods: {
    async carregarDados() {
      await get('pessoas/todasPessoas');
    },
  },
};
</script>
  
 
  