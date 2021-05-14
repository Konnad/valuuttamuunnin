<script>
  import feedback from './palauteStore';
  import Button from './Button.svelte';
  import { fly } from 'svelte/transition';
  let asiakasPalaute;
  //clear funktio nimensä mukaisesti tyhjentää kutsuttaessa palauteboxin.
  const clear = () => {
    asiakasPalaute = '';
  };
  let naytaKiitokset = false;
  //send funktion ainakin pitäisi tässä lisätä asiakasPalaute palauteStoreen. Samalla palauteboxi tyhjennetään ja näytetään kiitosviesti, joka lähtee kolmen sekunnin kuluttua.
  const send = () => {
    feedback.set({
      asiakasPalaute: asiakasPalaute,
    });
    clear();
    naytaKiitokset = true;
    setTimeout(() => {
      naytaKiitokset = false;
    }, 3000);
  };
</script>

<main>
  <h2>Lähetä palautetta sovelluksesta!</h2>
  <textarea type="textarea" bind:value={asiakasPalaute} rows="10" />
  <div class="palaute">
    <Button type="send" on:click={send}>Lähetä</Button>
    <!--Alla kiitosviesti tulee näkyviin "fly" transitionin kanssa joka kestää 0.1 sekuntia. Se tulee y akselilla ylhäältä alas ja poistuu 0.1 sekunnissa y akselia alas-->
    {#if naytaKiitokset}
      <div
        in:fly={{ duration: 100, y: -50 }}
        out:fly={{ duration: 100, y: 50 }}
      >
        <p>Kiitos palautteesta!</p>
      </div>
    {/if}
  </div>
</main>

<style>
  textarea {
    width: 60%;
  }
</style>
