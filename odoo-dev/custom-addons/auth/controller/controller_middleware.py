import jwt
from datetime import datetime, timedelta

JWT_SECRET = '12345'
JWT_ALGORITHM = 'HS256'
JWT_EXP_DELTA_DAYS = 1

class Middleware():
    def encode(self,searchUser):
        time_exp = datetime.now() + timedelta(days=JWT_EXP_DELTA_DAYS)
        payload = {
            'username':searchUser[0]['username'],
            'password':searchUser[0]['password'],
            'id':searchUser[0]['id'],
            'email':searchUser[0]['email'],
        }
        payload['exp'] = str(time_exp)
        token = jwt.encode({'user': payload}, JWT_SECRET, algorithm=JWT_ALGORITHM)
        return token
    
    def decode(self,data):
        try:
            decToken = jwt.decode(data['token'], JWT_SECRET, algorithms=JWT_ALGORITHM)
            time_exp = decToken['user']['exp']
            if time_exp >= str(datetime.now()):
                return decToken
            else:
                print("time_exp_ERROR")
                return 0
        except Exception as e:
            print("token_ERROR "+Exception)
            return 0