export default function (context) {
  console.log('[Middleware] Check Auth and Set Auth')
  context.store.dispatch('auth/initAuth', context.req)
}
