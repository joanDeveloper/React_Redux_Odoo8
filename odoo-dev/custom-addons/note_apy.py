import xmlrpclib
from pprint import pprint

#url = 'http://localhost:8069'
#db = 'v8dev'
#username = 'admin'
#password = 'admin'

#common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
#uid = common.authenticate(db, username, password, {})

#models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

#search = models.execute_kw(db, uid, password,
#    'res.partner', 'search',
#    [[['is_company', '=', True], ['customer', '=', True]]])

#searchPag = models.execute_kw(db, uid, password,
#    'res.partner', 'search',
#    [[['is_company', '=', True], ['customer', '=', True]]],
#    {'offset': 10, 'limit': 5})

#pprint(common.version())
#pprint(uid)
#pprint(search)
#pprint(searchPag)

import xmlrpclib
class NoteAPI():
    def __init__(self, srv, db, user, pwd):
        common = xmlrpclib.ServerProxy(
        '%s/xmlrpc/2/common' % srv)
        self.api = xmlrpclib.ServerProxy(
        '%s/xmlrpc/2/object' % srv)
        self.uid = common.authenticate(db, user, pwd, {})
        self.pwd = pwd
        self.db = db
        self.model = 'auth.user'

    def get(self, ids=None):
        domain = [('id',' in', ids)] if ids else []
        fields = ['id', 'password',"username", "token"]
        return self.execute('search_read', [domain, fields])

    def execute(self, method, arg_list, kwarg_dict=None):
        return self.api.execute_kw(
        self.db, self.uid, self.pwd, self.model,
        method, arg_list, kwarg_dict or {})

    def set(self, text, id=None):
        if id:
            self.execute('write', [[id], {'name': text}])
        else:
            vals = {'name': text, 'user_id': self.uid}
            id = self.execute('create', [vals])
    
if __name__ == '__main__':
    srv, db = 'http://localhost:8069', 'devices'
    user, pwd = 'admin', 'admin'
    api = NoteAPI(srv, db, user, pwd)
    pprint(api.get())