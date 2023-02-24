import tensorflow as tf  # now import the tensorflow module
import numpy as np

print(tf.version)

t = tf.zeros([5,5,5,5])
t = tf.reshape(t,[625])
print(t)
