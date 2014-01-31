$( document ).ready(function() {

    var img     = "";
    var srcImg  = "";

    function removeElements(){
      //remove a imagem (se tiver) - limpa e oculta a div
      $("#imgUser").remove();
      $("canvas").remove(); //unica forma que encontrei para "limpar" o canvas se o pessoa selecionar outra foto

      $("#imageLoader").hide();
      $("#img-filter").hide(); //Oculta a <div> que empacota o canvas
      $("#btn-share").hide(); //Oculta a <div> que empacota o canvas

      console.log(" Removido: Imagem Original e Imagem com Filtro\n Botao compartilhar ocultado");
    }

    function addProgress(){
      $('#img-filter').hide();
      var progress  = $('<progress>');
      if ( !$("progress").length ){
        $('#img-carregando').append(progress);
      }  

    }

    function removeProgress(){
       $('progress').remove();
       $('#img-filter').show();
    }

      Caman.Event.listen("processStart", function (job) {
        console.log("iniciando:", job.name);
        addProgress();
      });
      
      Caman.Event.listen("renderFinished", function () {
         console.log("Filtro Concluido! \n Botao Compartilhar ativado!");
         $("#btn-share").show();
         removeProgress();
      }); 

  //quando usuario clicar no botao "selecionar imagem"
  $("#getImage").click(function (e) 
  {
        e.preventDefault();

        // WebActivities API FireFox OS
        var pick = new MozActivity({
            name: "pick",
            data: {
                type: ["image/png", "image/jpg", "image/jpeg"]
          }
        });

        pick.onsuccess = function () 
        {   

            srcImg  = window.URL.createObjectURL(this.result.blob);
            img     = $('<img>', {id: 'imgUser', src: srcImg} );
            $("#imageLoader").append(img).show();  

            //Se o canvas nao existir, entao cria!
            var canvasLoader = document.querySelector("#canvasLoader");

            console.log("Canvas criado com as dimensoes da imagem");
            if ( canvasLoader === null )
            {
              canvasLoader     = $('<canvas>', {id: 'canvasLoader'} );
              $('#img-filter').append(canvasLoader);
            } 

            //Coloca o Canvas com o mesmo tamanho da imagem
            canvasLoader.width  = img.width;
            canvasLoader.height = img.height;


            //chama a próxima tela
            $('#view').attr('class','current');
            $('[data-position="current"]').attr('class','left');

            

        };

        pick.onerror = function () 
        { 
            alert("Você não selecionou nenhuma imagem.");
        };
        
    });


    $("#btn-vintage").on('click',function(e){
      e.preventDefault();
        
        Caman("#canvasLoader", srcImg, function () {
            this.reset();
            this.greyscale();
            this.contrast(5);
            this.noise(3);
            this.sepia(100);
            this.channels({
                red: 8,
                blue: 2,
                green: 4
            });
            this.gamma(0.87);
            this.render();
        }); 

    });

    $("#btn-sunrise").on('click',function(e){
        e.preventDefault();
        $("#img-filter").show();
        Caman("#canvasLoader", srcImg, function () {
                this.reset();
                this.sunrise();
                this.render();
        });
    });

     $("#btn-gray").on('click',function(e){
        e.preventDefault();
        Caman("#canvasLoader", srcImg, function () {
                this.reset();
                this.greyscale()
                this.render();
        });
    
    });


      $("#btn-light").on('click',function(e){
        e.preventDefault();
        Caman("#canvasLoader", srcImg, function () {
                this.reset();
                this.brightness(10);
                this.contrast(30);
                this.sepia(60);
                this.saturation(-30);
                this.render();
        });
    
    });


    //Compartilha a imagem com Filtro
    $('#btn-share').on('click', function () {
      var blobCanvas = document.querySelector("#canvasLoader");
      
      if(blobCanvas) {
            // Exportando
            blobCanvas.toBlob(function (blob) {
                var sharingImage = new MozActivity({
                    name: "share",
                    data: {
                        type: "image/*",
                        number: 1,
                        blobs: [blob]
                    }
                });
            });
        }
        else {
            alert("Falha ao carregar imagem para compartilhar");
        }

    });

    //Filtros menu
    $('#btn-filtros-menu').on('click', function () {
      $('#filtros-menu').attr('class','fade-in');
    });

    $('#filtros-menu').on('click', function () {
      $(this).attr('class','fade-out');
    });

    //buttons
      $('#btn-buttons').on('click', function () {
        $('#buttons').attr('class','current');
        $('[data-position="current"]').attr('class','left');
      });

      $('#btn-buttons-back').on('click', function () {
        $('#buttons').attr('class','right');
        $('[data-position="current"]').attr('class','current');
      });


      //Tela View
      $('#btn-view').on('click', function () {
        $('#view').attr('class','current');
        $('[data-position="current"]').attr('class','left');
      });

      $('#btn-view-back').on('click', function () {
        $('#view').attr('class','right');
        $('[data-position="current"]').attr('class','current');
        removeElements();
      });


});