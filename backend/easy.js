const oracledb = require('oracledb');
const dbConfig = {
 user: 'admin',
 password: 'Database287//',
 connectString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1521)(host=adb.ca-montreal-1.oraclecloud.com))(connect_data=(service_name=geed4444a402754_getsoftdatabase_medium.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))"
}


async function backend(){
    connection = await oracledb.getConnection(dbConfig);
const result = await connection.execute(
    'SELECT * FROM Users');

};
backend();