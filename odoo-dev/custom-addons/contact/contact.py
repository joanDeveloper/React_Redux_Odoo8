import openerp.http as http
from openerp.http import request
import json
import smtplib #email odoo
import simplejson
from openerp.http import Response
from openerp import exceptions

class MyController(http.Controller):

    @http.route('/contact/', type="json", auth="none", website=True, cors='*')
    def contact(self):
        data = request.jsonrequest
        email = data['contact']['email']
        subject = data['contact']['subject']
        name = data['contact']['name']
        comment = data['contact']['comment']

        if email is "":
            print("NOT EMAIL")
            #Response.status = '400 Not Email'
            #return Response(json.dumps({"yes":"i am json"}),content_type='application/json;charset=utf-8',status=400)
            #raise exceptions.ValidationError('not email')
            return {
                "error":True,
                "status":400,
                "message":"not email"
            }
        elif subject is "":
            print("NOT SUBJECT")
            return {
                "error":True,
                "status":400,
                "message":"not subject"
            }
        elif name is "":
            print("NOT NAME")
            return {
                "error":True,
                "status":400,
                "message":"not name"
            }
        elif comment is "":
            print("NOT COMMENT")
            return {
                "error":True,
                "status":400,
                "message":"not comment"
            }
        else:
            try:
                sender = "joanmodaw@gmail.com"
                receivers = email
                print(email)
                message ="Hola "+name+" su mensaje ha sido recibido, en breve le contestaremos referente al tema "+subject+". Developer Odoo."
                smtpObj = smtplib.SMTP(host='smtp.gmail.com', port=587)
                smtpObj.ehlo()
                smtpObj.starttls()
                smtpObj.ehlo()
                smtpObj.login(user="joanmodaw@gmail.com", password="********")
                smtpObj.sendmail(sender, receivers, message)
                print "***********************"
                print "Successfully sent email"
                print "***********************"
                return {
                    "error":False,
                    "status":200,
                    "message":"successfully sent email"
                }
            except ValueError:
                print "***********************"
                print "ERROR to sent email"
                print "***********************"
                return {"error":"error to send email: "+ValueError}