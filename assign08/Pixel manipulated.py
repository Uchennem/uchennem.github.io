from PIL import Image

image_sunset = Image.open("sunset.jpg")
image_boat = Image.open("boat.jpg")

image_combined = Image.new("RGB", image_sunset.size)
pixels_sunsetimage_sunset = image_sunset.load()
pixels_boat = image_boat.load()
pixels_combined = image_combined.load()
(width, height) = image_sunset.size
color = pixels_boat[1, 1]

print(f"Height: {height}")
print(f"width: {width}")

r, g, b = pixels_boat[0, 0]
print(r, g, b)
r, g, b = pixels_boat[400, 200]
print(r, g, b)
r, g, b = pixels_boat[200, 700]
print(r, g, b)
r, g, b = pixels_boat[250, 730]
print(r, g, b)


for row in range(width):
    for col in range(height):
        r, g, b = pixels_boat[row, col]
        if r <= 150 and g >= 215 and b <= 60:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 145 and g >= 210 and b <= 145:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 155 and g >= 210 and b <= 155:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 230 and g >= 254 and b <= 230:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 164 and g >= 164 and b <= 84:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 66 and g >= 120 and b <= 45:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        elif r <= 130 and g >= 200 and b <= 130:
            pixels_boat[row, col] = pixels_sunsetimage_sunset[row, col]
        pixels_combined[row, col] = pixels_boat[row, col]
image_combined.save('boat_of_sunsetimage_sunset.jpg')
image_combined.show()
