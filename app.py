from flask import Flask, render_template

import utils
from data import SourceData

app = Flask(__name__)
source = SourceData()


@app.route('/')
def hello_world():
    return render_template("index.html")
@app.route('/time')
def get_time():
    return utils.get_time()
@app.route('/local_data')
def get_local_data():
    return utils.get_local_data()

@app.route('/aqi_level')
def get_aqi_level():
    return utils.get_aqi_level()
@app.route('/main')
def data_vision():
    return render_template("main.html")
@app.route('/pollution_to_json')
def pollution_to_json():
    return utils.pollution_to_json()

@app.route('/china_map')
def china_map():
    data=source.china
    return data




if __name__ == '__main__':
    app.run()
