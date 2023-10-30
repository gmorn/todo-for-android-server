const Pool = require('pg').Pool
const pool = new Pool({
	user: 'todo_list_ibel_user',
	password: '3VGCzasnnyvF2jQWnxx5MgEMSFQwsh6l',
	host: 'dpg-ckv6nfmb0mos73f9kelg-a.frankfurt-postgres.render.com',
	port: 5432,
	database: 'todo_list_ibel',
	ssl: {
		rejectUnauthorized: false
	}
})
pool
	.connect()
	.then((client) => {
		console.log('Connected to the database')
		client.release()
	})
	.catch((err) => {
		console.error('Error connecting to the database')
	})

module.exports = pool
