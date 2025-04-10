/**
 * CloudFront CDN configuration for optimized asset delivery
 */

// CloudFront distribution domain
export const CLOUDFRONT_DOMAIN = 'https://d2h9e6wlbpf4nc.cloudfront.net';

// Video mapping to CloudFront
export const VIDEO_SOURCES = {
  "/": `${CLOUDFRONT_DOMAIN}/videos/home-hero.mp4`,
  "/about-us": `${CLOUDFRONT_DOMAIN}/videos/about-us-hero.mp4`,
  "/sustainability": `${CLOUDFRONT_DOMAIN}/videos/sustainability-hero.mp4`,
  "/services": `${CLOUDFRONT_DOMAIN}/videos/services-hero.mp4`,
  "/events/upcoming": `${CLOUDFRONT_DOMAIN}/videos/events-hero.mp4`,
  "/contact-us": `${CLOUDFRONT_DOMAIN}/videos/contact-us-hero.mp4`,
};

// Fallback to original videos if CloudFront fails
export const FALLBACK_VIDEO_SOURCES = {
  "/": "/video/hero.mp4",
  "/about-us": "/video/hero2.mp4",
  "/sustainability": "/video/hero3.mp4",
  "/services": "/video/hero4.mp4",
  "/events/upcoming": "/video/hero5.mp4",
  "/contact-us": "/video/hero.mp4",
};

// Image optimization via CloudFront
export const getOptimizedImageUrl = (path: string) => {
  return `${CLOUDFRONT_DOMAIN}/images/${path}`;
};

// Video poster images
export const VIDEO_POSTERS = {
  "/": `${CLOUDFRONT_DOMAIN}/images/posters/home-poster.jpg`,
  "/about-us": `${CLOUDFRONT_DOMAIN}/images/posters/about-us-poster.jpg`,
  "/sustainability": `${CLOUDFRONT_DOMAIN}/images/posters/sustainability-poster.jpg`, 
  "/services": `${CLOUDFRONT_DOMAIN}/images/posters/services-poster.jpg`,
  "/events/upcoming": `${CLOUDFRONT_DOMAIN}/images/posters/events-poster.jpg`,
  "/contact-us": `${CLOUDFRONT_DOMAIN}/images/posters/contact-us-poster.jpg`,
};

// Fallback poster images (local)
export const FALLBACK_POSTERS = {
  "/": "/images/hero-poster.jpg",
  "/about-us": "/images/about-hero-poster.jpg",
  "/sustainability": "/images/sustainability-hero-poster.jpg",
  "/services": "/images/services-hero-poster.jpg",
  "/events/upcoming": "/images/events-hero-poster.jpg",
  "/contact-us": "/images/contact-hero-poster.jpg",
};

// Default poster
export const DEFAULT_POSTER = `${CLOUDFRONT_DOMAIN}/images/posters/default-poster.jpg`;
export const DEFAULT_FALLBACK_POSTER = "/images/hero-poster.jpg"; 