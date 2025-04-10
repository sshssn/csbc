/**
 * CloudFront CDN configuration for optimized asset delivery
 */

// CloudFront distribution domain
export const CLOUDFRONT_DOMAIN = 'https://d1example12345.cloudfront.net';

// Video mapping to CloudFront
export const VIDEO_SOURCES = {
  "/": `${CLOUDFRONT_DOMAIN}/videos/home-hero.mp4`,
  "/about-us": `${CLOUDFRONT_DOMAIN}/videos/about-us-hero.mp4`,
  "/sustainability": `${CLOUDFRONT_DOMAIN}/videos/sustainability-hero.mp4`,
  "/services": `${CLOUDFRONT_DOMAIN}/videos/services-hero.mp4`,
  "/events/upcoming": `${CLOUDFRONT_DOMAIN}/videos/events-hero.mp4`,
  "/contact-us": `${CLOUDFRONT_DOMAIN}/videos/contact-us-hero.mp4`,
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

// Default poster
export const DEFAULT_POSTER = `${CLOUDFRONT_DOMAIN}/images/posters/default-poster.jpg`; 