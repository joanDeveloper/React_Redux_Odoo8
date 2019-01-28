import openerp.http as http
import json
from openerp.http import request
from ...petitions.credentials import Credentials
import xmlrpclib, base64, jwt

class Auth(http.Controller):
    def __init__(self):
        credential = Credentials().models()
        self._models = credential['models']
        self._db = credential['db']
        self._uid = credential['uid']
        self._password = credential['password']
    
    @http.route('/register', type="json", auth="none",website=True, cors="*")
    def register(self):
        print("ENTRA EN REGISTER")
        data = request.jsonrequest

        searchCount = self._models.execute_kw(self._db,self._uid,self._password,'auth.user',
        'search_count',[[['email', '=', data['email']]]])

        #testEnc = base64.b64encode(data['password'])
        #testDec = base64.b64decode(testEnc)

        #token = jwt.encode({'user_id': 1}, '12345', algorithm='HS256')
        #decToken = jwt.decode(token, '12345', algorithms=['HS256'])
        #print(decToken)

        #auth_token = req.headers.get('Authentication-Token')

        if searchCount == 0:
            self._models.execute_kw(self._db, self._uid, self._password, 'auth.user', 'create', [{
                'username': data['username'],
                'email': data['email'],
                'password': base64.b64encode(data['password'])
            }])
            print("usuario creado OK")
            return {"message":"Has sido registrado correctamente"}
        else:
            print("email ya existe")
            return {"error":{"message":"el email ya existe"}}
        
    @http.route('/signin', type="json", auth="none",website=True, cors="*")
    def login(self):
        data = request.jsonrequest

        searchEmail = self._models.execute_kw(self._db,self._uid,self._password,'auth.user',
        'search_count',[[['email', '=', data['email']]]])

        if searchEmail == 0:
            return {"error":{"message":"el email no existe"}}
            
        else:
            print("email correcto")
            passwordEncode = base64.b64encode(data['password'])
            searchPasswd = self._models.execute_kw(self._db,self._uid,self._password,'auth.user',
            'search_count',[ [['email', '=', data['email']], ['password', '=', passwordEncode] ]])

            if searchPasswd >= 1:
                print("USUARIO Y PASSWD CORRECTO")
                fields = ['id','email','username','password']
                searchUser = self._models.execute_kw(self._db, self._uid, self._password,'auth.user',
                'search_read',[[['email', '=', data['email']]],fields])
                print(searchUser)
            else:
                print("PASSWORD INCORRECTO")
                return {"error":{"message":"password incorrecto"}}