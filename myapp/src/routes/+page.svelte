

<script>
	export let data;


	
</script>


    {#if data.recipies && data.recipies.length} 

{#each data.recipies as recipie}
			
			<a href="/recipie/{recipie.slug.current}">

				<div class="foodCard">
					<img class="coverimage" src="{recipie.coverimageUrl}" alt="">
						<div class="information">

                            <h3>hei</h3>

						<h2>{recipie.recipieTitle}</h2>
					<div class="icons">
						<div class="icon levels_header">
							<h5>Nivå</h5>
							<div class="levels">
								<div class="level">
									<h5>{recipie.level}</h5>
								</div>
							</div>
						</div>
						<div class="icon">
							<h5>Total</h5>
							<h5>{recipie.total}</h5>
						</div>
						<div class="icon">
							<h5>Aktiv</h5>
							<h5>{recipie.active}</h5>

						</div>
					</div>	


					</div>
					
				</div>	
			</a>
			{/each}
		<!-- </ul> -->
		{:else}
        <p>No recipies found.</p>
		{/if}