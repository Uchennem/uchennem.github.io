from PIL import Image

image_beach = Image.open("beach.jpg")
image_cactus = Image.open("cactus.jpg")

image_combined = Image.new("RGB", image_beach.size)
pixels_beach = image_beach.load()
pixels_cactus = image_cactus.load()
pixels_combined = image_combined.load()
(width, height) = image_beach.size
color = pixels_cactus[1, 1]

print(image_beach.size)
print(image_cactus.size)

print(f"Height: {height}")
print(f"width: {width}")


for row in range(width):
    for col in range(height):
        r, g, b = pixels_cactus[row, col]
        if r <= 150 and g >= 215 and b <= 60:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 145 and g >= 210 and b <= 145:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 155 and g >= 210 and b <= 155:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 230 and g >= 254 and b <= 230:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 164 and g >= 164 and b <= 84:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 66 and g >= 120 and b <= 45:
            pixels_cactus[row, col] = pixels_beach[row, col]
        elif r <= 130 and g >= 200 and b <= 130:
            pixels_cactus[row, col] = pixels_beach[row, col]
        pixels_combined[row, col] = pixels_cactus[row, col]
image_combined.save('cactus_of_beach.jpg')
image_combined.show()
