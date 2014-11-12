=== Multimap ===
Contributors: Fulldesign AG
Tags: maps,address,google maps,google,contact,marker,multiple markers, multi map, multi-map
Requires at least: 3.0.1
Tested up to: 4.0
Stable tag: 4.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Automatically turns [multimap] [/multimap] shortcode into a google map embed code beeing able to display multiple markers with info windows.


== Description ==
Javascript based plugin fork of <a href="http://www.idiotinside.com/automaps-wordpress-plugin/" target="_blank">Auto maps</a>
Automatically turn [multimap][/multimap] into a google map embed code. It can have more than one address divided by a semicolon (";"). This version supports only one map per page maptype ROADMAP.
One map can have multiple markers with info window displaying the address. If no shortcode args are given the plugin return default values.

Optional args data:
data_width: width of the map div (default: 100%)
data_height: height of the map div (default: 300px)
data_zoom: initial zoom of the map (default: 13)
data_latitude: initial latitude value of the map (displayed only if no address is given, default: 48.0)
data_longitude: initial longitude value of the map (displayed only if no address is given, default: 15.0)


Example: 
`[multimap data_height="250px" data_zoom="12"]
Port de Villefranche Darse - CCI Nice Côte d'Azur, Chemin du Lazaret, 06230 Villefranche-sur-Mer, France;
Fort du Mont Alban, Chemin du Fort du Mont Alban, 06032 Nice, France;
Villa Ephrussi de Rothschild, 1 Avenue Ephrussi de Rothschild, 06230 Saint-Jean-Cap-Ferrat, France;
Parc du Mont Boron, 06300 Nice, France;
15 Chemin de Passable, 06230 Saint-Jean-Cap-Ferrat, France
[/multimap]`

For more information visit plugin page of <a href=" http://fulldesign.ch/multi-map-plugin/">Multimap</a>


== Installation ==


1. Upload multimaps folder to the /wp-content/plugins/ directory
2. Activate the plugin through the 'Plugins' menu in WordPress 



== Frequently Asked Questions ==


Example code:
[multimap data_height="250px" data_zoom="12"]
Port de Villefranche Darse - CCI Nice Côte d'Azur, Chemin du Lazaret, 06230 Villefranche-sur-Mer, France;
Fort du Mont Alban, Chemin du Fort du Mont Alban, 06032 Nice, France;
Villa Ephrussi de Rothschild, 1 Avenue Ephrussi de Rothschild, 06230 Saint-Jean-Cap-Ferrat, France;
Parc du Mont Boron, 06300 Nice, France;
15 Chemin de Passable, 06230 Saint-Jean-Cap-Ferrat, France
[/multimap]

== Screenshots ==

1. screenshot1.png 
2. screenshot2.png 

== Changelog ==

= 1.0.0 =
* Initial release.

== Upgrade Notice ==
= 1.0.1 =
[multimap] shortcode added.
