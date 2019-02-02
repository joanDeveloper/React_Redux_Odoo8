import xmlrpclib, base64

class Credentials():
    def models(self):
        url = 'http://localhost:8069'
        db = base64.b64decode("ZGV2aWNlcw==")
        username = base64.b64decode('YWRtaW4=')
        password = base64.b64decode('YWRtaW4=')

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