<script lang="ts">
import Home from "./home.svelte"
import About from "./about.svelte"
import Projects from "./projects.svelte"

const pages:any[] = [Home, About, Projects]
  let page_index:number = 0
  //let file_name:string = ""

  function change_page(name:string): void{
    page_index = {"home":0,"about":1,"projects":2}[name]
  }

</script>

<main>
  <div class="navbar">
    <li style="display:block; margin-right: auto;">
      <button on:click={()=>change_page("home")} >Home</button>
    </li>
    <li>
      <button on:click={()=>change_page("about")}>About</button>
    </li>
    <li>
      <button on:click={()=>change_page("projects")}>Projects</button>
    </li>
  </div>

  <svelte:component 
    this={pages[page_index]}
    {change_page}
  />


</main>

<style>
.navbar {
  list-style: none;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0;
  
}
</style>