<script>
  export let name;
  import { Button } from '@bojalelabs/headless-svelte-ui'
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<h1>Hello {name}!</h1>
<Button>Playground Button</Button>