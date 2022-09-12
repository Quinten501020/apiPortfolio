import * as mariadb from 'mariadb';

const connection = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    database: 'domein'
});

export async function getPageData(page: string) {
  const conn = await connection.getConnection();
  const rows = await conn.query(`SELECT * from pageData WHERE PageName='${page}'`);
  await conn.release()
  return rows
}