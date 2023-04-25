<script>
  import { add_attribute } from 'svelte/internal';
  export let data;
  const {catResp} = data;
  console.log(catResp);
</script>
<button onclick="window.location.href = '/';" style="height:20px;width=20px">Home</button>
<article>
  <h2>Here you go!</h2>
  <img src="https://cataas.com/{catResp.url}" alt="">
  <p>File type: {catResp.mimetype}</p>

</article>


<style>
  article {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 50%;
    height: auto;
  }
</style>