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
        fields = ['slug','slug_category','model','description','price','battery','brand','camera','media','oferta']
            
        search = self._models.execute_kw(self._db, self._uid, self._password,
        'list.device', 'search_read',[[],fields],pagination)

        searchCount = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_count',[[],fields])

        return {"listDevices":search,"count":searchCount}
    
    @http.route('/device-detail', type="json", auth="none",website=True, cors="*")
    def detail(self):
        data = request.jsonrequest

        fields = ['slug','model','description','price','battery','brand','camera','media']
        search_detail = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_read',[[['slug', '=', data['slug']]],fields])
        
        return search_detail
    
    @http.route('/device-category', type="json", auth="none",website=True, cors="*")
    def byCategory(self):
        data = request.jsonrequest
        fields = ['slug','model','description','price','battery','brand','camera','media','oferta']
        
        search = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_read',[[['category_id', '=', data['slug']]],fields],
        {"limit":data['limit'],"offset":data['offset']})

        searchCount = self._models.execute_kw(self._db, self._uid, self._password,'list.device',
        'search_count',[[['category_id', '=', data['slug']]]])

        return {"listDevicesByCategory":search,"count":searchCount}