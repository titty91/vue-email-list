// GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e
// stamparli in pagina all'interno di una lista.

function init(){

  for (var i = 0; i < 10; i++) { // per averne 1o vedo fare 10 chiamate
    getEmail();
  }

}

function getEmail(){ //ne richiede solo 1
  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/random/mail',
    methods:'GET', //metodo per prelevare i dati
    // diamo gli eintrambi i risultati positivo
    success: function(dati){

      // console.log(dati);
      // console.log(dati.response);
      $('#target').append('<li>' + dati.response + '</li>');
    },
    // negativo
    error: function(){
      console.log('errore');
    }
  })
}

init();
