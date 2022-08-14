<?php
/**
 * 
 * Front Page
 * 
 * @package WordPress
 * @subpackage Timber
 * @since Timber 0.1
 * 
*/

$context = Timber::context();

//post refers to generated content for the page
$timber_post = new Timber\post();
$context['post'] = $timber_post;

// posts refers to a WP Post Query of Posts
$args = array('posts_per_page' => 6);
$context['posts'] = new Timber\PostQuery($args);

Timber::render('home.twig', $context);