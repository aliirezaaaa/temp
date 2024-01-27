const sql = require('mssql')
const config = {
    user: "اسم",
    password: 'رمز',
    server: 'سرور',
    database: 'دیتابیس',
    options: {
        encrypt: false,
        TrustServerCertificate: true
    }
}

const poolPromise = new sql.ConnectionPool(config).connect().then(pool => {
    console.log("connected to pool")
    return pool
}).catch(err => {
    console.log("Error " + err);
})