import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib
from credentials import Credentials

class getDevice(http.Controller):
    
    @http.route('/device', type="json", auth="none",website=True, cors="*")
    def lista(self):
        credential = Credentials().models()
        models = credential['models']
        db = credential['db']
        uid = credential['uid']
        password = credential['password']

        pagination = request.jsonrequest
        fields = ['slug','slug_category','model','description','price','battery','brand','camera']
        search = models.execute_kw(db, uid, password,
        'list.device', 'search_read',[[],fields],pagination)

        searchCount = models.execute_kw(db, uid, password,'list.device',
        'search_count',[[],fields])

        return {"listDevices":search,"count":searchCount}
    
    @http.route('/device-detail', type="json", auth="none",website=True, cors="*")
    def detail(self):
        credential = Credentials().models()
        models = credential['models']
        db = credential['db']
        uid = credential['uid']
        password = credential['password']

        data = request.jsonrequest

        fields = ['slug','model','description','price','battery','brand','camera']
        search_detail = models.execute_kw(db, uid, password,'list.device',
        'search_read',[[['slug', '=', data['slug']]],fields])
        
        return search_detail
    
    @http.route('/device-category', type="json", auth="none",website=True, cors="*")
    def byCategory(self):
        print("ENTRA byCategory")
        credential = Credentials().models()
        models = credential['models']
        db = credential['db']
        uid = credential['uid']
        password = credential['password']

        data = request.jsonrequest
        print(data)
        fields = ['slug','model','description','price','battery','brand','camera']
        
        search = models.execute_kw(db, uid, password,'list.device',
        'search_read',[[['category_id', '=', data['slug']]],fields],
        {"limit":data['limit'],"offset":data['offset']})

        searchCount = models.execute_kw(db, uid, password,'list.device',
        'search_count',[[['category_id', '=', data['slug']]]])

        print(search)
        print(searchCount)
        return {"listDevicesByCategory":search,"count":searchCount}
        
        