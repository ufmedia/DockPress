<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/templates/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * @package WhalePress
 * @since    1.0.0
 */

$context = Timber::context();

$timber_post     = Timber::get_post();
$context['post'] = $timber_post;
if ( is_front_page() ) {
	Timber::render( array( 'home.twig' ), $context );
} else {
	Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );
}
