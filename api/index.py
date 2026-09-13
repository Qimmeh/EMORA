import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import create_app

app = create_app()

class VercelPathFix:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        path = environ.get('PATH_INFO', '')
        if path and not path.startswith('/api'):
            environ['PATH_INFO'] = '/api' + ('' if path.startswith('/') else '/') + path
        return self.app(environ, start_response)

app.wsgi_app = VercelPathFix(app.wsgi_app)

