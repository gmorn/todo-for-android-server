const db = require('../db')

class TodoController {
	async add(req, res) {
		const { userId, todoTitle } = req.body
		const currentDate = new Date()

		try {
			await db.query(
				`INSERT INTO todo
          (title, user_id, date) 
          values ($1, $2, $3)`,
				[todoTitle, userId, currentDate]
			)
			res.status(200).send('todo add')
		} catch {
			res.status(500).send('Not Found')
		}
	}

	async complete(req, res) {
		const { todoId, completed } = req.body
		const currentDate = new Date()
		try {
			await db.query(
				`UPDATE todo
        SET completed = $1, date = $2
        WHERE id = $3;`,
				[completed, currentDate, todoId]
			)
			res.status(200).send('todo complete')
		} catch {
			res.status(500).send('Not Found')
		}
	}
	async update(req, res) {
		const { todoId, title } = req.body
		const currentDate = new Date()
		try {
			await db.query(
				`UPDATE todo
        SET title = $1, date = $2
        WHERE id = $3;`,
				[title, currentDate, todoId]
			)
			res.status(200).send('todo update')
		} catch {
			res.status(500).send('Not Found')
		}
	}
	async delete(req, res) {
		const { todoId } = req.body
		try {
			await db.query(`DELETE FROM todo WHERE id = $1;`, [todoId])
			res.status(200).send('todo delete')
		} catch {
			res.status(500).send('Not Found')
		}
	}
	async getTodoByUserId(req, res) {
		const { userId } = req.body
		try {
			const userTodo = await db.query(
				`SELECT * FROM todo WHERE user_id = $1 ORDER BY (date, \'YYYY-MM-DD"T"HH24:MI:SS.USSTZH:TZM\') DESC`,
				[userId]
			)
			res.json(userTodo.rows)
		} catch {
			res.status(500).send('Not Found')
		}
	}
}

module.exports = new TodoController()
