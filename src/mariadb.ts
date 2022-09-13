import * as mariadb from 'mariadb';
import { landingpageDataDefinition } from "./Models/landingpageData";

const connection = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    database: 'domein'
});

export async function getPageData(page: string) {
  const conn = await connection.getConnection();
  const rows = await conn.query(`SELECT * from pagedata WHERE PageName='${page}'`);
  await conn.release()
  return rows
}

export async function updatePageData(data: any) {
  const page = data.page;
  delete data.page;
  const payload: string = JSON.stringify(data).replace(/'/g, "\\'");

  const conn = await connection.getConnection();
  const rows = await conn.query(`UPDATE pageData SET PageData='${payload}' WHERE PageName='${page}'`);

  await conn.release()
  return rows
}

