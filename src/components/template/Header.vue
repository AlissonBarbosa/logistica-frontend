<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    hideToggle: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-double-left" : "fa-angle-double-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
};
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, rgba(249,250,244,1) 0%, rgba(196,210,116,1) 100%);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
      font-size: 1.2rem;
      color: #333;
      font-weight: 100;
      flex-grow: 1;
      text-align: center;
    }

    .title a {
      color: #333;
      text-decoration: none;
    }

    header.header > a.toggle {
      width: 60px;
      height: 100%;
      color: #333;
      justify-self: flex-start;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    header.header > a.toggle:hover {
      background-color: #DDD;
    }
</style>
