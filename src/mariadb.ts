import * as mysql from 'mysql';

const con = mysql.createConnection({
  host: "vandervalkit.nl",
  user: "quintenvandervalk",
  password: "dMc3f35!5",
  database: "domein"
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});

export const getPageData = async (page: string): Promise<any> => {
  return new Promise(function(resolve, reject) {
    con.query(`SELECT * FROM pagedata WHERE PageName='${page}'`, function (err, rows) {
        if (err) {
            return reject(err);
        }
        resolve(rows);
    })
  })
}

export async function updatePageData(data: any) {
  const page = data.page;
  delete data.page;
  const payload: string = JSON.stringify(data).replace(/'/g, "\\'");
  con.connect(() => {
    con.query(`UPDATE pagedata SET PageData='${payload}' WHERE PageName='${page}'`, function(err, rows) {
      if (err) throw err;
      return rows
    });
  });
}
