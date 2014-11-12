<?php
/*
Plugin Name: Multi Map
Plugin URI: http://fulldesign.ch/download/
Description: Turns shortcode [multimap][/multimap] into a Google map with multiple markers using semicolon separated values.
Version: 1.0.1
Author: Fulldesign AG
Author URI: http://fulldesign.ch/
License: GPL2
*/


function gmm_inject_data() {
    echo '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>';
    echo '<script src="'.plugin_dir_url(__FILE__) . 'multi-map.js"></script>';
    echo '<link rel="stylesheet" id="multi-map-css" href="'.plugin_dir_url(__FILE__) .'/css/multi-map.css" type="text/css" media="all" />';
}
add_action( 'wp_head', 'gmm_inject_data' );


function gmm_shortcode( $atts, $content = null ) {
	$args = shortcode_atts( array(
		'data_width' => '100%',
                'data_height' => '300px',
                'data_zoom' => '13',
                'data_latitude' => '48',
                'data_longitude' => '15',
                'data_maptype' => 'ROADMAP',     
	), $atts, 'multimap' );
	return '<multimap data_width="' . $args['data_width'] . '" data_height="' . $args['data_height'] . '" data_zoom="' . $args['data_zoom'] . '" data_latitude="' . $args['data_latitude'] . '" data_longitude="' . $args['data_longitude'] . '" data_maptype="' . $args['data_maptype'] . '">' . $content . '</multimap>';
}
add_shortcode( 'multimap', 'gmm_shortcode' );
 
?>