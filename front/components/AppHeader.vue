<template>
    <div id="nav">
      <img class="icone_logo" src="/components/assets/img/TechPaws1.png" />
      <nuxt-link to="/" class="linkheader">Home</nuxt-link>
      <nuxt-link to="/sobre" class="linkheader">Sobre</nuxt-link>
      <nuxt-link to="/adocoes" class="linkheader">Adoções</nuxt-link>
      <nuxt-link to="/doacoes" class="linkheader">Doações</nuxt-link>
      <nuxt-link to="/voluntariado" class="linkheader">Voluntariado</nuxt-link>
      <nuxt-link to="/perfil" class="linkheader">
        <img class="icone_user" src="/components/assets/img/perfil.svg" />
      </nuxt-link>
      <button class="openbtn linkdesktop btnsidebar" @click="toggleMenu">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-if="menuOpen">&times;</span>
    </button>      
    <div id="menu" :class="{ open: menuOpen }">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/sobre">Sobre</nuxt-link>
        <nuxt-link to="/adocoes">Adoções</nuxt-link>
        <nuxt-link to="/doacoes">Doações</nuxt-link>
        <nuxt-link to="/voluntariado">Voluntariado</nuxt-link>
        <nuxt-link to="/perfil">Perfil</nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Estado inicial do menu
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      
      // Manipulação direta do DOM
      const menu = document.getElementById("menu");
      const openbtn = document.querySelector(".openbtn");

      if (this.menuOpen) {
        menu.style.width = "150px";
        openbtn.classList.add("open");
        openbtn.innerHTML = "&times;";
      } else {
        menu.style.width = "0";
        openbtn.classList.remove("open");
        openbtn.innerHTML = "&#9776;";
      }
    },
  },
}
</script>
  
  

  