from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import MeterReading, db
from app.routes import meter_bp
from datetime import datetime, timedelta
import random  # For demo data generation

@meter_bp.route('/current', methods=['GET'])
@jwt_required()
def get_current_reading():
    user_id = get_jwt_identity()
    
    # For demo purposes, generate a random reading if none exists
    reading = MeterReading.query.filter_by(user_id=user_id).order_by(MeterReading.timestamp.desc()).first()
    
    if not reading:
        reading = MeterReading(
            user_id=user_id,
            reading=random.uniform(40, 50),
            daily_usage=random.uniform(10, 15),
            estimated_bill=random.uniform(80, 100)
        )
        db.session.add(reading)
        db.session.commit()
    
    return jsonify(reading.to_dict()), 200

@meter_bp.route('/history', methods=['GET'])
@jwt_required()
def get_usage_history():
    user_id = get_jwt_identity()
    
    # Get readings from the last 7 days
    start_date = datetime.utcnow() - timedelta(days=7)
    readings = MeterReading.query.filter(
        MeterReading.user_id == user_id,
        MeterReading.timestamp >= start_date
    ).order_by(MeterReading.timestamp.desc()).all()
    
    return jsonify([reading.to_dict() for reading in readings]), 200

@meter_bp.route('/alerts', methods=['GET'])
@jwt_required()
def get_alerts():
    user_id = get_jwt_identity()
    
    # Demo alerts - in a real application, these would be generated based on actual usage patterns
    alerts = [
        {'message': 'Unusual usage detected yesterday', 'type': 'warning'},
        {'message': 'Peak hours approaching', 'type': 'info'}
    ]
    
    return jsonify(alerts), 200