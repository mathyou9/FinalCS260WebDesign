<template>
<div id="app">
  <div class="pure-menu pure-menu-horizontal">
    <span class="pure-menu-heading">Memes</span>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">Home</router-link>
      </li>
    </ul>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>
body {
  font-size: 16px;
  padding: 20px 100px 0px 100px;
}

/* Menu */
.pure-menu-disabled,
.pure-menu-heading,
.pure-menu-link {
  padding: .5em 1em .5em 0em;
}

.pure-menu-active>.pure-menu-link,
.pure-menu-link:focus,
.pure-menu-link:hover {
  background-color: inherit;
}

.content {
  margin-top: 20px;
}
</style>
