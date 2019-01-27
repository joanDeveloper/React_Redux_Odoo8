import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib
from credentials import Credentials
#from openerp.exceptions import ValidationError
import requests
from requests import Request,Session

class Device(http.Controller):
    def __init__(self):
        credential = Credentials().models()
        self._models = credential['models']
        self._db = credential['db']
        self._uid = credential['uid']
        self._password = credential['password']

    @http.route('/device', type="json", auth="none",website=True, cors="*")
    def lista(self):
        pagination = request.jsonrequest
        fields = ['slug','slug_category','model','description','price','battery','brand','camera']
        search = self._models.execute_kw(self._db, self._uid, self._password,
        'list.device', 'search_read',[[],fields],pagination)

        searchCount = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_count',[[],fields])

        return {"listDevices":search,"count":searchCount}
    
    @http.route('/device-detail', type="json", auth="none",website=True, cors="*")
    def detail(self):
        data = request.jsonrequest

        fields = ['slug','model','description','price','battery','brand','camera']
        search_detail = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_read',[[['slug', '=', data['slug']]],fields])
        
        return search_detail
    
    @http.route('/device-category', type="json", auth="none",website=True, cors="*")
    def byCategory(self):
        data = request.jsonrequest
        fields = ['slug','model','description','price','battery','brand','camera']
        
        search = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_read',[[['category_id', '=', data['slug']]],fields],
        {"limit":data['limit'],"offset":data['offset']})

        searchCount = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_count',[[['category_id', '=', data['slug']]]])

        return {"listDevicesByCategory":search,"count":searchCount}
    
    @http.route('/testing', type="json", auth="none",website=True, cors="*")
    def byCategory(self):
        # b_url = "http://localhost:8069"
        # url = "{}/web/session/authenticate".format(b_url)
        # db = "devices"
        # user = "joanmodaw@gmail.com"
        # passwd = "1234"
        # s = Session()
        # data = {
        #     'jsonrpc':'2.0',
        #     'params': {
        #         'context': {},
        #         'db': db,
        #         'login': user,
        #         'password': passwd,
        #     },
        # }
        # headers = {'Content-type': 'application/json'}
        # req = Request('POST',url,data=json.dumps(data),headers=headers)
        # prepped = req.prepare()
        # resp = s.send(prepped)
        # session_id = json.loads(resp.text)['result']['session_id']
        # print(session_id)
        # NOW MAKE REQUESTS AND PASS YOUR SESSION ID

        #res = requests.get(b_url + "/your/controller/path",cookies={'session_id':str(session_id)})

        #print(res.text)
        url_connect = "http://localhost:8069/web/session/authenticate"
        url = "http://localhost:8069/web/session/get_session_info"

        headers = {'Content-Type': 'application/json'}

        data_connect = {
            "params": {
                "db": "devices",
                "login": "admin",
                "password": "admin",
            }
        }

        data = {}

        session = requests.Session()

        r = session.post(url=url_connect, data=json.dumps(data_connect), headers=headers)

        if r.ok:
            result = r.json()['result']

            if result.get('session_id'):
                session.cookies['session_id'] = result.get('session_id')

        r = session.post(url=url, data=json.dumps(data), headers=headers)
        print(r)
        print(r.json())
            
            