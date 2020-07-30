const contentful = require('contentful')
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN,
    })
  },
  contentTypes() {
    return {
      post: process.env.CTFL_CONTENT_TYPE_POST,
    }
  },
}
