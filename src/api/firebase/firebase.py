from firebase_admin import credentials, initialize_app, storage
from .firebase_settings import FIREBASE_CONFIG

cred = credentials.Certificate(FIREBASE_CONFIG)
firebase_app = initialize_app(credential=cred, options={"storageBucket": "vvvervionniko.appspot.com"})

class FirebaseBucket: 
    def __init__(self):
        self.bucket=storage.bucket()

    def upload_file(self, file, filename):
        new_file=self.bucket.blob(filename)
        new_file.upload_from_file(file)
        new_file.make_public()
        return new_file.public_url

    def delete_file(self, filename):
        erase_file=self.bucket.blob(filename)
        erase_file.delete()
        return True

Bucket=FirebaseBucket()