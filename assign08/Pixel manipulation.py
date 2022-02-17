from PIL import Image
image_original = Image.open("Cat.jpg")

width, height = image_original.size
print(width, height)
pixels_original = image_original.load()
r, g, b = pixels_original[100, 200]
print(r, g, b)
pixels_original[100, 200] = (255, 255, 255)
pixels_original[700, 500] = (0, 0, 255)
pixels_original[701, 201] = (255, 255, 0)
pixels_original[702, 202] = (0, 0, 0)
pixels_original[703, 203] = (255, 0, 255)
image_original.show()
