import tensorflow as tf
import numpy as np
from tensorflow import image

# Load the trained model
model = tf.keras.models.load_model('hair_loss_classifier.h5')

# Define a function to predict an image
def predict_image(image_path):
    # Load the image from file and resize it to match the input shape of the model
    img = image.load_img(image_path, target_size=(224, 224))
    # Convert the image to a NumPy array
    x = image.img_to_array(img)
    # Normalize the pixel values to be between 0 and 1
    x = x / 255.0
    # Add a batch dimension to the array
    x = np.expand_dims(x, axis=0)
    # Use the model to make a prediction on the image
    predictions = model.predict(x)
    # Get the index of the predicted class
    predicted_class = np.argmax(predictions[0])
    # Return the predicted class label
    if predicted_class == 0:
        return 'Hair loss'
    else:
        return 'Healthy Hair'

result = predict_image('test_image.png')
print(result)