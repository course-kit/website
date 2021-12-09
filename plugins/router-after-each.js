// plugins/after-each.js:
export default async ({ app, store }) => {

  app.router.afterEach((to, from) => {
    store.commit('nav/setClosed')
  });

}
