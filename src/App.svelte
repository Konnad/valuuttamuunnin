<script>
  import Muunnin from './Muunnin.svelte';
  import Disclaimer from './Disclamer.svelte';
  import Palaute from './Palaute.svelte';

  let showDisclamer = true;
  const suljeDisclamer = () => {
    showDisclamer = false;
  };
</script>

<main>
  <h1><b>Euros (€)</b> to <b>dollars ($)</b> and vice versa!</h1>
  <!--Komponentti luokka on vain sitä varten että saan komponentit hieman irtaalleen toisistaan sovelluksessa.-->
  <div class="komponentti">
    <Muunnin />
  </div>
  {#if showDisclamer}
    <Disclaimer on:sulje={suljeDisclamer} />
  {/if}
  <div class="komponentti">
    <Palaute />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .komponentti {
    margin: 5rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
