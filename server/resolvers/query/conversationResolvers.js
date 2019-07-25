const authenticate = require('../authenticate')
const { createSelectQuery } = require  ('../makeQuery')

module.exports = {
  ConversationRooms: {
    async getUserName(parent, input, { req, app, postgres }){
      let userId = authenticate(app, req);

      let user_id_1 = parent.user_id_1
      let user_id_2 = parent.user_id_2

      let user_id_array = []

      if (userId === user_id_1) {
        user_id_array.push(user_id_2)
      }
      else {
        user_id_array.push(user_id_1)
      }

      const userNameQuery = {
        text: `SELECT fullname FROM hired.users WHERE hired.users.id = $1`,
        values: user_id_array
      };

      const result = await postgres.query(userNameQuery);

      return result.rows[0]

    },
  }
}
