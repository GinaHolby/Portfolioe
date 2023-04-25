<script>
  export let data;

  import "./project.css";

  import Figma from "../../../assets/icons/Figma.svelte";
  import Internet from "../../../assets/icons/Internet.svelte";

</script>

<header>
  <a class="h" href="/">
    <h1 class="herotext">Gina Holby</h1>
    <h3 class="subherotext">UX-designer</h3>
  </a>
</header>

<main>
  {#each data.recipies as project}
    <img class=" coverimage" src={project.cover} alt="" />

    <div class="information">
      <div class="title">
        <h1>
          {project.projectTitle}
        </h1>
      </div>

      <h3>{project.shortProjectDescription}</h3>

      <div class="ikoner">
        <a class={project.figmalink} href={project.figmalink} target="_blank">
          <div class="figma-logo"> <Figma /></div>
            
        </a>
        
        <a class={project.hidenettsidelink} href={project.nettsidelink} target="_blank">
          <div class="figma-logo"> <Internet /></div>
        </a>

        

        
      </div>

      <div class="text">
        <h2>Oppgave:</h2>

        <h3>{project.problemDescriptions}</h3>

        <h2>Lengde:</h2>
        <h3>{project.length}</h3>

        <h2>Løsning:</h2>
        <h3>{project.solutionDescription}</h3>
      </div>
    </div>
  {/each}
</main>

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 12px;
    background-color: pink;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .h {
    position: relative;
  }
  .herotext {
    font-family: "Allura", cursive;
    font-size: 40px;
  }
  .subherotext {
    font-family: "Fauna One", serif;
    position: absolute;
    left: 30px;
    top: 33px;
    font-size: 12px;
    width: 100%;
  }
</style>
