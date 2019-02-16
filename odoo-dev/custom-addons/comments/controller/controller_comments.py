import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib
from ...petitions.credentials import Credentials

class CommentsController(http.Controller):
    def __init__(self):
        credential = Credentials().models()
        self._models = credential['models']
        self._db = credential['db']
        self._uid = credential['uid']
        self._password = credential['password']

    @http.route('/comments', type="json", auth="none",website=True, cors="*")
    def writeComment(self):
        print("ENTRA EN COMMENTS")
        data = request.jsonrequest
        
        try:
            self._models.execute_kw(self._db, self._uid, self._password, 'comment.items', 'create', [{
                    'user_id': data['user'],
                    'device_id': data['slug_device'],
                    'comment': data['comment']}])
        except Exception as e:
            return {"error":{"message":"error al crear comentario " + e}}

        fields = ['comment','user_id','device_id']
        search = self._models.execute_kw(self._db, self._uid, self._password,'comment.items',
        'search_read',[[['device_id', '=', data['slug_device']]],fields])
        
        cont = 0
        for user in search:
            searchUser = self._models.execute_kw(self._db, self._uid, self._password,'auth.user',
            'search_read',[[['id', '=', user['user_id'][0]]],['username']])
            search[cont]['user_id'] = searchUser[0]['username']
            cont +=1
            
        return {"comments":search}
    
    @http.route('/getComments', type="json", auth="none",website=True, cors="*")
    def getComment(self):
        print("ENTRA EN GET_COMMENTS")
        data = request.jsonrequest
        print(data['device_id'])
        fields = ['comment','user_id','device_id']
        searchComments = self._models.execute_kw(self._db, self._uid, self._password,'comment.items',
        'search_read',[[['device_id', '=', data['device_id']]],fields])
        print(searchComments)
        cont = 0
        for user in searchComments:
            searchUser = self._models.execute_kw(self._db, self._uid, self._password,'auth.user',
            'search_read',[[['id', '=', user['user_id'][0]]],['username']])
            searchComments[cont]['user_id'] = searchUser[0]['username']
            cont +=1

        print(searchComments)
        return {"comments":searchComments}