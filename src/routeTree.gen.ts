/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as GuestGameImport } from './routes/guest-game'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const GuestGameRoute = GuestGameImport.update({
  id: '/guest-game',
  path: '/guest-game',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/guest-game': {
      id: '/guest-game'
      path: '/guest-game'
      fullPath: '/guest-game'
      preLoaderRoute: typeof GuestGameImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/guest-game': typeof GuestGameRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/guest-game': typeof GuestGameRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/guest-game': typeof GuestGameRoute
  '/login': typeof LoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/guest-game' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/guest-game' | '/login'
  id: '__root__' | '/' | '/dashboard' | '/guest-game' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRoute
  GuestGameRoute: typeof GuestGameRoute
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRoute,
  GuestGameRoute: GuestGameRoute,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/guest-game",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/guest-game": {
      "filePath": "guest-game.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
