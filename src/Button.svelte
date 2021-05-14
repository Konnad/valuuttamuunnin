<script>
  export let disabled = false;
  export let type = 'button';
  export let id;
</script>

<button {type} {id} {disabled} on:click><slot /></button>

<style>
  button {
    background-color: #ff3e00;
    box-shadow: 3px 3px 5px #cccccc;
    padding: 0.5em 2em;
    border: 1px solid #888888;
    color: white;
  }

  button:hover {
    border: 1px solid white;
    box-shadow: 2px 2px 3px #cccccc;
  }

  button:disabled {
    background-color: #ccc;
  }
</style>
