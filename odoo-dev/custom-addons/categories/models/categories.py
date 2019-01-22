import openerp.http as http
from openerp.http import request
import json
from openerp import models, fields, api
import logging
from openerp.http import request
_logger = logging.getLogger("device")

class Categories(models.Model):
    _name = 'list.categories'

    slug_category = fields.Char('slug', required=True)
    #device_id = fields.Many2one('list.device', 'slug_device')
    name = fields.Char('name', required=True)
    description = fields.Char('description', required=True)