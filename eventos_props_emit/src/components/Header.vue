<template>
  <header>
    <nav>
      <button class="active">Home</button>
      <button>Sobre</button>
      <button>Contato</button>
    </nav>
  </header>
</template>


<script>
export default {}
</script>


<style scoped>
header {
  width: 100%;
}

header nav {
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-content: center;
}

header nav button {
  padding: 10px;
  margin: 0 2px;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-weight: 700;
}

header nav button::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: transparent;
  margin-top: 3px;
}

header nav .active::after {
  background: red;
}
</style>