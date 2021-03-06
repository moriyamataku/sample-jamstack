const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN,
    })
  },
  contentTypes() {
    return {
      curriculumn: process.env.CTFL_CONTENT_TYPE_CURRICULUMN,
    }
  },
}
