<script>
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';
  //Alla oleva import komento importtaa ajastimen ajastin storesta. Tämä on lähes suoraan leikkaa-liimaa-askartele tyylillä napattu pizza tehtävän sovelluksesta.
  import ajastin from './sulkuStore';
  const dispatch = createEventDispatcher();
  const sulje = () => dispatch('sulje');
  //if lause joka suorittaa sulje funktionin ja dispatchaa "sulje" viestin app.svelteen.
  $: if ($ajastin <= 0) {
    sulje();
  }
</script>

<Modal>
  <div slot="header">
    <h1>DISCLAMER</h1>
  </div>

  <div>
    <img src="./pics/omakuva.jpg" alt="omakuva" />
    <p>
      Tämä projekti on <b>Janne Matelan (AA4110)</b> frontend perusteet lopputyö.
    </p>
    <p>
      Projektissa on asioita mitkä eivät välttämättä ole käytännöllisiä, taikka
      tarpeellisia. Asiat ovat vain osaamiseni todistamista varten
    </p>

    <h2>Tämä ikkuna sulkeutuu automaattisesti {$ajastin} sekunnin kuluttua</h2>
  </div>

  <div slot="footer">
    <Button on:click={sulje} id="sulje">Sulje</Button>
  </div>
</Modal>

<style>
  img {
    max-width: 10rem;
    max-height: 10rem;
    float: right;
    margin: 10px;
  }
</style>
