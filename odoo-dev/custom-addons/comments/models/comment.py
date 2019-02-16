from openerp import models, fields, api

class Comment(models.Model):
    _name = 'comment.items'

    user_id = fields.Many2one('auth.user','id')
    device_id = fields.Many2one('list.device','slug')
    comment = fields.Char('comment', required=True)