import cv2
import matplotlib.pyplot as plt

# Read the image
image = cv2.imread('/mnt/data/your_image.jpg')

# Convert to grayscale
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Invert the grayscale image
inverted_image = 255 - gray_image

# Apply Gaussian Blur
blurred = cv2.GaussianBlur(inverted_image, (21, 21), 0)

# Invert the blurred image
inverted_blurred = 255 - blurred

# Create the pencil sketch
sketch = cv2.divide(gray_image, inverted_blurred, scale=256.0)

# Plotting and saving the image
plt.figure(figsize=(10, 10))
plt.imshow(sketch, cmap='gray')
plt.axis('off')

# Save the sketch as a file
plt.savefig('/mnt/data/sketch_output_saved.jpg', bbox_inches='tight', pad_inches=0)

# Show the sketch in the notebook
plt.show()
