function toType() { return 'varchar(256)'; }
function field2sql(conn) { conn.exec('alter table Person add column name ' + toType() + ';'); }
function toType$0() { return 'integer'; }
function field2sql$0(conn) { conn.exec('alter table Person add column age ' + toType$0() + ';'); }
function field2sql$1(conn) { conn.exec('alter table Address add column street ' + toType() + ';'); }
function field2sql$2(conn) { conn.exec('alter table Address add column number ' + toType$0() + ';'); }
function toType$1() { return 'boolean'; }
function field2sql$3(conn) { conn.exec('alter table Address add column central ' + toType$1() + ';'); }
function sql(conn) {
    conn.exec('create table Person;');
    field2sql(conn);
    field2sql$0(conn);
    conn.exec('create table Address;');
    field2sql$1(conn);
    field2sql$2(conn);
    field2sql$3(conn);
}