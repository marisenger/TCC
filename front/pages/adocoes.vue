<template>
    <div>
<section>
    <header>
        <h2>Pets Disponíveis para Adoção</h2>
    </header>
    <ul class="pAdocoes">
        <li>
            <div>
                <div class="name">Nome: Fido </div>
                <div class="idade">Idade: 2 anos</div>
                <div class="raca">Descrição: Um cão amigável e cheio de energia, adora brincar e é ótimo com crianças.</div>
            </div>
        </li>
        <li>
            Nome: Bella <br>
            Idade: 3 anos <br>
            Descrição: Uma gata carinhosa que adora um bom colo e é muito tranquila.
        </li>
        <li>
            Nome: Max <br>
            Idade: 1 ano <br>
            Descrição: Um cachorro jovem e ativo que precisa de um lar com espaço para correr e brincar.
        </li>
    </ul>
    <button @click="carregarDados">Carregar Dados</button>
</section>
    </div>
</template>
<script>
import { get } from '../src/Api2';

export default {
  data() {
    return {
      animais: [], // Array para armazenar os dados dos animais
    };
  },
  methods: {
    async carregarDados() {
      try {
        const result = await get('animais');
        
        if (Array.isArray(result)) {
          this.animais = result;
        } else if (result && Array.isArray(result.animais)) {
          this.animais = result.animais;
        } else {
          console.error('Formato inesperado dos dados:', result);
        }

      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },
  },
};
</script>

