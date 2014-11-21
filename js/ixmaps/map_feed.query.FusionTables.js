/**********************************************************************
map_feed.FusionTables.js

$Comment: provides JavaScript for import of geolocated Fusion Tables Data
$Source : map_feed.FusionTables.js,v $

$InitialAuthor: guenter richter $
$InitialDate: 2012/10/12 $
$Author: guenter richter $
$Id:map_feed.FusionTables.js 1 2012-10-12 10:30:35Z Guenter Richter $

Copyright (c) Guenter Richter
$Log:map_feed.FusionTables,v $
**********************************************************************/

/** 
 * @fileoverview This file is a feed plugin to import Fusion Table Data 
 *
 * @author Guenter Richter guenter.richter@ixmaps.com
 * @version 0.9
 */

/**
 * define namespace ixmaps
 */

window.ixmaps = window.ixmaps || {};
ixmaps.feed = ixmaps.feed || {};
ixmaps.feed.parse = ixmaps.feed.parse || {};
(function() {


/**
 * add FusionTableLayer 
 * Uses 'exporttable' function of Fusion Tables to query a KML feed
 * @param szTableId the Fusion Table id - can be found at the tables properties
 * @param nGeoCol the column that contains the geo positions in Lat/Lon pairs ( e.g. 43.234516,13.764352 )
 * @param szFlag a flag to define actions to perform with the loaded layer ( e.g. 'zoomto' )
 * @param szTitle overwrite the title (name) of the layer ( google fusion tables returns a generic name )
 * @type void
 */
	ixmaps.feed.queryFusionTable = function(szTableId,nGeoCol,szFlag,szTitle,opt){

		var query = "SELECT *" +
			" FROM "+ szTableId +" ";
		var queryText = encodeURIComponent(query);
		var gvizQuery = new google.visualization.Query(
			'http://www.google.com/fusiontables/gvizdata?tq='  + queryText);

		// Send query
		gvizQuery.send(function(response) {
			console.log(response);
		});
	};

/**
 * end of namespace
 */

})();

// -----------------------------
// EOF
// -----------------------------
