<script lang="ts">
import Home from "./home.svelte"
import About from "./about.svelte"

const pages:any[] = [Home, About]
  let page_index:number = 0
  //let file_name:string = ""

  function change_page(name:string): void{
    if (name == "home"){
        //file_name = file
        page_index = 0
      }
    else if (name == "about"){
        page_index = 1
      }
  }

</script>

<main>
  <ul>
    <li>
      <button on:click={()=>change_page("home")}>Home</button>
    </li>
    <li>
      <button on:click={()=>change_page("about")}>About</button>
    </li>
    <li>
      
    </li>
  </ul>

  <svelte:component 
    this={pages[page_index]}
    {change_page}
  />


</main>

<style>

</style>