from flask import Blueprint

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')
meter_bp = Blueprint('meter', __name__, url_prefix='/api/meter')

from app.routes import auth, meter