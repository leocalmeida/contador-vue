<template>
  <div className="container">
    <div className="numero">
      <h1>{{ valor }}</h1>
    </div>

    <div className="botoes">
      <input type="button" value="+" v-on:click="handleIncrease" />
      <input
        className="input-ml"
        type="button"
        value="-"
        v-on:click="handleDecrease"
      />
      <input
        className="input-ml"
        type="button"
        value="Reset"
        v-on:click="handleReset"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contador",
  methods: {
    handleIncrease: function () {
      if (this.valor >= 99) {
        this.valor = 0;
      } else {
        this.valor++;
      }
      return this.valor;
    },
    handleDecrease: function () {
      if (this.valor <= 0) {
        this.valor = 0;
      } else {
        this.valor--;
      }
      return this.valor;
    },
    handleReset: function () {
      return (this.valor = 0);
    },
  },
  data: function () {
    return {
      valor: 0,
    };
  },
};
</script>

<style  scoped>
@import "../styles/Contador.css";
</style>