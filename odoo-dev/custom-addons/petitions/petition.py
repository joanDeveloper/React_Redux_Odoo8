import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib

class getDevice(http.Controller):
    
    @http.route('/device', type="json", auth="none",website=True, cors="*")
    def index(self):
        url = 'http://localhost:8069'
        db = 'devices'
        username = 'admin'
        password = 'admin'

        common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
        uid = common.authenticate(db, username, password, {})
        models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

        pagination = request.jsonrequest
        print(pagination)
        fields = ['id', 'slug','model','description','price','battery','brand','camera']
        search = models.execute_kw(db, uid, password,
        'list.device', 'search_read',[[],fields],pagination)
        print(search)
        searchCount = models.execute_kw(db, uid, password,
        'list.device', 'search_count',[[],fields])
        print(searchCount)
        return {"listDevices":search,"count":searchCount}
    
    @http.route('/device-detail', type="json", auth="none",website=True, cors="*")
    def indexe(self):
        url = 'http://localhost:8069'
        db = 'devices'
        username = 'admin'
        password = 'admin'

        data = request.jsonrequest
        #print(data['slug'])
        common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
        uid = common.authenticate(db, username, password, {})
        models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

        fields = ['id', 'slug','model','description','price','battery','brand','camera']
        search_detail = models.execute_kw(db, uid, password,
        'list.device', 'search_read',[[['slug', '=', data['slug']]],fields])
        print(search_detail)
        
        return search_detail
        
        