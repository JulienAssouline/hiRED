const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')

const { createCookie, setCookie } = require('./setCookie')
const { createInsertQuery, createUpdateQuery, createSelectQuery } = require('../makeQuery')

module.exports = {
  Mutation: {
    async signup(parent, { input }, { req, app, postgres }){
      try {
        const { email, password, fullname } = input

        const checkDuplicateQuery = createSelectQuery(['email'], 'hired.users', 'email', email)
        const checkDuplicateQueryResult = await postgres.query(checkDuplicateQuery)

        if (checkDuplicateQueryResult.rows.length) throw 'This email has already been taken'

        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUserObject = {
          email: email,
          password: hashedPassword,
          fullname: fullname,
        }

        const signupQuery = createInsertQuery(newUserObject, 'hired.users')
        const signupQueryResult = await postgres.query(signupQuery)

        const tokenData = signupQueryResult.rows[0].id
        let myJWTToken = await createCookie(tokenData, 16)
        setCookie('hiRED_app', myJWTToken, req.res)

        return {
          message: 'success'
        }
      }catch(err){
        throw err
      }
    },

    async signupPage2(parent, { input }, { req, app, postgres}) {
      try {
        const user_id = authenticate(app, req)
        const { campus, program_name, study_year, study_cohort, role, current_job, location, mentor } = input

        const updateUserObject = {
          'campus': campus,
          // 'study_year': study_year,
          // 'study_cohort': study_cohort,
          'role': role,
          'current_job': current_job,
          'location': location
        }
        
        const updateUserQuery = createUpdateQuery(updateUserObject, 'id', 'hired.users', user_id)
        await postgres.query(updateUserQuery)

        if (mentor) {
          const insertMentorObject = {
            user_id: user_id, 
            status: true
          }
          const insertMentorQuery = createInsertQuery(insertMentorObject, 'hired.mentors')
          await postgres.query(insertMentorQuery)
        }

        // if (program_name) {
        //   const insertProgramObject = {
        //     name: program_name
        //   }
        //   const insertProgramQuery = createInsertQuery(insertProgramObject, 'hired.programs')
        //   const insertProgramResult = cr

        //   const insertPorgramsUsersObject = {
        //     user_id: user_id,
        //     program_id: program_id
        //   }
        // }
        return {
          message: 'success'
        }
      }catch(err){
        throw err
      }
    },

    async login(parent, { input }, { req, app, postgres }){
      try {
        let {email, password} = input
        email = email.toLowerCase()

        const passwordQuery = createSelectQuery(['id, password'], 'hired.users', 'email', email)
        const queryResult = await postgres.query(passwordQuery)

        if (!queryResult.rows.length) throw 'incorrect email'

        const dbPassword = queryResult.rows[0].password
        const match = await bcrypt.compare(password, dbPassword)

        if (!match) throw 'incorrect password'

        const tokenData = queryResult.rows[0].id
        let myJWTToken = await createCookie(tokenData, 16)
        setCookie('hiRED_app', myJWTToken, req.res)

        return {
          message: 'Login Successful!'
        }
      }catch(err){
        throw err
      }
    },
    async addUserPortfolio(parent, { input }, { req, app, postgres}){
      try {
        
        const { user_id, title, description, type, custom_link, api_link, thumbnail } = input;

        const newPortfolioObject = {
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
        }

        const addUserPortfolioQuery = createInsertQuery(newPortfolioObject, 'hired.portfolio', true);

        const addUserPortfolioQueryResult = await postgres.query(addUserPortfolioQuery);
                
        return {
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
        }
      }
      catch (e) {
        console.log("Error in addPortfolio: ", e.message);
        throw e.message;
      }
    },
    async addMentors(parent, {input}, { req, app, postgres }) {
    let user_id =  authenticate(app, req)

          status = input.status

      const newMentor = {
        text: "INSERT INTO hired.mentors (user_id, status) VALUES ($1, $2) RETURNING *",
        values: [user_id, status]
      }

      let result = await postgres.query(newMentor)

      return {
        message: "success"
      }
    }
  },
}



