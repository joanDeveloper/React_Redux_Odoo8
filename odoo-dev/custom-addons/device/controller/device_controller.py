import openerp.http as http
import json
from openerp import models, fields, api
from openerp.http import request
import xmlrpclib

import requests
from requests import Request,Session
import json

@http.route('/testing4', type="json", auth="none",website=True, cors="*")
def byCategory(self):
    b_url = "http://localhost:8069"
    url = "{}/web/session/authenticate".format(b_url)

    db = "devices"
    user = "admin"
    passwd = "admin"

    s = Session()

    data = {
        'jsonrpc':'2.0',
        'params': {
            'context': {},
            'db': db,
            'login': user,
            'password': passwd,
        },
    }

    headers = {
        'Content-type': 'application/json'
    }

    req = Request('POST',url,data=json.dumps(data),headers=headers)

    prepped = req.prepare()

    resp = s.send(prepped)

    session_id = json.loads(resp.text)['result']['session_id']
    print(session_id)
    # NOW MAKE REQUESTS AND PASS YOUR SESSION ID

    #res = requests.get(b_url + "/your/controller/path",cookies={'session_id':str(session_id)})

    #print(res.text)