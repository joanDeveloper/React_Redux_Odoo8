import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib

class getCategories(http.Controller):
    
    @http.route('/categories', type="json", auth="none",website=True, cors="*")
    def categories(self):
        print("ENTRA EN CATEGORIES")
        url = 'http://localhost:8069'
        db = 'devices'
        username = 'admin'
        password = 'admin'

        common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
        uid = common.authenticate(db, username, password, {})
        models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

        #pagination = request.jsonrequest
        fields = ['slug_category','name','description']
        search = models.execute_kw(db, uid, password,
        'list.categories', 'search_read',[[],fields])

        return search
        
        