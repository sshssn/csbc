/**
 * S3/CloudFront configuration for optimized asset delivery
 */

// Cloud configuration
export const S3_DOMAIN = 'https://d2h9e6wlbpf4nc.cloudfront.net';

// Video mapping to S3
export const VIDEO_SOURCES = {
  "/": `${S3_DOMAIN}/videos/home-hero.mp4`,
  "/about-us": `${S3_DOMAIN}/videos/about-hero.mp4`,
  "/sustainability": `${S3_DOMAIN}/videos/sustainability-hero.mp4`,
  "/services": `${S3_DOMAIN}/videos/services-hero.mp4`,
  "/events/upcoming": `${S3_DOMAIN}/videos/events-hero.mp4`,
  "/contact-us": `${S3_DOMAIN}/videos/contact-hero.mp4`,
};

// Fallback to original videos if S3 fails
export const FALLBACK_VIDEO_SOURCES = {
  "/": "/video/hero.mp4",
  "/about-us": "/video/hero2.mp4",
  "/sustainability": "/video/hero3.mp4",
  "/services": "/video/hero4.mp4",
  "/events/upcoming": "/video/hero5.mp4",
  "/contact-us": "/video/hero.mp4",
};

// Default fallback video
export const DEFAULT_FALLBACK_VIDEO = "/video/hero.mp4";

// Video poster images from CloudFront
export const VIDEO_POSTERS = {
  "/": `${S3_DOMAIN}/images/posters/home-poster.jpg`,
  "/about-us": `${S3_DOMAIN}/images/posters/about-poster.jpg`,
  "/sustainability": `${S3_DOMAIN}/images/posters/sustainability-poster.jpg`, 
  "/services": `${S3_DOMAIN}/images/posters/services-poster.jpg`,
  "/events/upcoming": `${S3_DOMAIN}/images/posters/events-poster.jpg`,
  "/contact-us": `${S3_DOMAIN}/images/posters/contact-poster.jpg`,
};

// Fallback posters
export const FALLBACK_POSTERS = {
  "/": "/images/posters/home-poster.jpg",
  "/about-us": "/images/posters/about-us-poster.jpg",
  "/sustainability": "/images/posters/sustainability-poster.jpg", 
  "/services": "/images/posters/services-poster.jpg",
  "/events/upcoming": "/images/posters/events-poster.jpg",
  "/contact-us": "/images/posters/contact-us-poster.jpg",
};

// Default poster
export const DEFAULT_POSTER = `${S3_DOMAIN}/images/posters/home-poster.jpg`;
export const DEFAULT_FALLBACK_POSTER = "/images/posters/home-poster.jpg"; 