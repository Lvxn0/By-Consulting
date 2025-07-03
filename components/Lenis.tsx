"use client";

/**
 * This file re-exports everything from the 'lenis/react' package.
 *
 * What is Lenis?
 * - Lenis is a modern, smooth scrolling library for React (and other frameworks).
 * - It enhances the default browser scrolling with smooth, customizable scroll behavior.
 * - Features include inertia, easing, scroll snapping, and better control over scroll events.
 * - Helps create smooth scrolling experiences for websites and apps, improving UI fluidity.
 *
 * Purpose of this file:
 * - Marks this module as a Client Component in Next.js (required because 'lenis/react' uses client-only hooks).
 * - Acts as a centralized import point for all exports from `lenis/react` (e.g., ReactLenis component).
 * - Simplifies imports elsewhere by letting you import Lenis functionality from this file instead of 'lenis/react' directly.
 * - Prepares the ground for potential custom wrappers or configuration around Lenis in the future.
 *
 * Why is "use client" needed here?
 * - Next.js requires explicit marking of client components.
 * - `lenis/react` uses React hooks that depend on the client environment (window, DOM).
 *
 * Usage:
 * - Import `ReactLenis` or other hooks from this file to implement smooth scrolling in your app.
 *
 * Note:
 * - Ensure `lenis` and `@studio-freight/lenis` (or the package you use) is installed.
 * - This file is a safe pass-through with no additional side effects.
 */

export * from "lenis/react";
