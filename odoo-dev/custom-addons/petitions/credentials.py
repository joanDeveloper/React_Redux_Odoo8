import xmlrpclib

class Credentials():
    def models(self):
        url = 'http://localhost:8069'
        db = 'devices'
        username = 'admin'
        password = 'admin'

        common = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))
        uid = common.authenticate(db, username, password, {})
        models = xmlrpclib.ServerProxy('{}/xmlrpc/2/object'.format(url))

        credentials = {
            "db":db,
            "password":password,
            "uid":uid,
            "models":models
        }
        return credentials