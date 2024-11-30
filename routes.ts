/**
 * An array of public routes
 * these routes don't require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    '/',
] 


/**
 * An array of routes are used for authentication
 * these routes will redirect logged in users to the /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * The prefix for api routes Authencation
 * Routes that start with prefix are used for API authentication process
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * The default login redirect route
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"
