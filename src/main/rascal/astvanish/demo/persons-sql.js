function field2sql(conn) { conn.exec('alter table Person add column name ' + 'varchar(256)' + ';'); }
function field2sql$0(conn) { conn.exec('alter table Person add column age ' + 'integer' + ';'); }
function field2sql$1(conn) { conn.exec('alter table Address add column street ' + 'varchar(256)' + ';'); }
function field2sql$2(conn) { conn.exec('alter table Address add column number ' + 'integer' + ';'); }
function field2sql$3(conn) { conn.exec('alter table Address add column central ' + 'boolean' + ';'); }
function sql(conn) {
    conn.exec('create table Person;');
    field2sql(conn);
    field2sql$0(conn);
    conn.exec('create table Address;');
    field2sql$1(conn);
    field2sql$2(conn);
    field2sql$3(conn);
}