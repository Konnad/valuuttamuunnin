<script>
  //Nämä ovat 8.5.2021 näiden valuuttojen "erot". 1$ on 0.82€ ja 1€ on 1.22$
  let dollar = 1.22;
  let euro = 0.82;
  //Muuttujat käyttäjän tekemille syötteille.
  let euroInput;
  let dollarInput;
  //Erilliset reaktiiviset muuttujat jotka convertoivat valuutat silloin kun käyttäjä ne sisään näpyttelee. FinalEuro ja FinalDollar muuttaa luvut kahden desimaalin tarkkuuteen.
  $: EuroToDollar = euroInput * dollar;
  $: FinalEuro = EuroToDollar.toFixed(2);
  $: DollarToEuro = dollarInput * euro;
  $: FinalDollar = DollarToEuro.toFixed(2);

  //Alla olevat koodin pätkät validoivat euroInput ja dollarInputin. onkoValid funktio tarkistaa että onko validoitava asia numero, ja jos se on jotain muuta kuin numero niin se palauttaa arvon false
  //clickEuro ja clickDollar funktiot ovat sitä varten että inputtien ympäristö ei ole punainen, ilman että käyttäjä on klikannut sitä
  $: onkoValid = (teksti) => !isNaN(teksti);

  $: validEuro = !onkoValid(euroInput);
  $: validDollar = !onkoValid(dollarInput);

  let click1 = false;

  const clickEuro = () => {
    click1 = true;
    click1 = click1;
  };

  let click2 = false;

  const clickDollar = () => {
    click2 = true;
    click2 = click2;
  };
</script>

<main>
  <div class="Muuntaja">
    Euros <input
      type="text"
      bind:value={euroInput}
      on:blur={clickEuro}
      class:notValid={validEuro && click1}
    />
    <!--Tässä on if lauseke joka määrittelee milloin ns "valmis konversio" näytetään sivulla. Tämä näyttää sen heti kun euroInputin pituus on enemmän kuin 0-->
    {#if euroInput > 0}
      = {FinalEuro} $
    {/if}
    <!--Tässä on taas if lauseke joka katsoo että euroInput ei ole validi, ja sitä input boxia on klikattu kerran. Tällöin ohjelma ilmoittaa että input ei ole validi-->
    {#if validEuro && click1}
      <p class="error">Input cannot be a letter / empty!</p>
    {/if}
  </div>
  <!--Tässä sama kuin yllä-->
  <div class="Muuntaja">
    Dollars <input
      type="text"
      bind:value={dollarInput}
      on:blur={clickDollar}
      class:notValid={validDollar && click2}
    />

    {#if DollarToEuro > 0}
      = {FinalDollar} €
    {/if}
    {#if validDollar && click2}
      <p class="error">Input cannot be a letter / empty!</p>
    {/if}
  </div>
</main>

<style>
  .Muuntaja {
    margin: 1rem;
  }

  .notValid {
    border: 1px solid red;
  }

  .error {
    color: red;
    font-weight: bold;
  }
</style>
