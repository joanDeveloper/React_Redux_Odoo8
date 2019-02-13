from openerp import models, fields, api

class Comment(models.Model):
    _name = 'comment.items'

    user_id = fields.Many2one('auth.user','id')
    device_id = fields.Many2one('list.device','slug')
    #device_id = fields.One2many(
    #     'list.device', 'id', string='device_id')
    comment = fields.Char('comment', required=True)