import requests
import json
import time
import pymysql




from sqlalchemy.dialects.mysql import pymysql

#获取年月日
def get_time():
    time_str=time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年","月","日")

#获取经纬度
def get_lat_lng():
    url="http://ipinfo.io/json?token=b24485e3d30cb2"
    res=requests.get(url)
    data_str=res.text
    data_json=json.loads(data_str)
    print(type(data_json))
    print(data_json)
    local=data_json["loc"].split(",")
    return local
#获取城市缩写
def get_position():
    url = "http://ipinfo.io/json?token=b24485e3d30cb2"
    res = requests.get(url)
    data_str = res.text#将获取到的api内容转换为字符串
    data_json = json.loads(data_str)#将json字符串导入
    # print(type(data_json))
    #print(data_json.keys())
    return data_json#返回ip字典
#数据库连接相关
def get_conn():

    conn=pymysql.connect(host="sh-cdb-5rvnhu92.sql.tencentcdb.com:59198",
                         user="root",
                         password="3XYFcBvvUPZVQi8",
                         database="pollution",
                         charset="utf8")
    cursor=conn.cursor()#执行完毕结果集默认为元组
    return conn,cursor

def close_conn(conn,cursor):
    cursor.close()
    conn.close()
#通用查询封装
def query(sql,*args):
    conn,cursor=get_conn()
    cursor.execute(sql,args)
    res=cursor.fetchall()
    close_conn(conn,cursor)
    return res
def get_local_data():
    #以元组形式返回
    url1 = "https://api.waqi.info/feed/"
    url2 = get_position()["city"]
    url3 = "/?token=bb6af694fabe86970903f1d398c3a61d90cfdeb6"
    res = requests.get(url1 + url2 + url3)
    data_str = res.text
    data_json = json.loads(data_str)
    # print(type(data_json))
    #print(data_json)
    #local_city=data_json["attributions"]['name']
    #print(data_json.keys())
    #print(data_json['data'].keys())
    #print(data_json['data']['iaqi'].keys())
    local_humidness = data_json["data"]["iaqi"]["h"]["v"]
    local_temperature = data_json["data"]["iaqi"]["t"]["v"]
    local_air_pressure = data_json["data"]["iaqi"]["p"]["v"]
    local_wind = data_json["data"]["iaqi"]["w"]["v"]
    data = {
        "local_humidness":local_humidness,
        "local_temperature":local_temperature,
        "local_air_pressure": local_air_pressure,
        "local_wind":local_wind,
        "local_position":get_position()["ip"]
    }
    return data
#获取aqi等级
def get_aqi_level():
    url1 = "https://api.waqi.info/feed/"
    url2 = get_position()["city"]
    url3 = "/?token=bb6af694fabe86970903f1d398c3a61d90cfdeb6"
    res = requests.get(url1 + url2 + url3)
    data_str = res.text
    data_json = json.loads(data_str)

    return data_json["data"]



# 数据库转json
def database_to_json():
    pass
#aqi数据转json
def pollution_to_json():
    url1 = "https://api.waqi.info/feed/"
    url2 = get_position()["city"]
    url3 = "/?token=bb6af694fabe86970903f1d398c3a61d90cfdeb6"
    res = requests.get(url1 + url2 + url3)
    data_str = res.text
    data_json = json.loads(data_str)
    local_aqi = data_json["data"]["forecast"]["daily"]
    o3 = json.dumps(local_aqi["o3"])
    pm25 = json.dumps(local_aqi["o3"])
    pm10 = json.dumps(local_aqi["o3"])
    o3 = json.dumps(local_aqi["o3"])
    return o3


if __name__ == '__main__':
    print(get_local_data())
    pass


