<script>
  import firebase, { app, loggedIn$ } from '../firebase';

  const logIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(authProvider);
  };
  const logOut = async () => {
    await firebase.auth().signOut();
  };
</script>

<nav>
  <ul>
    <li>
      {#if $loggedIn$}
        <button on:click="{logOut}">Log Out</button>
      {:else}
        <button on:click="{logIn}">Log In</button>
      {/if}
    </li>
  </ul>
</nav>

<style lang="scss">
  @import '../prestyled/style/_variables.scss';
  nav {
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: $colors-white;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
