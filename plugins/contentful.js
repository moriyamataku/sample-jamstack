const contentful = require('contentful')
const envSet = require(`~/env.${process.env.NODE_ENV || 'development'}.js`)

module.exports = {
  createClient() {
    return contentful.createClient({
      space: envSet.CTFL_SPACE,
      accessToken: envSet.CTFL_ACCESS_TOKEN,
    })
  },
  contentTypes() {
    return {
      post: envSet.CTFL_CONTENT_TYPE_POST,
    }
  },
}
