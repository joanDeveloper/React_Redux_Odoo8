import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib
from ...petitions.credentials import Credentials

class getOffers(http.Controller):
    def __init__(self):
        credential = Credentials().models()
        self._models = credential['models']
        self._db = credential['db']
        self._uid = credential['uid']
        self._password = credential['password']

    @http.route('/device-offers', type="json", auth="none",website=True, cors="*")
    def offers(self):
        fields = ['slug','slug_category','model','description','price','battery','brand','camera','media','oferta']
                
        search = self._models.execute_kw(self._db, self._uid, self._password,
        'list.device', 'search_read',[[],fields])
        print(search)
        return {"listDevices":search}