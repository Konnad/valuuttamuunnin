import {readable} from "svelte/store";

const aika = 10;
let countDown = aika;

const ajastin = readable(countDown, (set) => {
  const interval = setInterval(() => {
    set(--countDown);}, 1000);
  return () => {
    clearInterval(interval);
    set(aika);
    countDown = aika;
  };
  });

export default ajastin;

//Tämä on suora kopsu Pizza tehtävän ajastinStoresta. Ajattelin että helpompi kopsata tämä kuin tehdä uudestaan, sillä tuo koodinpätkä on aika sekavan näköinen itselleni :D