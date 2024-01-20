import pymysql
from flask import Flask, render_template, jsonify

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.run(debug=True, host='0.0.0.0')

# 初始化
app = Flask(__name__)

@app.route('/')
def render():
    println('123')
    return render_template('index.html')

# 作者作品平均评分前十四
@app.route("/echarts_1")
def echart1():
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='password', database='douban', charset='utf8')#建立数据库连接
    cur = conn.cursor()
    sql = "select author, avg_grade from author_grade "
    cur.execute(sql)  # 执行单条sql语句
    result = cur.fetchall()  # 接收全部的返回结果行
    data = [n[0] for n in result]
    grade = [n[1] for n in result]
    cur.close()  # 关闭指针对象
    conn.close()  # 关闭连接对象
    return jsonify({"data": data, "grade": grade})

# 作品评分前十四
@app.route("/echarts_2")
def echart2():
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='password', database='douban', charset='utf8')#建立数据库连接
    cur = conn.cursor()
    sql = "select name, avg_grade from name_grade"
    cur.execute(sql)  # 执行单条sql语句
    result = cur.fetchall()  # 接收全部的返回结果行
    data = [n[0] for n in result]
    grade = [n[1] for n in result]
    cur.close()  # 关闭指针对象
    conn.close()  # 关闭连接对象
    return jsonify({"data": data, "grade": grade})

# 出版作品数量前十出版社
@app.route("/echarts_3")
def echart3():
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='password', database='douban', charset='utf8')#建立数据库连接
    cur = conn.cursor()
    sql = "select publisher, count from publisher_num order by count desc limit 10"
    cur.execute(sql)  # 执行单条sql语句
    result = cur.fetchall()  # 接收全部的返回结果行
    data = [n[0] for n in result]
    num = [n[1] for n in result]
    cur.close()  # 关闭指针对象
    conn.close()  # 关闭连接对象
    return jsonify({"data": data, "num": num})

# 各年份出版书数量饼状图
@app.route("/echarts_4")
def echart4():
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='password', database='douban', charset='utf8')#建立数据库连接
    cur = conn.cursor()
    sql1 = "select sum(num) from year_publish_num where time not in('2001-2010','2011-2020')"
    sql2 = "select num from year_publish_num where time = '2001-2010'"
    sql3 = "select num from year_publish_num where time = '2011-2020'"
    cur.execute(sql1)#执行单条sql语句
    result_sql1 = cur.fetchall()#接收全部的返回结果行
    cur.execute(sql2)
    result_sql2 = cur.fetchall()
    cur.execute(sql3)
    result_sql3 = cur.fetchall()
    data = [result_sql1[0][0], result_sql2[0][0], result_sql3[0][0]]
    cur.close()  # 关闭指针对象
    conn.close()  # 关闭连接对象
    return jsonify({"d1": data[0], "d2": data[1], "d3": data[2]})


if __name__ == '__main__':
    app.debug = True
    app.run()