# MySQL常用命令汇总

## 基础命令
- 登录数据库
```
mysql -u root -p
```
- 显示当前时间
```
select now();
```
- 退出(登出)数据库
```
exit();
```
- 查看所有数据
```
show databases;
```
- 创建数据库(test为数据库名)
```
create database test charset=utf8;
```
- 删除数据库(慎用)
```
drop database test;
```
- 使用(选择)数据库
```
use test;
```
- 查看当前使用的数据库
```
select database();
```
- 查看当前数据库中所有数据表
```
show tables;
```

## 表结构操作命令

- 创建表(表名为studens,包含id、name、gender、height、age)

``` mysql
create table students(
id int unsigned not null primary key auto_increment,
name varchar(20) not null,
gender enum("男","女"),
height decimal(3,2),
age tinyint default 0
);
```

``` mysql
##### 常见数据类型:
整数：int，bit
小数：decimal
字符串：varchar,char
日期时间: date, time, datetime
枚举类型:enum
##### 常见的约束:
主键 primary key: 物理上存储的顺序. MySQL 建议所有表的主键字段都叫 id, 类型为 int unsigned
非空 not null: 此字段不允许填写空值.
惟一 unique: 此字段的值不允许重复.
默认 default: 当不填写字段对应的值会使用默认值，如果填写时以填写为准.
外键 foreign key: 对关系字段进行约束, 当为关系字段填写值时, 会到关联的表中查询此值是否存在, 如果存在则填写成功, 如果不存在则填写失败并抛出异常.
```

- 删除表
```
drop table students;
```
- 修改表-添加字段(添加birthday字段)
```
alter table students add birthday datatime;
```
- 修改表-仅修改字段类型
```
alter table students modify birthday data;
```
- 修改表-修改字段名和字段类型(修改birthday字段为birth)
```
alter table students change birthday birth datatime not null;
```
- 修改表-删除字段(删除birth字段)
```
alter table students drop birth;
```
- 查看表结构
```
desc students;
```
## 数据库表基本增、删、改、查命令
- 查询所有数据
```
select * from students;
```
- 查询指定列数据
```
select name,age from students;
```
- 添加数据-全列插入
```
insert into students values(0,"小明","男",1.75,18);
```
- 添加数据-部分列插入
```
insert into students(name,gender,age) values("小红","女","17");
```
- 添加数据-全列多行插入
```
insert into students values (0,"小张","男",1.75,18),(null,"小王","男",1.68,17);
```
- 添加数据-部分多行插入
```
insert into students(name,gender,age) values("小花","女","17"),("小黑","男","19");
```
- 修改数据
```
update students set name = "张三" where id = 2;
```
- 删除数据
```
-- 永久删除:
delete from students where id = 1;
-- 标记式删除:
alter table students add is_delete bit not null default 0;
update students set is_delete = 1 where id = 2;
```

## 条件查询
- as 别名
```
select name as 姓名 from students;
```
- distinct 去重
```
select distinct name from students;
```
- desc降序 \ asc升序
- where条件查询
```
--查询年龄大于18的学生
select * from students where age>18;
--查询id在2和4之间的学生(包含)
select * from students where id between 2 and 4;
--查询id在（3，5，7）内的学生
select * from students where id in (3,5,7);
--查询姓名最后一个字为"红"的学生
select * from students where name like '%红';
--查询名字是两个字且以"小"开头的学生
select * from students where name like '小_';
--查询未删除男生信息，按学号降序
 select * from students where is_delete = 0 and gender = '男' order by id desc;
--查询前3行男生信息
 select * from students where gender = '男'  limit 3;
```

## 聚合函数查询(聚合函数不统计null值)
- 查询学生个数
```
select count(*) from students;
```
- 查询男生标号的最值
```
-- 查询男生的编号最大值
select max(id) from students where gender="男";
-- 查询男生的编号最小值
select min(id) from students where gender="男";
- 求女生的平均身高
select avg(height) from students where gender="女";
```

## 分组查询
- 按gender字段分组
```
select gender from students group by gender;
```
- 根据name和gender字段进行分组
```
select gender,name from students group by gender,name;
```
- 根据gender字段进行分组， 查询每个分组的姓名信息
```
-- group_concat显示每个分组的指定字段的信息
select gender,group_concat(name) from students group by gender;
```
- 统计不同性别的平均年龄,并保留两位小数
```
select gender,round(avg(age),2) from students group by gender;
```
- 根据gender字段进行分组，统计分组条数大于2的
```
select gender, count(*) from students group by gender having count(*) > 2;
```
- 根据gender字段进行分组,行末汇总所有人的年龄(rollup 在行末显示总汇总信息)
```
select gender, group_concat(age) from students group by gender with rollup;
```

## 多表连接查询
inner/left/right on :连接查询关键字
on:连接查询条件
先创建班级表:
```
create table classes(id int unsigned not null primary key auto_increment,name varchar(20) not null);
```
插入3条班级数据:
```
insert into classes values(0,"一班"),(null,"二班"),(null,"三班");
```
students 表增加c_id字段,并赋值

- 内连接(以两表指定字段的交集连接)
```
select * from students as s inner join classes as c on s.c_id=c.id
```
- 左连接(以左表为基准数查询右表数据,右表数据不存在时显示null)
```
select * from students as s right join classes as c on s.c_id = c.id
```
- 右连接(与左连接相反)
```
select * from students as s right join classes as c on s.c_id = c.id
```
- 自连接(左表右表是同一个数据源表,自连接必须对表取不同别名)
```
select c.id, c.title, c.pid, p.title from areas c inner join areas p on c.pid = p.id;
```
- 子查询
在一个 select 语句中,嵌入了另外一个 select 语句, 那么被嵌入的 select 语句称之为子查询语句，外部那个select语句则称为主查询.
子查询是可以独立使用的查询语句,辅助主查询充当数据源.

- 查询大于平均年龄的学生
```
select * from students where age > (select avg(age) from students);
```
- 查找年龄最大,身高最高的学生
```
select * from students where (age,height) = (select max(age),max(height) from students);
```

## 添加/删除外键约束
- 添加外键约束
创建表时添加:
```
 create table school(
id int not null primary key auto_increment,
name varchar(30)
);
create table teacher(
id int not null primary key auto_increment,
name varchar(30), 
s_id int, 
foreign key (s_id) references school(id)
);
```
- 为已存在的表添加:
```
alter table students add foreign key (c_id) references classes(id);
```
- 删除外键
```
alter table drop foreign key teacher_ibfk_1;
(*外键名使用"show create table teacher"命令查找*)
```

## Mysql高级使用 - 将查询结果插入到其他表中
已存在商品表goods,包含字段:种类cate_name,商品名name,价格price
```
-- 先创建单独的商品分类表,仅包含id和商品名name
create table goods_cate(
id int not null primary key auto_increment, name varchar(30) not null
);

-- 查询goods表中商品的分类信息
select cate_name from goods group by cate_name;

-- 将查询结果插入到good_cates表中
insert into goods_cate(name) select cate_name from goods group by cate_name;

-- 查看goods表中的商品分类名称对应的商品分类id
select * from goods g inner join goods_cate gc on g.cate_name=gc.name;

-- 将goods表中的分类名称更改成商品分类表中对应的分类id，连接更新表中的某个字段
updata goods inner join goods_cate on goods.cate_name=goods_cate.name set goods.cate_name=goods_cate.id;
```




非商用，侵删，转自: [https://www.jianshu.com/p/d4da6d056a77](https://www.jianshu.com/p/d4da6d056a77)
