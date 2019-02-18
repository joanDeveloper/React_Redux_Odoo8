import openerp.http as http
from openerp.http import request
import json
from openerp import models, fields, api
import logging
from openerp.http import request
_logger = logging.getLogger("device")

class Device(models.Model):
    _name = 'list.device'

    category_id = fields.Many2one('list.categories','id')
    slug = fields.Char('slug', required=True)
    model = fields.Char('model', required=True)
    description = fields.Char('description', required=True)
    price = fields.Integer('price', required=True)
    battery = fields.Char('battery', required=True)
    brand = fields.Char('brand', required=True)
    camera = fields.Integer('camera', required=True)
    media = fields.Char('media', required=True)
    oferta = fields.Boolean(string='Oferta')