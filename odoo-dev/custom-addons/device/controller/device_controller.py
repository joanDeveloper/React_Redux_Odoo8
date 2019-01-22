import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib

@http.route('/device-category', type="json", auth="none",website=True, cors="*")
def byCategory(self):
    print("ENTRA byCategory")
    url = 'http://localhost:8069'
    db = 'devices'
    username = 'admin'
    password = 'admin'

    common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
    uid = common.authenticate(db, username, password, {})
    models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

    pagination = request.jsonrequest
    print(pagination)
    #fields = ['slug','model','description','price','battery','brand','camera']
    #search = models.execute_kw(db, uid, password,
    #'list.device', 'search_read',[[],fields],pagination)

    #searchCount = models.execute_kw(db, uid, password,'list.device',
    #'search_count',[[],fields])
    #return {"listDevices":search,"count":searchCount}