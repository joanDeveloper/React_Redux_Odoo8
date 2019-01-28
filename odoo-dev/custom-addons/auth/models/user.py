from openerp import models, fields

class User(models.Model):
    _name = 'auth.user'

    name = fields.Char('name')
    username = fields.Char('username', required=True)
    email = fields.Char('email', required=True)
    password = fields.Char('password', required=True)
    token = fields.Char('token')
    media = fields.Char('media')