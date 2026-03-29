// Utility functions for the website

/**
 * Concatenate class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format a number with commas
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Get current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Check if device is mobile
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = (text) => {
  if (typeof window === 'undefined') return;
  navigator.clipboard.writeText(text).catch((err) => {
    console.error('Failed to copy:', err);
  });
};
