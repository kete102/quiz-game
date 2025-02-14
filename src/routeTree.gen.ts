/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as GameSetupImport } from './routes/game-setup'
import { Route as GameImport } from './routes/game'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const GameSetupRoute = GameSetupImport.update({
  id: '/game-setup',
  path: '/game-setup',
  getParentRoute: () => rootRoute,
} as any)

const GameRoute = GameImport.update({
  id: '/game',
  path: '/game',
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
    '/game': {
      id: '/game'
      path: '/game'
      fullPath: '/game'
      preLoaderRoute: typeof GameImport
      parentRoute: typeof rootRoute
    }
    '/game-setup': {
      id: '/game-setup'
      path: '/game-setup'
      fullPath: '/game-setup'
      preLoaderRoute: typeof GameSetupImport
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
  '/game': typeof GameRoute
  '/game-setup': typeof GameSetupRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/game': typeof GameRoute
  '/game-setup': typeof GameSetupRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/game': typeof GameRoute
  '/game-setup': typeof GameSetupRoute
  '/login': typeof LoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/game' | '/game-setup' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/game' | '/game-setup' | '/login'
  id: '__root__' | '/' | '/game' | '/game-setup' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GameRoute: typeof GameRoute
  GameSetupRoute: typeof GameSetupRoute
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GameRoute: GameRoute,
  GameSetupRoute: GameSetupRoute,
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
        "/game",
        "/game-setup",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/game": {
      "filePath": "game.tsx"
    },
    "/game-setup": {
      "filePath": "game-setup.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
