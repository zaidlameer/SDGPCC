import io
import os
import numpy as np
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
from PIL import Image
import tensorflow as tf

# Define the Flask app
app = Flask(__name__)

# Load the saved model
model = tf.keras.models.load_model(r'C:\Users\zaidl\OneDrive\Desktop\new sdgp\sdgpcc\backend\Code\doctor_hair.h5')

# Define the classes of your image classification task
class_names = ['aa', 'sp', 'hh']
IMG_SIZE = (224, 224)
# aa = Alopecia Areata
# sp = Scalp Psoriasis
# hh = Healthy Hair 

def preprocess_image(image):
    img = image.convert('RGB').resize(IMG_SIZE)
    img_array = np.array(img)
    img_array = img_array.astype('float32') / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# Define the route for the homepage
@app.route('/')
def index():
    return render_template('home.html')

# Define the route for the about page
@app.route('/about')
def about():
    return render_template('about.html')

# Define the route for the classification results
@app.route('/predict', methods=['POST'])
def predict():
    # Get the image file from the form submission
    file = request.files['image']

    # Read the image file and convert to numpy array
    img = Image.open(io.BytesIO(file.read()))
    img_array = preprocess_image(img)
    

    # Make predictions with the model
    predictions = model.predict(img_array)

    # Get the predicted class name
    predicted_class = class_names[np.argmax(predictions)]

    # Render the HTML template for the classification result
    return render_template(predicted_class + '.html')

if __name__ == '__main__':
    app.run(debug=True)
