const db = require('../db')

class UserController {
	async login(req, res) {
		const { name, password } = req.body
		try {
			const user = await db.query(`SELECT * FROM users WHERE name = $1`, [
				name
			])
			if (user.rows.length === 0) {
				res.status(400).send('Not Found')
			} else {
				if (password === user.rows[0].password) {
					res.json({ id: user.rows[0].id })
				} else {
					res.status(404).send('Not Found')
				}
			}
		} catch {
			res.status(500).send('Not Found')
		}
	}

	async registration(req, res) {
		const { name, password } = req.body

		try {
      const check = await db.query(`SELECT * FROM users WHERE name = $1`, [
        name
			])
			console.log(check)
			if (check.rows.length === 0) {
				const newUser = await db.query(
					`INSERT INTO "users" 
          (name, password) 
          values ($1, $2) RETURNING *`,
					[name, password]
				)
				res.json({ id: newUser.rows[0].id })
			} else {
				res.status(400).send('Not Found')
			}
		} catch {
			res.status(500).send('Not Found')
		}
	}
}

module.exports = new UserController()
