	_TRACE("BasilicataEventi.js ------->");
	// define default marker style for layers
	var MapParam = {
		"default":
			{
			"thumbnailRoot" : "resources/images/tn/",
			"markerImageRoot" : "resources/icons/map-icons-collection/numeric/orange",
			"markerImageType" : "png"
			}
		,
		"noItemText" : "<span style=\"color:#888\">lista vuota <br>"+
					   "aggiungi un layer via <a href='javascript:$(\"#add-pill\").click()'><span style=\"font-weight:bold;border:solid #ddd 1px;padding:2px;\">&nbsp;+ add&nbsp;</span></a><br><br>"
		,
		"layerdialog" :{"href":"All_layer_sidebar.html"}
		,
		"layerbar" :{"href":"BasilicataEventi_topbar.html"}
		,
		"layertab" :{"href":"All_layer_sidebar.html"}
		,
		"layer" :{"href":"BasilicataEventi_layer.html"}
		,
		"layers": []

	};

	__init = function(){

		maptune.addFeedLayer('./data/collection.js',{
			type:'data',
			format:'json',
			name:'Collection',
			flag:'collapsed'});

		maptune.addFeedLayer('http://goo.gl/Fo9jnt',{
			type:'csv',
			format:'csv',
			flag:'closed|noinfo|zoomto',
			title:'Eventi Condivisi',
			parser: 
				{
				title: 'Nome evento',
				lat:   'lat',
				lon:   'lng',
				timeStart: 'Data inizio',
				timeEnd:  'Data fine',
				timeParse: function(value){var dateA = value.split(' ')[0].split('\/');return new Date(dateA[2],dateA[1]-1,dateA[0]);},
				label: 'true',
                info: 'Organizzatore|Note|Pagamento|Tipologia|Data inizio|Data fine|Luogo|Link|Email_contatto|Link_immagine ',
				image:'Link_immagine'	
				},
			layer:{	name:'Eventi Condivisi',
				    description: '<div id="infodiv" style="margin-top:-10px;color:#444;">Eventi OpenData in collaborazione con Comitato Matera 2019 Mappa collegata a <a href="http://dati.comune.matera.it/dataset/eventi-condivisi" target="_blank"><b>questo dataset</b></a> del portale OpenData del Comune, aggiornato dalla cittadinanza | <a href="http://goo.gl/Kzdu0g" target="_blank"><b>ELENCO</b></a> | <a href="http://goo.gl/Fo9jnt" target="_blank"><b>CSV</b></a> | Pin CC BY-SA <a href="http://mapicons.nicolasmollet.com/"><b>Mapicons</b></a></div>',
					markerType : 'categorical',
					sort	   : 'timeUp',		
					category   : 'Tipologia', 
					categoryList: { 
							  Musica			: { 'markerImage' : 'resources/icons/map-icons-collection/music_classical.png',
													'smallImage' :  'resources/icons/default/default-small_violet.png'
												  },
							  Teatro			: { 'markerImage' : 'resources/icons/map-icons-collection/theater.png',
													'smallImage' : 'resources/icons/default/default-small_violet.png'
												  },
							  Danza				: { 'markerImage' : 'resources/icons/map-icons-collection/theater.png',
													'smallImage' : 'resources/icons/default/default-small_violet.png'
												  },
							  Sport				: { 'markerImage' : 'resources/icons/map-icons-collection/indoor-arena.png',
													'smallImage' : 'resources/icons/default/default-small_orange.png'
												  },
							  Mostre			: { 'markerImage' : 'resources/icons/map-icons-collection/museum_art.png',
													'smallImage' : 'resources/icons/default/default-small_violet.png'
												  },
							  Cinema			: { 'markerImage' : 'resources/icons/map-icons-collection/cinema.png',
													'smallImage' : 'resources/icons/default/default-small_violet.png'
												  },
							  Tradizione		: { 'markerImage' : 'resources/icons/map-icons-collection/farmstand.png',
													'smallImage' : 'resources/icons/default/default-small_violet.png'
												  },
							  'Altri eventi'	: { 'markerImage' : 'resources/icons/map-icons-collection/departmentstore.png',
													'smallImage' : 'resources/icons/default/default-small_red.png'
												  }
						  },
					markerImage : 'resources/icons/default/default_red.png',
					smallImage : 'resources/icons/default/default-small_red.png',
					markerImageType : 'png',
					initialTimeScope:'all',
				},

			flag:'zoomto'});
	}

	setTimeout("__init()",1000);

	_TRACE("BasilicataEventi.js ----- EOF");
