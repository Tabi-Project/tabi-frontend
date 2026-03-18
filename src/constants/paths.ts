// On Netlify the app is served from the root — no basePath prefix needed.
// withBasePath is kept so no import changes are required across the codebase.
export const withBasePath = (path: string): string =>
  path.startsWith("/") ? path : `/${path}`;
