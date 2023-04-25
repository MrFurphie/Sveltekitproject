export async function load({ fetch }) {  
    const caption = 'Specific Shit';
  
    const url = 'https://cataas.com/cat/says/' + caption + '?json=true';
  
    const catReq = await fetch(url);
  
    const catResp = await catReq.json();
  
    
    return {
      catResp
    }
  
  }