/**********************************
  CONFIGURE JSON CALL
**********************************/ 

// The API feed
const getStuff = 'https://gist.githubusercontent.com/nikkyhwang/6f97cae89fd64ea1867089e1d007a749/raw/efa96a91da3adcb13b40a7ca34ce0c750478a064/gistfile1.txt';

// Do stuff with returned data
let doStuff = function(data) {

   // How big is array?     
    console.log( data.cards.length );

 
  for ( i=0; i < data.cards.length; i++ ) 
{
  
     const template = `<section id="header"><h1>${data.cards[i].name} </h1> 
     <section id ="body"><img src="${data.cards[i].imageUrl}" alt="">
     <p> <b>Rarity:</b> ${data.cards[i].rarity} </p> 
     <p><b>Type:</b> ${data.cards[i].types}</p> 
    <p><b>Series:</b> ${data.cards[i].series}</p> 
    <p><b>Trading Card Number:</b> ${data.cards[i].number}</p> </section>
    </section>`;

    $('#app').append( template ); 

  } 
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
let showStuff = function(data) {
  
  console.log( data );  
 
}